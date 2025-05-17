import * as CosyBenchImages from '../../assets/img/projects/CosyBench';
import { ProjectPage, ScrollSection } from './ProjectPage';

const scrollSections: ScrollSection[] = [
  {
    image: CosyBenchImages.IMG20230531094512,
    xPosition: 0.1,
    yPosition: 0.1,
    rotation: 'LittleCounterClockwise',
    direction: 'top',
    imageAspect: 1,
  },
  {
    image: CosyBenchImages.IMG20230601170709,
    xPosition: 0.8,
    yPosition: 0.8,
    rotation: 'LittleClockwise',
    direction: 'bottom',
    imageAspect: 1,
  },
  {
    image: CosyBenchImages.IMG20230815153930,
    xPosition: 0.8,
    yPosition: 0.2,
    rotation: 'LittleClockwise',
    direction: 'left',
    imageAspect: 1,
  },
  {
    image: CosyBenchImages.IMG20230815154022,
    xPosition: 0.2,
    yPosition: 0.9,
    rotation: 'LittleCounterClockwise',
    direction: 'right',
    imageAspect: 1,
  },
];

const FinalDescriptionPage = () => {
  return (
    <>
      <p>
        Our cosy bench designs add comfort and style to any garden space. Each bench is handcrafted
        with quality materials and built to withstand the elements while providing a comfortable
        seating area to enjoy your outdoor environment.
      </p>
      <br />
      <p>
        <strong>Starting price: £800</strong>
      </p>
    </>
  );
};

export const CosyBench = () => (
  <ProjectPage
    name="Cosy Bench"
    baseImage={CosyBenchImages.IMG20230815154022}
    scrollSections={scrollSections}
    finalDescription={<FinalDescriptionPage />}
  />
);
