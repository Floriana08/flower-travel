import Link from "next/link";
import type { ReactNode } from "react";

const memberNav = [
  { href: "/members", label: "Home" },
  { href: "/members/guides", label: "Guides" },
  { href: "/members/maps", label: "Maps" },
  { href: "/members/trips", label: "My Trips" },
  { href: "/members/saved", label: "Saved" },
  { href: "/members/ask", label: "Ask Altrove" },
  { href: "/members/membership", label: "Membership" },
];

export default function MembersLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="members-shell">
      <header className="members-topbar">
        <div className="members-topbar-inner">
          <Link className="members-brand" href="/members">
            Altrove <span>Members</span>
          </Link>
          <nav className="members-nav" aria-label="Member navigation">
            {memberNav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="members-top-actions">
            <Link href="/members/membership">Profile</Link>
            <Link href="/sign-in">Sign Out</Link>
          </div>
        </div>
      </header>
      <div className="members-content">{children}</div>
    </div>
  );
}
