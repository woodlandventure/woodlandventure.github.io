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
        Through careful planning and discussions with the client, this area has been transformed
        from an unused, unloved space to a sanctuary. This bespoke design has been tailored to the
        specific requirements of the client in order to provide many ways to relax and unwind. From
        quiet reflections, to therapy sessions and even opportunities for prayer, all in the shade
        of the olive tree. If you have a space that you feel is unloved, why not get in touch and
        let's see what ideas we can come up with and who knows where the journey will end?
      </p>
    </>
  );
};

export const SanctuaryProject = () => (
  <ProjectPage
    name="The Sanctuary"
    scrollSections={scrollSections}
    finalDescription={<FinalDescriptionPage />}
    additionalInfo={
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/s_ZwSEIkf3A?si=zMEWu4Bac1JftUEv"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    }
  />
);
