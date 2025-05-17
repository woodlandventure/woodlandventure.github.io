import * as CompostingToiletImages from '../../assets/img/projects/CompostingToilet';
import { ProjectPage, ScrollSection } from './ProjectPage';

const scrollSections: ScrollSection[] = [
  {
    image: CompostingToiletImages.IMG20230911135544,
    imageAspect: 1.333,
  },
  {
    image: CompostingToiletImages.IMG20230912122344,
    imageAspect: 1.333,
  },
  {
    image: CompostingToiletImages.IMG20231010122812,
    imageAspect: 1.333,
  },
  {
    image: CompostingToiletImages.IMG20231010122834,
    imageAspect: 1.333,
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
    scrollSections={scrollSections}
    finalDescription={<FinalDescriptionPage />}
  />
);
