import Reveal from "../components/Reveal";
import PhotoBand from "../components/PhotoBand";

const STEPS = [
  {
    num: "01",
    title: "Scope call",
    text: "We talk through your site, objectives and constraints in a short, no-obligation call.",
  },
  {
    num: "02",
    title: "Method & quotation",
    text: "Within 48 hours you receive a clear scope of work, methodology and a fixed quotation.",
  },
  {
    num: "03",
    title: "Mobilisation",
    text: "Approve the plan and we schedule the crew, equipment, access and HSE setup to suit your timeline.",
  },
];

export default function NextSteps() {
  return (
    <section className='next-steps section-pad' id='next-steps'>
      <div className='wrap'>
        <Reveal>
          <div className='section-head'>
            <span className='kicker'>What happens next</span>
            <h2>From first call to first mobilisation in three steps</h2>
            <p>
              No fluff, no hidden fees — just a clear path from enquiry to crews
              on site.
            </p>
          </div>
        </Reveal>

        <div className='next-grid'>
          {STEPS.map((step, i) => (
            <Reveal key={step.num} delay={i * 100} className='next-card'>
              <span className='next-step-num'>{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </div>

        <div className='nextsteps-photo-duo mission-photo'>
          <PhotoBand
            src='/images/work/contact-site.jpg'
            alt='GeoLegacy survey crew at work on site'
            variant='boxed'
          />
          <PhotoBand
            src='/images/work/contact-crew.jpg'
            alt='GeoLegacy crew hard at work on a survey'
            variant='boxed'
          />
        </div>
      </div>
    </section>
  );
}
