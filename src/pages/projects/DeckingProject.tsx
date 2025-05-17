import * as DeckingImages from '../../assets/img/projects/Decking';
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
        <strong>Starting price: £2500</strong>
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
