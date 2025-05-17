import { sanctuaryAfterJPG } from '../../assets/img/projects';
import * as SanctuaryImages from '../../assets/img/projects/Sanctuary';
import { ProjectPage, ScrollSection } from './ProjectPage';

const scrollSections: ScrollSection[] = [
  {
    image: SanctuaryImages.IMG20210401103435,
    xPosition: 0.1,
    yPosition: 0.1,
    rotation: 'LittleCounterClockwise',
    direction: 'top',
    imageAspect: 0.75,
  },
  {
    image: SanctuaryImages.IMG20210401173611,
    xPosition: 0.8,
    yPosition: 0.6,
    rotation: 'LittleClockwise',
    direction: 'bottom',
    imageAspect: 0.75,
  },
  {
    image: SanctuaryImages.IMG20210401173616,
    xPosition: 0.8,
    yPosition: 0.2,
    rotation: 'LittleClockwise',
    direction: 'left',
    imageAspect: 0.75,
  },
  {
    image: SanctuaryImages.IMG20210401173635,
    xPosition: 0.2,
    yPosition: 0.6,
    rotation: 'LittleCounterClockwise',
    direction: 'right',
    imageAspect: 0.75,
  },
  {
    image: sanctuaryAfterJPG,
    xPosition: 0.5,
    yPosition: 0.5,
    direction: 'bottom',
    imageAspect: 0.75,
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
    baseImage={SanctuaryImages.IMG20210401173620}
    scrollSections={scrollSections}
    finalDescription={<FinalDescriptionPage />}
  />
);
