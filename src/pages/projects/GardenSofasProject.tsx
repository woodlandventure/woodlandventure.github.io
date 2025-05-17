import * as GardenSofasImages from '../../assets/img/projects/GardenSofas';
import { ProjectPage, ScrollSection } from './ProjectPage';

const scrollSections: ScrollSection[] = [
  {
    image: GardenSofasImages.IMG20250502114306,
    xPosition: 0.1,
    yPosition: 0.1,
    rotation: 'LittleCounterClockwise',
    direction: 'top',
    imageAspect: 1,
  },
  {
    image: GardenSofasImages.IMG20250502140410,
    xPosition: 0.8,
    yPosition: 0.8,
    rotation: 'LittleClockwise',
    direction: 'bottom',
    imageAspect: 1,
  },
  {
    image: GardenSofasImages.IMG20250502161832,
    xPosition: 0.8,
    yPosition: 0.2,
    rotation: 'LittleClockwise',
    direction: 'left',
    imageAspect: 1,
  },
  {
    image: GardenSofasImages.IMG20250502161849,
    xPosition: 0.2,
    yPosition: 0.9,
    rotation: 'LittleCounterClockwise',
    direction: 'right',
    imageAspect: 1,
  },
  {
    image: GardenSofasImages.IMG_20250512_133705,
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
        Our garden sofas provide comfortable and stylish outdoor seating options for relaxation and
        entertainment. Each piece is handcrafted with sustainable materials to ensure durability
        against the elements while maintaining a beautiful aesthetic that enhances your outdoor
        space.
      </p>
      <br />
      <p>
        <strong>Starting price: £1200</strong>
      </p>
    </>
  );
};

export const GardenSofas = () => (
  <ProjectPage
    name="Garden Sofas"
    baseImage={GardenSofasImages.IMG20250502161849}
    scrollSections={scrollSections}
    finalDescription={<FinalDescriptionPage />}
  />
);
