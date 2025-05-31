import { parachute } from '../../assets/img/projects';
import { Email } from './email';
import { ProjectPage, ScrollSection } from './ProjectPage';

const scrollSections: ScrollSection[] = [
  {
    image: parachute,
    imageAspect: 113 / 200,
  },
];

const FinalDescriptionPage = () => {
  return (
    <>
      <p>
        Having one of these suspended over an area is a great way of providing shade form the sun
        but also some weather protection when needed. Cabling can be installed so that the parachute
        can be easily taken down during periods of very bad weather or when it is not needed for a
        time. NOTE: Parachutes have become very difficult to get hold of at the moment. Please make
        contact to discuss the current situation.
      </p>
      <br />
      <p>
        <strong>
          Starting price: £500
          <Email />
        </strong>
      </p>
    </>
  );
};

export const Parachute = () => (
  <ProjectPage
    name="Parachute"
    scrollSections={scrollSections}
    finalDescription={<FinalDescriptionPage />}
  />
);
