import * as WorkshopImages from '../../assets/img/projects/Workshop';
import { Email } from './email';
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
        This workshop has been designed and built to be sturdy and secure. With the addition of a
        concrete floor is makes an excellent space for storing tools or setting up machinery. This
        example is 3.5m(w)x3.5m(D)x2.5m(H)
      </p>
      <br />
      <p>
        <strong>
          Price: £8000
          <Email />
        </strong>
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
