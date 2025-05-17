import * as SheltersImages from '../../assets/img/projects/Shelters';
import { ProjectPage, ScrollSection } from './ProjectPage';

const scrollSections: ScrollSection[] = [
  {
    image: SheltersImages.IMG20220225160805,
    xPosition: 0.1,
    yPosition: 0.1,
    rotation: 'LittleCounterClockwise',
    direction: 'top',
    imageAspect: 1,
  },
  {
    image: SheltersImages.IMG20220304160231,
    xPosition: 0.8,
    yPosition: 0.8,
    rotation: 'LittleClockwise',
    direction: 'bottom',
    imageAspect: 1,
  },
  {
    image: SheltersImages.IMG20220311163359,
    xPosition: 0.8,
    yPosition: 0.2,
    rotation: 'LittleClockwise',
    direction: 'left',
    imageAspect: 1,
  },
  {
    image: SheltersImages.IMG20220408102516,
    xPosition: 0.2,
    yPosition: 0.9,
    rotation: 'LittleCounterClockwise',
    direction: 'right',
    imageAspect: 1,
  },
  {
    image: SheltersImages.IMG20220408102555,
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
    baseImage={SheltersImages.IMG20220408154047}
    scrollSections={scrollSections}
    finalDescription={<FinalDescriptionPage />}
  />
);
