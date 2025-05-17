import { css } from '../../styled-system/css';
import { ServiceCard } from '../components/ServiceCard';
import { PositionedPostCard, PostCardProps } from '../components/PostCard';

const postCards: PostCardProps[] = [
  {
    position: 'topLeft',
    rotation: 'LittleClockwise',
    image: 'firePit',
  },
  {
    position: 'bottomRight',
    rotation: 'LittleCounterClockwise',
    image: 'gardenSeating',
  },
  {
    position: 'topRight',
    rotation: 'LittleClockwise',
    image: 'beehiveShelter',
  },
  {
    position: 'bottomLeft',
    rotation: 'LittleCounterClockwise',
    image: 'shedDesign',
    link: '/workshop',
  },
  {
    position: 'middle',
    rotation: 'None',
    image: 'family',
  },
];

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className={css({
          minH: '80vh',
          bg: 'brand.darkGreen',
          display: 'flex',
          flexWrap: 'wrap',
          padding: { base: 10, md: 20 },
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        })}
      >
        {/* Left side text */}
        <div
          className={css({
            flex: '1',
            maxW: { base: '2xl', md: undefined },
            color: 'brand.cream',
            zIndex: 2,
          })}
        >
          <h1
            className={css({
              fontSize: { base: '5xl', md: '8xl' },
              fontWeight: 'bold',
              mb: '6',
              lineHeight: '1.2',
            })}
          >
            Providing outdoor <span className={css({ color: 'brand.yellow' })}>experiences</span>{' '}
            and <span className={css({ color: 'brand.yellow' })}>spaces</span>
          </h1>
          <p
            className={css({
              fontSize: { base: 'xl', md: '2xl' },
              mb: { base: 10, md: 0 },
              opacity: 0.9,
            })}
          >
            Tunbridge Wells, Kent and East Sussex
          </p>
        </div>

        {/* Right side post cards */}
        <div
          className={css({
            position: 'relative',
            height: { md: '60vh' },
            width: { md: 'xl' },
            flexGrow: 1,
            flexDirection: 'column',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: { base: 0, md: 5 },
          })}
        >
          {postCards.map((card, index) => (
            <PositionedPostCard key={`card-${index}`} {...card} />
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div
        className={css({
          py: { base: '8', md: '16' },
          px: '4',
          bg: 'brand.cream',
        })}
      >
        <div
          className={css({
            maxW: '7xl',
            mx: 'auto',
            width: 'fit-content',
          })}
        >
          <h2
            className={css({
              fontSize: { base: '4xl', md: '6xl' },
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'brand.darkBrown',
              mb: { base: '8', md: '12' },
              borderBottomColor: 'brand.darkBrown',
              borderBottomWidth: '1px',
              borderBottomStyle: 'solid',
            })}
          >
            Services
          </h2>

          <div
            className={css({
              display: 'flex',
              flexDirection: 'column',
              width: '100%',

              alignItems: 'center',
            })}
          >
            <ServiceCard
              title="Schools"
              description="Enhance your curriculum with outdoor learning experiences that inspire and engage students"
              image="childRope"
              linkTo="/schools"
              imagePosition="25% center"
            />

            <ServiceCard
              title="Projects"
              description="Create welcoming outdoor spaces with bespoke furniture and builds"
              image="sanctuary"
              linkTo="/projects"
              imagePosition="25% center"
            />

            <ServiceCard
              title="Outdoor Spaces"
              description="Create engaging outdoor learning environments that inspire exploration and discovery"
              image="parachute"
            />

            <ServiceCard
              title="IT Services"
              description="Technology solutions to support your outdoor learning programs"
              image="itServices"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
