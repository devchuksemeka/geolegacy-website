import Footer from "./Footer";

type LegalSection = {
  heading: string;
  body: string[];
};

export default function LegalShell({
  title,
  intro,
  updated,
  sections,
}: {
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <main id="main">
        <section className="legal-hero">
          <div className="grid-field grid-field--light" style={{ height: "100%" }} />
          <div className="wrap">
            <h1>{title}</h1>
            <p>{intro}</p>
            <p className="legal-updated">Last updated: {updated}</p>
          </div>
        </section>

        <section className="legal-body section-pad">
          <div className="wrap legal-layout">
            {sections.map((section) => (
              <article key={section.heading}>
                <h2>{section.heading}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}