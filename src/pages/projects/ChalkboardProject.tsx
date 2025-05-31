import { chalkboard } from '../../assets/img/projects';
import { Email } from './email';
import { ProjectPage, ScrollSection } from './ProjectPage';

const scrollSections: ScrollSection[] = [
  {
    image: chalkboard,
    imageAspect: 121 / 160,
  },
];

const FinalDescriptionPage = () => {
  return (
    <>
      <p>
        Wooden palisade fencing is a great way to softly separate areas and give different zones
        with out affecting lines of sight. As the cost of fencing is very dependent on the height of
        the fence required and also the length, we would suggest dropping us an email to discuss
        your needs for a specific quote.
      </p>
      <br />
      <p>
        <strong>
          Reach out for a quote.
          <Email />
        </strong>
      </p>
    </>
  );
};

export const Chalkboard = () => (
  <ProjectPage
    name="Fencing and Chalkboard"
    scrollSections={scrollSections}
    finalDescription={<FinalDescriptionPage />}
  />
);
