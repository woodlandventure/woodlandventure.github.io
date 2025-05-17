import * as GardenIdeasImages from '../../assets/img/projects/GardenIdeas';
import { ProjectPage, ScrollSection } from './ProjectPage';

const scrollSections: ScrollSection[] = [
  {
    image: GardenIdeasImages.IMG20220930121644,
    xPosition: 0.1,
    yPosition: 0.1,
    rotation: 'LittleCounterClockwise',
    direction: 'top',
    imageAspect: 1,
  },
  {
    image: GardenIdeasImages.IMG20221015181939,
    xPosition: 0.8,
    yPosition: 0.8,
    rotation: 'LittleClockwise',
    direction: 'bottom',
    imageAspect: 1,
  },
  {
    image: GardenIdeasImages.IMG20230810145841,
    xPosition: 0.8,
    yPosition: 0.2,
    rotation: 'LittleClockwise',
    direction: 'left',
    imageAspect: 1,
  },
  {
    image: GardenIdeasImages.IMG20230811135321,
    xPosition: 0.2,
    yPosition: 0.9,
    rotation: 'LittleCounterClockwise',
    direction: 'right',
    imageAspect: 1,
  },
  {
    image: GardenIdeasImages.IMG20230813170801,
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
        Explore our innovative garden ideas that help create unique outdoor spaces tailored to your
        needs and style. From small creative touches to full garden transformations, we can help
        design and implement a variety of garden features to enhance your outdoor living experience.
      </p>
      <br />
      <p>
        <strong>Consultation starting at: £300</strong>
      </p>
    </>
  );
};

export const GardenIdeas = () => (
  <ProjectPage
    name="Garden Ideas"
    baseImage={GardenIdeasImages.IMG20230813170801}
    scrollSections={scrollSections}
    finalDescription={<FinalDescriptionPage />}
  />
);
