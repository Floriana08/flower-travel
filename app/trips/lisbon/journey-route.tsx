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

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function buildPath(points: Point[]) {
  if (points.length === 0) return "";
  if (points.length === 1) return `M ${points[0].x} ${points[0].y}`;

  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i += 1) {
    const prev = points[i - 1];
    const curr = points[i];
    const midY = (prev.y + curr.y) / 2;
    d += ` C ${prev.x} ${midY}, ${curr.x} ${midY}, ${curr.x} ${curr.y}`;
  }
  return d;
}

function StopCard({
  stop,
  active,
  visited,
  selected,
  onSelect,
  cardRef,
}: {
  stop: JourneyStop;
  active: boolean;
  visited: boolean;
  selected: boolean;
  onSelect: (id: string) => void;
  cardRef: (el: HTMLElement | null) => void;
}) {
  return (
    <article
      ref={cardRef}
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
  }, [stop?.id, stop]);

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") onClose();
  };

  if (!stop) {
    return (
      <div className="trip-detail trip-detail--empty" id="trip-stop-detail">
        <p>Select a stop along the route for a short Altrove note.</p>
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
      <div className="trip-branch-inner">
        <p className="trip-branch-eyebrow">A soft fork in the day</p>
        <h3 id="trip-branch-title">What kind of afternoon?</h3>
        <p className="trip-branch-lede">
          Altrove does not treat travel as a rigid itinerary. Choose a direction
          — the evening can still meet you where it should.
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
      </div>
    </section>
  );
}

export function LisbonJourneyRoute() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const stopRefs = useRef(new Map<string, HTMLElement>());
  const [refsVersion, setRefsVersion] = useState(0);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [visited, setVisited] = useState<Set<string>>(() => new Set());
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [branch, setBranch] = useState<BranchOption | null>(null);
  const [pathD, setPathD] = useState("");
  const [pathLength, setPathLength] = useState(0);
  const [progress, setProgress] = useState(0);
  const reduced = useRef(false);

  const setStopRef = useCallback((id: string, el: HTMLElement | null) => {
    const map = stopRefs.current;
    if (el) {
      if (map.get(id) !== el) {
        map.set(id, el);
        setRefsVersion((v) => v + 1);
      }
    } else if (map.has(id)) {
      map.delete(id);
      setRefsVersion((v) => v + 1);
    }
  }, []);

  const selectedStop =
    journeyStops.find((stop) => stop.id === selectedId) ?? null;

  const updateGeometry = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const trackRect = track.getBoundingClientRect();
    const points: Point[] = [];

    for (const stop of journeyStops) {
      const el = stopRefs.current.get(stop.id);
      if (!el) continue;
      const node = el.querySelector(".trip-stop-node") as HTMLElement | null;
      const target = node ?? el;
      const rect = target.getBoundingClientRect();
      points.push({
        x: rect.left + rect.width / 2 - trackRect.left,
        y: rect.top + rect.height / 2 - trackRect.top,
      });
    }

    if (points.length < 2) return;
    setPathD(buildPath(points));
  }, []);

  const updateProgress = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const rect = track.getBoundingClientRect();
    const viewport = window.innerHeight || 1;
    const start = viewport * 0.35;
    const end = viewport * 0.65;
    const usable = Math.max(rect.height - (end - start), 1);
    const raw = (start - rect.top) / usable;
    const next = Math.min(1, Math.max(0, raw));
    setProgress(reduced.current ? 1 : next);
  }, []);

  useEffect(() => {
    const path = pathRef.current;
    if (!path || !pathD) return;
    const length = path.getTotalLength();
    setPathLength(length);
  }, [pathD]);

  useEffect(() => {
    reduced.current = prefersReducedMotion();
    updateGeometry();
    updateProgress();

    const track = trackRef.current;
    if (!track) return;

    const resizeObserver = new ResizeObserver(() => {
      updateGeometry();
      updateProgress();
    });
    resizeObserver.observe(track);

    const onScroll = () => updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateGeometry);

    const nodeObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (
            entry.isIntersecting &&
            entry.target instanceof HTMLElement &&
            entry.target.dataset.stopId
          ) {
            const id = entry.target.dataset.stopId;
            setVisited((prev) => {
              if (prev.has(id)) return prev;
              const next = new Set(prev);
              next.add(id);
              return next;
            });
          }
        }

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top - window.innerHeight * 0.4) -
              Math.abs(b.boundingClientRect.top - window.innerHeight * 0.4),
          );

        if (visible[0]?.target instanceof HTMLElement) {
          const id = visible[0].target.dataset.stopId;
          if (id) setActiveId(id);
        }
      },
      {
        root: null,
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    for (const stop of journeyStops) {
      const el = stopRefs.current.get(stop.id);
      if (el) nodeObserver.observe(el);
    }

    if (reduced.current) {
      setProgress(1);
      setVisited(new Set(journeyStops.map((stop) => stop.id)));
    }

    return () => {
      resizeObserver.disconnect();
      nodeObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateGeometry);
    };
  }, [updateGeometry, updateProgress, refsVersion]);

  useEffect(() => {
    if (!selectedId) return;
    const onKey = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") setSelectedId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedId]);

  const dashOffset =
    pathLength > 0 ? pathLength * (1 - progress) : undefined;

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
          <svg className="trip-route-svg" aria-hidden="true">
            <path
              className="trip-route-path trip-route-path--base"
              d={pathD}
              fill="none"
            />
            <path
              ref={pathRef}
              className="trip-route-path trip-route-path--draw"
              d={pathD}
              fill="none"
              style={{
                strokeDasharray: pathLength || undefined,
                strokeDashoffset: dashOffset,
              }}
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
                cardRef={(el) => setStopRef(stop.id, el)}
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
                cardRef={(el) => setStopRef(stop.id, el)}
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
