import * as CosyBenchImages from '../../assets/img/projects/CosyBench';
import { ProjectPage, ScrollSection } from './ProjectPage';

const scrollSections: ScrollSection[] = [
  {
    image: CosyBenchImages.IMG20230815154022,
    imageAspect: 0.75,
  },
  {
    image: CosyBenchImages.IMG20230531094512,
    imageAspect: 0.75,
  },
  {
    image: CosyBenchImages.IMG20230601170709,
    imageAspect: 0.75,
  },
  {
    image: CosyBenchImages.IMG20230815153930,
    imageAspect: 0.75,
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
    scrollSections={scrollSections}
    finalDescription={<FinalDescriptionPage />}
  />
);
