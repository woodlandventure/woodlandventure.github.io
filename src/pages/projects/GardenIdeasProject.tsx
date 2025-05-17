import * as GardenIdeasImages from '../../assets/img/projects/GardenIdeas';
import { ProjectPage, ScrollSection } from './ProjectPage';

const scrollSections: ScrollSection[] = [
  {
    image: GardenIdeasImages.IMG20230813170801,
    imageAspect: 0.75,
  },
  {
    image: GardenIdeasImages.IMG20220930121644,
    imageAspect: 0.75,
  },
  {
    image: GardenIdeasImages.IMG20221015181939,
    imageAspect: 0.75,
  },
  {
    image: GardenIdeasImages.IMG20230810145841,
    imageAspect: 0.75,
  },
  {
    image: GardenIdeasImages.IMG20230811135321,
    imageAspect: 0.75,
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
    scrollSections={scrollSections}
    finalDescription={<FinalDescriptionPage />}
  />
);
