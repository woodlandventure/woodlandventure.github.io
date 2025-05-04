import { css } from '../../styled-system/css'
import { ServiceCard } from '../components/ServiceCard'
import { PostCard } from '../components/PostCard'

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className={css({
        minH: '80vh',
        bg: 'brand.darkGreen',
        display: 'flex',
        flexWrap: "wrap",
        padding: 20,
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      })}>
        {/* Left side text */}
        <div className={css({
          flex: '1',
          maxW: '2xl',
          color: 'brand.cream',
          zIndex: 2
        })}>
          <h1 className={css({
            fontSize: { base: '4xl', md: '8xl' },
            fontWeight: 'bold',
            mb: '6',
            lineHeight: '1.2'
          })}>
            Providing outdoor <span className={css({ color: 'brand.yellow' })}>experiences</span> and <span className={css({ color: 'brand.yellow' })}>spaces</span>
          </h1>
          <p className={css({
            fontSize: { base: 'xl', md: '2xl' },
            opacity: 0.9
          })}>
            Tunbridge Wells, Kent and East Sussex
          </p>
        </div>

        {/* Right side post cards */}
        <div className={css({
          position: 'relative',
          height: "60vh",
          minWidth: "xl",
          width: "xl",
          flexGrow: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 5,
        })}>
          <PostCard
            position="topLeft"
            rotation="LittleClockwise"
            image="firePit"
          />
          <PostCard
            position="bottomRight"
            rotation="LittleCounterClockwise"
            image="childRope"
          />
          <PostCard
            position="middle"
            rotation="None"
            image="parachute"
          />
        </div>
      </div>

      {/* Services Section */}
      <div className={css({
        py: '16',
        px: '4',
        bg: 'brand.cream'
      })}>
        <div className={css({
          maxW: '7xl',
          mx: 'auto'
        })}>
          <h2 className={css({
            fontSize: '4xl',
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'black',
            mb: '12'
          })}>
            Our Services
          </h2>

          <div className={css({
            display: 'flex',
            flexDirection: "column",
            width: "100%",

            alignItems: 'center',
          })}>
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
              linkTo="/projects"
            />

            <ServiceCard
              title="IT Services"
              description="Technology solutions to support your outdoor learning programs"
              image="itServices"
              linkTo="/projects"
            />
          </div>
        </div>
      </div>
    </div>
  )
} 