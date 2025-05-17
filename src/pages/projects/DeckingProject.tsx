import * as DeckingImages from '../../assets/img/projects/Decking';
import { ProjectPage, ScrollSection } from './ProjectPage';

const scrollSections: ScrollSection[] = [
  {
    image: DeckingImages.IMG20230728085543,
    xPosition: 0.1,
    yPosition: 0.1,
    rotation: 'LittleCounterClockwise',
    direction: 'top',
    imageAspect: 1,
  },
  {
    image: DeckingImages.IMG20230728115658,
    xPosition: 0.8,
    yPosition: 0.8,
    rotation: 'LittleClockwise',
    direction: 'bottom',
    imageAspect: 1,
  },
  {
    image: DeckingImages.IMG20230803102944,
    xPosition: 0.8,
    yPosition: 0.2,
    rotation: 'LittleClockwise',
    direction: 'left',
    imageAspect: 1,
  },
  {
    image: DeckingImages.IMG20230809135811,
    xPosition: 0.2,
    yPosition: 0.9,
    rotation: 'LittleCounterClockwise',
    direction: 'right',
    imageAspect: 1,
  },
  {
    image: DeckingImages.IMG20230809135936,
    xPosition: 0.5,
    yPosition: 0.5,
    direction: 'bottom',
    imageAspect: 1,
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
    baseImage={DeckingImages.IMG20230809135936}
    scrollSections={scrollSections}
    finalDescription={<FinalDescriptionPage />}
  />
);
