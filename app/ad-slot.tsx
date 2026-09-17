import type { ReactNode } from "react";

type AdFormat = "banner" | "rectangle" | "inline";

export function AdSlot({
  id,
  format = "banner",
  children,
}: {
  id: string;
  format?: AdFormat;
  children?: ReactNode;
}) {
  return (
    <aside className={`ad-slot ad-slot-${format}`} aria-label="Advertisement">
      <p className="ad-slot-kicker">Advertisement</p>
      <div className="ad-slot-frame" id={`ad-${id}`} data-ad-slot={id}>
        {children ?? (
          <p className="ad-slot-empty">A partner can sit here.</p>
        )}
      </div>
    </aside>
  );
}
