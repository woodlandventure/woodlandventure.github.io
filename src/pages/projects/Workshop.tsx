import * as WorkshopImages from '../../assets/img/projects/Workshop';
import { ProjectPage, ScrollSection } from './ProjectPage';

const scrollSections: ScrollSection[] = [
  //   {
  //     image: WorkshopImages.threeDCutAwaySm,
  //     position: {
  //       top: 100,
  //       right: 100,
  //     },
  //     rotation: 'LittleClockwise',
  //   },
  {
    image: WorkshopImages.threeDFullLocationSm,
    xPosition: 0.1,
    yPosition: 0.1,
    rotation: 'LittleCounterClockwise',
    direction: 'top',
    imageAspect: 252 / 382,
  },
  {
    image: WorkshopImages.threeDCutAwayLocationSm,
    xPosition: 0.8,
    yPosition: 0.8,
    rotation: 'LittleClockwise',
    direction: 'bottom',
    imageAspect: 214 / 382,
  },
  {
    image: WorkshopImages.RealBaseSm,
    xPosition: 0.8,
    yPosition: 0.2,
    rotation: 'LittleClockwise',
    direction: 'left',
    imageAspect: 314 / 382,
  },
  {
    image: WorkshopImages.RealWallsSm,
    xPosition: 0.2,
    yPosition: 0.9,
    rotation: 'LittleCounterClockwise',
    direction: 'right',
    imageAspect: 351 / 382,
  },
  //   {
  //     image: WorkshopImages.RealRoofStructureSm,
  //     position: {
  //       top: 100,
  //       left: 150,
  //     },
  //   },
  {
    image: WorkshopImages.RealFullSideSm,
    xPosition: 0.5,
    yPosition: 0.5,
    direction: 'bottom',
    imageAspect: 290 / 382,
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
    baseImage={WorkshopImages.shedLayout}
    scrollSections={scrollSections}
    finalDescription={<FinalDescriptionPage />}
  />
);
