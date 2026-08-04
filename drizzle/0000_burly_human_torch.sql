CREATE TABLE `enquiries` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`destinations` text NOT NULL,
	`dates` text DEFAULT '' NOT NULL,
	`travellers` text DEFAULT '' NOT NULL,
	`trip_length` text DEFAULT '' NOT NULL,
	`budget` text DEFAULT '' NOT NULL,
	`trip_type` text DEFAULT '' NOT NULL,
	`priorities` text DEFAULT '' NOT NULL,
	`notes` text DEFAULT '' NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE `newsletter_signups` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`email` text NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `newsletter_signups_email_unique` ON `newsletter_signups` (`email`);