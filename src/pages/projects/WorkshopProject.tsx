import * as WorkshopImages from '../../assets/img/projects/Workshop';
import { ProjectPage, ScrollSection } from './ProjectPage';

const scrollSections: ScrollSection[] = [
  {
    image: WorkshopImages.threeDCutAwayLocationSm,
    imageAspect: 0.546,
  },
  {
    image: WorkshopImages.shedLayout,
    imageAspect: 0.925,
  },
  //   {
  //     image: WorkshopImages.threeDCutAwaySm,
  //   },
  {
    image: WorkshopImages.threeDFullLocationSm,
    imageAspect: 0.649,
  },
  {
    image: WorkshopImages.RealBaseSm,
    imageAspect: 0.819,
  },
  {
    image: WorkshopImages.RealWallsSm,
    imageAspect: 0.918,
  },
  //   {
  //     image: WorkshopImages.RealRoofStructureSm,
  //   },
  {
    image: WorkshopImages.RealFullSideSm,
    imageAspect: 0.75,
  },
];

const FinalDescriptionPage = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quisquam, quos.
      </p>
      <br />
      <p>
        <strong>Starting price: £2000</strong>
      </p>
    </>
  );
};

export const Workshop = () => (
  <ProjectPage
    name="Workshop"
    scrollSections={scrollSections}
    finalDescription={<FinalDescriptionPage />}
  />
);
