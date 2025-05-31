import * as DeckingImages from '../../assets/img/projects/Decking';
import { Email } from './email';
import { ProjectPage, ScrollSection } from './ProjectPage';

const scrollSections: ScrollSection[] = [
  {
    image: DeckingImages.IMG20230809135936,
    imageAspect: 1.333,
  },
  {
    image: DeckingImages.IMG20230728085543,
    imageAspect: 0.75,
  },
  {
    image: DeckingImages.IMG20230728115658,
    imageAspect: 0.75,
  },
  {
    image: DeckingImages.IMG20230803102944,
    imageAspect: 1.333,
  },
  {
    image: DeckingImages.IMG20230809135811,
    imageAspect: 1.333,
  },
];

const FinalDescriptionPage = () => {
  return (
    <>
      <p>
        Our custom decking solutions transform outdoor spaces into beautiful, functional areas for
        relaxation and entertainment. Each deck is designed to complement your garden and built with
        sustainable materials for longevity and minimal environmental impact.
      </p>
      <br />
      <p>
        As the cost of decking is very dependent on the area of decking required and its location,
        we would suggest dropping us an email to discuss your needs for a specific quote
      </p>
      <br />
      <p>
        <strong>
          Email for a quote: <Email />
        </strong>
      </p>
    </>
  );
};

export const Decking = () => (
  <ProjectPage
    name="Decking"
    scrollSections={scrollSections}
    finalDescription={<FinalDescriptionPage />}
  />
);
