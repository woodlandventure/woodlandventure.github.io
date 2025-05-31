import { sandpitCover } from '../../assets/img/projects';
import { Email } from './email';
import { ProjectPage, ScrollSection } from './ProjectPage';

const scrollSections: ScrollSection[] = [
  {
    image: sandpitCover,
    imageAspect: 231 / 400,
  },
];

const FinalDescriptionPage = () => {
  return (
    <>
      <p>
        A children's sandpit offers a range of developmental and recreational benefits that support
        early learning and healthy growth. It encourages imaginative play, allowing children to
        create, build, and explore different textures and shapes, which helps develop fine motor
        skills and hand-eye coordination. Sandplay also promotes social interaction, as children
        often work together, share tools, and engage in cooperative games, enhancing their
        communication and teamwork abilities. Additionally, the open-ended nature of sand encourages
        problem-solving and creative thinking, providing opportunities for both structured and
        unstructured play. The sensory experience of touching and moving sand can be calming and
        therapeutic, supporting emotional regulation and concentration. Overall, a well-maintained
        sandpit provides a safe, engaging environment for physical, cognitive, and social
        development. We can provide sandpits that fit the space, shape and budget you have
        available. We also make bespoke lids that help to manage water and other unwanted things
        getting in
      </p>
      <br />
      <p>
        <strong>
          Reach out for a quote.
          <Email />
        </strong>
      </p>
    </>
  );
};

export const SandpitCover = () => (
  <ProjectPage
    name="Sandpit Cover"
    scrollSections={scrollSections}
    finalDescription={<FinalDescriptionPage />}
  />
);
