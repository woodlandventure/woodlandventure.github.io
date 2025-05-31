import { kitchen } from '../../assets/img/projects';
import { Email } from './email';
import { ProjectPage, ScrollSection } from './ProjectPage';

const scrollSections: ScrollSection[] = [
  {
    image: kitchen,
    imageAspect: 9 / 16,
  },
];

const FinalDescriptionPage = () => {
  return (
    <>
      <p>
        A mud kitchen is a valuable addition to any outdoor play area, offering children a unique
        and enriching sensory experience that combines creativity, exploration, and learning. It
        encourages imaginative role play as children pretend to cook, mix, and serve using natural
        materials like mud, water, leaves, and stones. This type of play supports the development of
        fine motor skills, hand-eye coordination, and early concepts of measurement and mixing. A
        mud kitchen also fosters social interaction and cooperation, as children work together,
        share utensils, and take on different roles. Engaging with nature in this hands-on way
        nurtures curiosity, resilience, and a sense of environmental awareness. Fun, messy, and
        educational, a mud kitchen is an excellent tool for holistic childhood development.
      </p>
      <br />
      <p>
        <strong>
          Starting price: £600
          <Email />
        </strong>
      </p>
    </>
  );
};

export const Kitchen = () => (
  <ProjectPage
    name="Forest School Kitchen"
    scrollSections={scrollSections}
    finalDescription={<FinalDescriptionPage />}
  />
);
