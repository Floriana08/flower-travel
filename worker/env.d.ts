// `wrangler.jsonc` intentionally omits the `d1_databases` block (see the
// comment there) — the D1 `DB` binding is injected at deploy time by the
// hosting platform and, for local dev, by vite.config.ts. Declare it here
// so it survives `wrangler types` regenerating worker-configuration.d.ts.
declare namespace Cloudflare {
  interface Env {
    DB: D1Database;
  }
}
