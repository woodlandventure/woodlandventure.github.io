import { fireCircle } from '../../assets/img/projects';
import { Email } from './email';
import { ProjectPage, ScrollSection } from './ProjectPage';

const scrollSections: ScrollSection[] = [
  {
    image: fireCircle,
    imageAspect: 57 / 160,
  },
];

const FinalDescriptionPage = () => {
  return (
    <>
      <p>
        Having fixed benches set as a fire circle gives a great space not only to watch a campfire
        or toast marshmallows but also to share a story or simple take learning to a different area.
        These fire circles have been laid out with current camp fire safety distances in mind. We
        have also installed brick plinths in the centre of these circles to limit the ground damage
        from having a fire. These are great with a parachute overhead to be able to make full use
        all year round.
      </p>
      <br />
      <p>
        <strong>
          Starting price: 800
          <Email />
        </strong>
      </p>
    </>
  );
};

export const FireCircle = () => (
  <ProjectPage
    name="Fire Circle"
    scrollSections={scrollSections}
    finalDescription={<FinalDescriptionPage />}
  />
);
