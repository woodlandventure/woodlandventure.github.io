import { beehiveShelterVenture } from '../../assets/img/projects';
import * as SheltersImages from '../../assets/img/projects/Shelters';
import { ProjectPage, ScrollSection } from './ProjectPage';

const scrollSections: ScrollSection[] = [
  {
    image: beehiveShelterVenture,
    imageAspect: 0.75,
  },
  {
    image: SheltersImages.IMG20220408154047,
    imageAspect: 0.75,
  },
  {
    image: SheltersImages.IMG20220225160805,
    imageAspect: 0.75,
  },
  {
    image: SheltersImages.IMG20220304160231,
    imageAspect: 0.75,
  },
  {
    image: SheltersImages.IMG20220311163359,
    imageAspect: 1.333,
  },
  {
    image: SheltersImages.IMG20220408102516,
    imageAspect: 0.75,
  },
  {
    image: SheltersImages.IMG20220408102555,
    imageAspect: 1.333,
  },
];

const FinalDescriptionPage = () => {
  return (
    <>
      <p>
        Our custom-built shelters provide protection from the elements while enhancing your outdoor
        space. Each shelter is designed to blend with its environment and constructed with
        sustainable materials to create a durable, long-lasting structure for relaxation or
        activities in all weather conditions.
      </p>
      <br />
      <p>
        <strong>Starting price: £3000</strong>
      </p>
    </>
  );
};

export const Shelters = () => (
  <ProjectPage
    name="Outdoor Shelters"
    scrollSections={scrollSections}
    finalDescription={<FinalDescriptionPage />}
  />
);
