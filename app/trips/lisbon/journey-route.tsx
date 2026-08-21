"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import {
  afternoonBranch,
  branchAfterStopId,
  journeyStops,
  type BranchOption,
  type JourneyStop,
} from "./data";

type Point = { x: number; y: number };

function buildPath(points: Point[]) {
  if (points.length < 2) return "";
  let d = `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`;
  for (let i = 1; i < points.length; i += 1) {
    const prev = points[i - 1];
    const curr = points[i];
    const midY = (prev.y + curr.y) / 2;
    d += ` C ${prev.x.toFixed(1)} ${midY.toFixed(1)}, ${curr.x.toFixed(1)} ${midY.toFixed(1)}, ${curr.x.toFixed(1)} ${curr.y.toFixed(1)}`;
  }
  return d;
}

function StopCard({
  stop,
  active,
  visited,
  selected,
  onSelect,
}: {
  stop: JourneyStop;
  active: boolean;
  visited: boolean;
  selected: boolean;
  onSelect: (id: string) => void;
}) {
  return (
    <article
      className={[
        "trip-stop",
        `trip-stop--${stop.align}`,
        active ? "is-active" : "",
        visited ? "is-visited" : "",
        selected ? "is-selected" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      data-stop-id={stop.id}
    >
      <button
        type="button"
        className="trip-stop-hit"
        aria-expanded={selected}
        aria-controls="trip-stop-detail"
        onClick={() => onSelect(stop.id)}
      >
        <span className="trip-stop-node" aria-hidden="true" />
        <span className="trip-stop-body">
          <span className="trip-stop-category">{stop.category}</span>
          <span className="trip-stop-name">{stop.name}</span>
          <span className="trip-stop-phrase">{stop.phrase}</span>
        </span>
      </button>
    </article>
  );
}

function DetailPanel({
  stop,
  onClose,
}: {
  stop: JourneyStop | null;
  onClose: () => void;
}) {
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (stop) panelRef.current?.focus();
  }, [stop]);

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") onClose();
  };

  if (!stop) {
    return (
      <div className="trip-detail trip-detail--empty" id="trip-stop-detail">
        <p>Select a stop for a short Altrove note.</p>
      </div>
    );
  }

  return (
    <div
      ref={panelRef}
      id="trip-stop-detail"
      className="trip-detail"
      role="dialog"
      aria-modal="false"
      aria-labelledby={titleId}
      tabIndex={-1}
      onKeyDown={onKeyDown}
    >
      <button
        type="button"
        className="trip-detail-close"
        onClick={onClose}
        aria-label="Close detail"
      >
        Close
      </button>
      {stop.image ? (
        <div className="trip-detail-media">
          <img src={stop.image} alt={stop.imageAlt ?? ""} loading="lazy" />
        </div>
      ) : null}
      <p className="trip-detail-category">{stop.category}</p>
      <h3 id={titleId}>{stop.name}</h3>
      <div className="trip-detail-block">
        <h4>Why Altrove chose it</h4>
        <p>{stop.why}</p>
      </div>
      <div className="trip-detail-block">
        <h4>Altrove note</h4>
        <p>{stop.note}</p>
      </div>
    </div>
  );
}

function AfternoonBranch({
  selected,
  onSelect,
}: {
  selected: BranchOption | null;
  onSelect: (option: BranchOption) => void;
}) {
  return (
    <section className="trip-branch" aria-labelledby="trip-branch-title">
      <p className="trip-branch-eyebrow">A soft fork in the day</p>
      <h3 id="trip-branch-title">What kind of afternoon?</h3>
      <p className="trip-branch-lede">
        Altrove creates rhythm, not rigid schedules. Choose a direction.
      </p>
      <div
        className="trip-branch-options"
        role="radiogroup"
        aria-label="Afternoon choice"
      >
        {afternoonBranch.map((option) => {
          const isOn = selected?.id === option.id;
          return (
            <button
              key={option.id}
              type="button"
              role="radio"
              aria-checked={isOn}
              className={["trip-branch-option", isOn ? "is-selected" : ""]
                .filter(Boolean)
                .join(" ")}
              onClick={() => onSelect(option)}
            >
              <span className="trip-branch-label">{option.label}</span>
              <span className="trip-branch-place">{option.place}</span>
            </button>
          );
        })}
      </div>
      {selected ? (
        <div className="trip-branch-continuation" aria-live="polite">
          <p className="trip-branch-continuation-title">{selected.place}</p>
          <p>{selected.continuation}</p>
          <p className="trip-branch-note">
            <span>Altrove note</span>
            {selected.note}
          </p>
        </div>
      ) : null}
    </section>
  );
}

