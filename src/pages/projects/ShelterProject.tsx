import * as ProjectImages from '../../assets/img/projects';
import { ProjectPage, ScrollSection } from './ProjectPage';

const scrollSections: ScrollSection[] = [];

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

export const ShelterProject = () => (
  <ProjectPage
    name="Shelter"
    baseImage={ProjectImages.playgroundAfter}
    scrollSections={scrollSections}
    finalDescription={<FinalDescriptionPage />}
  />
);
