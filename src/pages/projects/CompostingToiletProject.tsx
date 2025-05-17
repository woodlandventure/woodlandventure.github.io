import * as CompostingToiletImages from '../../assets/img/projects/CompostingToilet';
import { ProjectPage, ScrollSection } from './ProjectPage';

const scrollSections: ScrollSection[] = [
  {
    image: CompostingToiletImages.IMG20230911135544,
    xPosition: 0.1,
    yPosition: 0.1,
    rotation: 'LittleCounterClockwise',
    direction: 'top',
    imageAspect: 1,
  },
  {
    image: CompostingToiletImages.IMG20230912122344,
    xPosition: 0.8,
    yPosition: 0.8,
    rotation: 'LittleClockwise',
    direction: 'bottom',
    imageAspect: 1,
  },
  {
    image: CompostingToiletImages.IMG20231010122812,
    xPosition: 0.8,
    yPosition: 0.2,
    rotation: 'LittleClockwise',
    direction: 'left',
    imageAspect: 1,
  },
  {
    image: CompostingToiletImages.IMG20231010122834,
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
        Our composting toilet designs provide an eco-friendly and sustainable solution for outdoor
        spaces. Built with high-quality materials for durability and designed to blend naturally
        with your environment.
      </p>
      <br />
      <p>
        <strong>Starting price: £1500</strong>
      </p>
    </>
  );
};

export const CompostingToilet = () => (
  <ProjectPage
    name="Composting Toilet"
    baseImage={CompostingToiletImages.IMG20230911135544}
    scrollSections={scrollSections}
    finalDescription={<FinalDescriptionPage />}
  />
);