export function LisbonJourneyRoute() {
  const trackRef = useRef<HTMLDivElement>(null);
  const drawPathRef = useRef<SVGPathElement>(null);
  const pathLengthRef = useRef(0);
  const reducedRef = useRef(false);
  const rafRef = useRef(0);

  const [pathD, setPathD] = useState("");
  const [svgSize, setSvgSize] = useState({ w: 0, h: 0 });
  const [activeId, setActiveId] = useState<string | null>(
    journeyStops[0]?.id ?? null,
  );
  const [visited, setVisited] = useState<Set<string>>(() => new Set());
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [branch, setBranch] = useState<BranchOption | null>(null);

  const selectedStop =
    journeyStops.find((stop) => stop.id === selectedId) ?? null;

  const applyDrawProgress = useCallback((progress: number) => {
    const path = drawPathRef.current;
    const length = pathLengthRef.current;
    if (!path || length <= 0) return;
    const p = Math.min(1, Math.max(0, progress));
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length * (1 - p)}`;
  }, []);

  const measureGeometry = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const trackRect = track.getBoundingClientRect();
    const width = Math.max(track.clientWidth, 1);
    const height = Math.max(track.scrollHeight || track.clientHeight, 1);
    setSvgSize({ w: width, h: height });

    const stopEls = Array.from(
      track.querySelectorAll<HTMLElement>("[data-stop-id]"),
    );
    const byId = new Map(stopEls.map((el) => [el.dataset.stopId, el]));
    const points: Point[] = [];

    for (const stop of journeyStops) {
      const el = byId.get(stop.id);
      if (!el) continue;
      const node = el.querySelector<HTMLElement>(".trip-stop-node");
      const target = node ?? el;
      const rect = target.getBoundingClientRect();
      points.push({
        x: rect.left + rect.width / 2 - trackRect.left + track.scrollLeft,
        y: rect.top + rect.height / 2 - trackRect.top + track.scrollTop,
      });
    }

    setPathD(buildPath(points));
  }, []);

  const syncScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const viewport = window.innerHeight || 1;
    const trackRect = track.getBoundingClientRect();
    const activateY = viewport * 0.42;

    let progress = 0;
    if (reducedRef.current) {
      progress = 1;
    } else {
      const distance = Math.max(trackRect.height, 1);
      progress = Math.min(
        1,
        Math.max(0, (activateY - trackRect.top) / distance),
      );
    }
    applyDrawProgress(progress);

    const stopEls = Array.from(
      track.querySelectorAll<HTMLElement>("[data-stop-id]"),
    );
    if (stopEls.length === 0) return;

    let bestId: string | null = null;
    let bestDist = Number.POSITIVE_INFINITY;
    const newlyVisited: string[] = [];

    for (const el of stopEls) {
      const id = el.dataset.stopId;
      if (!id) continue;
      const node = el.querySelector<HTMLElement>(".trip-stop-node");
      const rect = (node ?? el).getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const dist = Math.abs(center - activateY);

      if (center < viewport * 0.78) newlyVisited.push(id);
      if (dist < bestDist) {
        bestDist = dist;
        bestId = id;
      }
    }

    if (bestId) setActiveId((prev) => (prev === bestId ? prev : bestId));

    if (newlyVisited.length > 0) {
      setVisited((prev) => {
        let changed = false;
        const next = new Set(prev);
        for (const id of newlyVisited) {
          if (!next.has(id)) {
            next.add(id);
            changed = true;
          }
        }
        return changed ? next : prev;
      });
    }
  }, [applyDrawProgress]);

  useEffect(() => {
    const path = drawPathRef.current;
    if (!path || !pathD) return;
    const length = path.getTotalLength();
    pathLengthRef.current = length;
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = reducedRef.current ? "0" : `${length}`;
    syncScrollState();
  }, [pathD, svgSize.w, svgSize.h, syncScrollState]);

  useEffect(() => {
    reducedRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const track = trackRef.current;
    if (!track) return;

    const run = () => {
      measureGeometry();
      requestAnimationFrame(() => syncScrollState());
    };

    run();
    const t = window.setTimeout(run, 150);

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => syncScrollState());
    };
    const onResize = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(run);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    const resizeObserver = new ResizeObserver(() => onResize());
    resizeObserver.observe(track);

    if (reducedRef.current) {
      setVisited(new Set(journeyStops.map((s) => s.id)));
      setActiveId(journeyStops[journeyStops.length - 1]?.id ?? null);
    }

    return () => {
      window.clearTimeout(t);
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      resizeObserver.disconnect();
    };
  }, [measureGeometry, syncScrollState, branch]);

  useEffect(() => {
    if (!selectedId) return;
    const onKey = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") setSelectedId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedId]);

  const beforeBranch: JourneyStop[] = [];
  const afterBranch: JourneyStop[] = [];
  let passedBranch = false;
  for (const stop of journeyStops) {
    if (!passedBranch) beforeBranch.push(stop);
    else afterBranch.push(stop);
    if (stop.id === branchAfterStopId) passedBranch = true;
  }

  const toggleStop = (id: string) => {
    setSelectedId((current) => (current === id ? null : id));
  };

  return (
    <div className="trip-route">
      <div className="trip-route-layout">
        <div className="trip-route-track" ref={trackRef}>
          <svg
            className="trip-route-svg"
            width={svgSize.w || undefined}
            height={svgSize.h || undefined}
            viewBox={
              svgSize.w && svgSize.h
                ? `0 0 ${svgSize.w} ${svgSize.h}`
                : undefined
            }
            aria-hidden="true"
          >
            <path
              className="trip-route-path trip-route-path--base"
              d={pathD}
              fill="none"
            />
            <path
              ref={drawPathRef}
              className="trip-route-path trip-route-path--draw"
              d={pathD}
              fill="none"
            />
          </svg>

          <div className="trip-route-stops">
            {beforeBranch.map((stop) => (
              <StopCard
                key={stop.id}
                stop={stop}
                active={activeId === stop.id}
                visited={visited.has(stop.id)}
                selected={selectedId === stop.id}
                onSelect={toggleStop}
              />
            ))}
            <AfternoonBranch selected={branch} onSelect={setBranch} />
            {afterBranch.map((stop) => (
              <StopCard
                key={stop.id}
                stop={stop}
                active={activeId === stop.id}
                visited={visited.has(stop.id)}
                selected={selectedId === stop.id}
                onSelect={toggleStop}
              />
            ))}
          </div>
        </div>

        <aside
          className={[
            "trip-route-aside",
            selectedStop ? "has-selection" : "",
          ]
            .filter(Boolean)
            .join(" ")}
          aria-live="polite"
        >
          <DetailPanel
            stop={selectedStop}
            onClose={() => setSelectedId(null)}
          />
        </aside>
      </div>
    </div>
  );
}
