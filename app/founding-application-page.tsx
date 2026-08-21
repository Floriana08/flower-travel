import { FoundingApplicationForm } from "./founding-application-form";
import { PageIntro } from "./studio-components";

export function FoundingApplicationPage() {
  return (
    <main className="apply-page">
      <section className="section-shell page-top">
        <PageIntro eyebrow="Founding Membership" title="Become a Founding Member">
          <p>
            Founding Membership is currently complimentary and limited. Tell us
            a little about how you travel — we&rsquo;ll take it from there.
          </p>
        </PageIntro>
      </section>

      <section className="section-shell apply-form-section" id="form">
        <div className="plan-trip-form-panel">
          <FoundingApplicationForm />
        </div>
      </section>
    </main>
  );
}
