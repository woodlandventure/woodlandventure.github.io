import { sink } from '../../assets/img/projects';
import { Email } from './email';
import { ProjectPage, ScrollSection } from './ProjectPage';

const scrollSections: ScrollSection[] = [
  {
    image: sink,
    imageAspect: 281 / 400,
  },
];

const FinalDescriptionPage = () => {
  return (
    <>
      <p>
        Outdoor mud kitchens are a great way for children to interact with both the outdoor
        environment and each other. Playing collaboratively to create ‘meals, potions and mess’ is a
        fun way to learn and be. With the addition of the water hand pump the children can control
        the flow of water into the sink. We have made these as single and doubles sink units as well
        as corner or bench setups.
      </p>
      <br />
      <p>
        <strong>
          Starting price: £400
          <Email />
        </strong>
      </p>
    </>
  );
};

export const Sink = () => (
  <ProjectPage
    name="Mud Kitchen - Sink"
    scrollSections={scrollSections}
    finalDescription={<FinalDescriptionPage />}
  />
);
