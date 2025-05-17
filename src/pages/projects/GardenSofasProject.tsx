import * as GardenSofasImages from '../../assets/img/projects/GardenSofas';
import { ProjectPage, ScrollSection } from './ProjectPage';

const scrollSections: ScrollSection[] = [
  {
    image: GardenSofasImages.IMG_20250512_133705,
    imageAspect: 0.75,
  },
  {
    image: GardenSofasImages.IMG20250502114306,
    imageAspect: 0.75,
  },
  {
    image: GardenSofasImages.IMG20250502140410,
    imageAspect: 1.333,
  },
  {
    image: GardenSofasImages.IMG20250502161832,
    imageAspect: 0.75,
  },
  {
    image: GardenSofasImages.IMG20250502161849,
    imageAspect: 1.333,
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
    scrollSections={scrollSections}
    finalDescription={<FinalDescriptionPage />}
  />
);
