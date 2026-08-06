import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

/**
 * Trip enquiries submitted from /plan-a-trip. Previously the form only
 * opened a mailto: draft, so a submission was lost entirely if the visitor
 * had no configured desktop mail client. Persisting to D1 guarantees every
 * enquiry is captured even when the mailto fallback doesn't fire.
 */
export const enquiries = sqliteTable("enquiries", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull(),
  destinations: text("destinations").notNull(),
  dates: text("dates").notNull().default(""),
  flexibility: text("flexibility").notNull().default(""),
  travellers: text("travellers").notNull().default(""),
  tripLength: text("trip_length").notNull().default(""),
  budget: text("budget").notNull().default(""),
  pace: text("pace").notNull().default(""),
  /** Comma-joined checkbox values, e.g. "Food & wine, Architecture & design". */
  interests: text("interests").notNull().default(""),
  accommodation: text("accommodation").notNull().default(""),
  tripType: text("trip_type").notNull().default(""),
  helpWith: text("help_with").notNull().default(""),
  howHeard: text("how_heard").notNull().default(""),
  priorities: text("priorities").notNull().default(""),
  notes: text("notes").notNull().default(""),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});

/**
 * Newsletter signups from the site-wide newsletter form. `source` also
 * captures guide-waitlist interest (e.g. "guide:naples-amalfi-guide") from
 * the same form/table rather than standing up a second signup pipeline.
 */
export const newsletterSignups = sqliteTable("newsletter_signups", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  email: text("email").notNull().unique(),
  source: text("source").notNull().default("newsletter"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});
