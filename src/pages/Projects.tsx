import { css } from '../../styled-system/css';
import { ProjectCard } from '../components/ProjectCard';

import {
  parachute,
  workTop,
  fireCircle,
  chalkboard,
  sink,
  sanctuary,
  kitchen,
  sandpitCover,
  beehiveShelterVenture,
} from '../assets/img/projects';

const projectCards = [
  {
    image: beehiveShelterVenture,
    alt: 'Outdoor Shelter',
    title: 'Outdoor Shelter',
  },
  {
    image: sanctuary,
    alt: 'The Sanctuary',
    title: 'The Sanctuary',
  },
  {
    image: parachute,
    alt: 'Parachute',
    title: 'Parachute',
  },
  {
    image: workTop,
    alt: 'Mud Kitchen - Work Top',
    title: 'Mud Kitchen - Work Top',
  },
  {
    image: fireCircle,
    alt: 'Fire Circle',
    title: 'Fire Circle',
  },
  {
    image: chalkboard,
    alt: 'Fencing and Chalkboard',
    title: 'Fencing and Chalkboard',
  },
  {
    image: sink,
    alt: 'Mud Kitchen - Sink',
    title: 'Mud Kitchen - Sink',
  },
  {
    image: kitchen,
    alt: 'Forest School Kitchen',
    title: 'Forest School Kitchen',
  },
  {
    image: sandpitCover,
    alt: 'Sandpit Cover',
    title: 'Sandpit Cover',
  },
];

export function Projects() {
  return (
    <div
      className={css({
        maxW: '7xl',
        mx: 'auto',
        py: { base: '8', md: '16' },
        px: '4',
        bg: 'brand.cream',
      })}
    >
      <div
        className={css({
          textAlign: 'center',
          mb: '12',
        })}
      >
        <h1
          className={css({
            fontSize: { base: '3xl', md: '4xl' },
            fontWeight: 'bold',
            mb: '6',
            color: 'brand.darkBrown',
          })}
        >
          Our Projects
        </h1>
        <p
          className={css({
            fontSize: 'lg',
            color: 'gray.700',
          })}
        >
          <span className={css({ fontWeight: 'bold' })}>Like what you see?</span> Get in contact to
          get a <span className={css({ fontWeight: 'bold' })}>bespoke quote!</span>{' '}
          <a
            href="mailto:info@woodlandventure.co.uk"
            className={css({
              color: 'blue.600',
              _hover: { color: 'blue.700' },
            })}
          >
            info@woodlandventure.co.uk
          </a>
        </p>
      </div>

      <div
        className={css({
          display: 'flex',
          flexDir: 'row',
          flexWrap: 'wrap',
          gap: '8',
          justifyContent: 'center',
        })}
      >
        {projectCards.map((card, idx) => (
          <div
            key={`card-${idx}`}
            className={css({
              minW: { base: '100%', md: '320px' },
              flex: '1 1 320px',
              maxW: 'xl',
              justifyContent: 'center',
            })}
          >
            <ProjectCard {...card} />
          </div>
        ))}
      </div>
    </div>
  );
}
