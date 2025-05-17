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

// Import images from new projects
import { IMG20231010122812 as CompostingToiletImg } from '../assets/img/projects/CompostingToilet';
import { IMG20230815154022 as CosyBenchImg } from '../assets/img/projects/CosyBench';
import { IMG20230809135936 as DeckingImg } from '../assets/img/projects/Decking';
import { IMG20230813170801 as GardenIdeasImg } from '../assets/img/projects/GardenIdeas';
import { IMG_20250512_133705 as GardenSofasImg } from '../assets/img/projects/GardenSofas';
import { RealFullSideSm as WorkshopImg } from '../assets/img/projects/Workshop';

const projectCards = [
  // Cards with links first
  {
    image: sanctuary,
    alt: 'The Sanctuary',
    title: 'The Sanctuary',
    linkTo: '/sanctuary',
  },
  {
    image: CompostingToiletImg,
    alt: 'Composting Toilet',
    title: 'Composting Toilet',
    linkTo: '/composting-toilet',
    objectPosition: '20% 30%',
  },
  {
    image: CosyBenchImg,
    alt: 'Cosy Bench',
    title: 'Cosy Bench',
    linkTo: '/cosy-bench',
  },
  {
    image: DeckingImg,
    alt: 'Decking',
    title: 'Custom Decking',
    linkTo: '/decking',
    objectPosition: '20% 30%',
  },
  {
    image: GardenIdeasImg,
    alt: 'Garden Ideas',
    title: 'Garden Ideas',
    linkTo: '/garden-ideas',
  },
  {
    image: GardenSofasImg,
    alt: 'Garden Sofas',
    title: 'Garden Sofas',
    linkTo: '/garden-sofas',
  },
  {
    image: beehiveShelterVenture,
    alt: 'Shelters',
    title: 'Outdoor Shelters',
    linkTo: '/shelters',
    objectPosition: '20% 30%',
  },
  {
    image: WorkshopImg,
    alt: 'Workshop',
    title: 'Workshop',
    linkTo: '/workshop',
    objectPosition: '0% 0%',
  },
  // Cards without links
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
          get a bespoke quote!{' '}
          <a
            href="mailto:info@woodlandventure.co.uk"
            className={css({
              color: 'gray.700',
              borderBottom: '2px solid',
              borderColor: 'brand.cream',
              _hover: {
                borderColor: 'gray.700',
              },
              display: 'inline-block',
            })}
          >
            <strong>info@woodlandventure.co.uk</strong>
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
