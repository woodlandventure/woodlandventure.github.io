import { css } from '../../styled-system/css'
import { ServiceCard } from '../components/ServiceCard'

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className={css({
        h: '500px',
        bg: 'url(/img/Woodland_Venture_Fire_Pit.jpg)',
        bgSize: 'cover',
        backgroundPosition: '15% center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        px: '4',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bg: 'rgba(0, 0, 0, 0.2)',
          zIndex: 1
        }
      })}>
        <div className={css({
          maxW: '3xl',
          mx: 'auto',
          position: 'relative',
          zIndex: 2
        })}>
          <h1 className={css({
            fontSize: { base: '4xl', md: '5xl' },
            fontWeight: 'bold',
            mb: '4',
            textShadow: '0 2px 4px rgba(0,0,0,0.5)'
          })}>
            Welcome to Woodland Venture
          </h1>
          <p className={css({
            fontSize: { base: 'xl', md: '2xl' },
            textShadow: '0 2px 4px rgba(0,0,0,0.5)'
          })}>
            Providing Forest School and outdoor experiences in Tunbridge Wells, Kent and East Sussex
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className={css({
        py: '16',
        px: '4',
        bg: 'gray.100'
      })}>
        <div className={css({
          maxW: '7xl',
          mx: 'auto'
        })}>
          <h2 className={css({
            fontSize: '4xl',
            fontWeight: 'bold',
            textAlign: 'center',
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