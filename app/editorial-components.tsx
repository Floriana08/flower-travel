import Link from "next/link";
import type { ReactNode } from "react";

export function TrustBadge({ children }: { children: ReactNode }) {
  return <span className="trust-badge">{children}</span>;
}

export function TrustBadgeRow({ items }: { items: string[] }) {
  if (!items.length) return null;
  return (
    <div className="trust-badge-row" aria-label="Trust signals">
      {items.map((item) => (
        <TrustBadge key={item}>{item}</TrustBadge>
      ))}
    </div>
  );
}

export function FlorNote({
  title = "Our note",
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <aside className="flor-note" aria-label={title}>
      <p className="eyebrow">{title}</p>
      <div className="flor-note-body">{children}</div>
    </aside>
  );
}

export function PullQuote({ children, cite }: { children: ReactNode; cite?: string }) {
  return (
    <blockquote className="pull-quote">
      <p>{children}</p>
      {cite ? <cite>{cite}</cite> : null}
    </blockquote>
  );
}

export function PracticalBox({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <aside className="practical-box">
      <p className="eyebrow">Worth knowing</p>
      <h3>{title}</h3>
      <div>{children}</div>
    </aside>
  );
}

export function WorthKnowing({ children }: { children: ReactNode }) {
  return (
    <aside className="worth-knowing">
      <p className="eyebrow">Worth knowing</p>
      <div>{children}</div>
    </aside>
  );
}

export function WhatIdDoDifferently({ children }: { children: ReactNode }) {
  return (
    <aside className="do-differently">
      <p className="eyebrow">What we would do differently</p>
      <div>{children}</div>
    </aside>
  );
}

export function ComingSoonBlock({
  title,
  body,
  href = "/apply",
  cta = "Apply for the Private Beta",
}: {
  title: string;
  body: string;
  href?: string;
  cta?: string;
}) {
  return (
    <article className="coming-soon-block">
      <p className="eyebrow">Opening Next</p>
      <h3>{title}</h3>
      <p>{body}</p>
      <Link className="text-link" href={href}>
        {cta}
      </Link>
    </article>
  );
}

export function ArticleMeta({
  items,
}: {
  items: { label: string; value: string }[];
}) {
  return (
    <dl className="article-meta-grid">
      {items.map((item) => (
        <div key={item.label}>
          <dt>{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
