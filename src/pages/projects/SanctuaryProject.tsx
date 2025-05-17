import { sanctuaryAfterJPG } from '../../assets/img/projects';
import * as SanctuaryImages from '../../assets/img/projects/Sanctuary';
import { ProjectPage, ScrollSection } from './ProjectPage';

const scrollSections: ScrollSection[] = [
  {
    image: sanctuaryAfterJPG,
    imageAspect: 0.776,
  },
  {
    image: SanctuaryImages.IMG20210401173620,
    imageAspect: 0.75,
  },
  {
    image: SanctuaryImages.IMG20210401103435,
    imageAspect: 0.75,
  },
  {
    image: SanctuaryImages.IMG20210401173611,
    imageAspect: 1.333,
  },
  {
    image: SanctuaryImages.IMG20210401173616,
    imageAspect: 0.75,
  },
  {
    image: SanctuaryImages.IMG20210401173635,
    imageAspect: 1.333,
  },
];

const FinalDescriptionPage = () => {
  return (
    <>
      <p>
        The Sanctuary is our premium relaxation space designed to provide a peaceful retreat in your
        garden. Crafted with sustainable materials and built to blend seamlessly with the natural
        environment, this structure offers a perfect place for meditation, reading, or simply
        enjoying the outdoors in comfort.
      </p>
      <br />
      <p>
        <strong>Starting price: £3500</strong>
      </p>
    </>
  );
};

export const SanctuaryProject = () => (
  <ProjectPage
    name="The Sanctuary"
    scrollSections={scrollSections}
    finalDescription={<FinalDescriptionPage />}
  />
);
