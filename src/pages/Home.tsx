import { Link } from '@tanstack/react-router'
import { css } from '../../styled-system/css'

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
        bg: 'white'
      })}>
        <div className={css({
          maxW: '7xl',
          mx: 'auto'
        })}>
          <h2 className={css({
            fontSize: '3xl',
            fontWeight: 'bold',
            textAlign: 'center',
            mb: '12'
          })}>
            Our Services
          </h2>

          <div className={css({
            display: 'grid',
            gridTemplateColumns: { base: '1fr', md: 'repeat(3, 1fr)' },
            gap: '8'
          })}>
            {/* Schools */}
            <Link to="/schools">
            <div id="schools" className={css({
              bg: 'white',
              rounded: 'lg',
              overflow: 'hidden',
              shadow: 'md',
              transition: 'transform 0.2s',
              _hover: { transform: 'translateY(-4px)' }
            })}>
              <div className={css({
                h: '250px',
                bg: 'url(/img/Woodland_Venture_Child_Rope_Activity.jpg)',
                bgSize: 'cover',
                backgroundPosition: '25% center'
              })} />
              <div className={css({ p: '6' })}>
                <h3 className={css({
                  fontSize: 'xl',
                  fontWeight: 'bold',
                  mb: '4'
                })}>
                  Schools
                </h3>
                <p className={css({
                  color: 'gray.600',
                  mb: '4'
                })}>
                  Enhance your curriculum with outdoor learning experiences that inspire and engage students
                </p>
              </div>
            </div>
            </Link>

            {/* Outdoor Spaces */}
            <Link to="/projects">
            <div id="projects" className={css({
              bg: 'white',
              rounded: 'lg',
              overflow: 'hidden',
              shadow: 'md',
              transition: 'transform 0.2s',
              _hover: { transform: 'translateY(-4px)' }
            })}>
              <div className={css({
                h: '250px',
                bg: 'url(/img/projects/Forest_School_Woodland_Parachute.JPG)',
                bgSize: 'cover',
                backgroundPosition: 'center'
              })} />
              <div className={css({ p: '6' })}>
                <h3 className={css({
                  fontSize: 'xl',
                  fontWeight: 'bold',
                  mb: '4'
                })}>
                  Outdoor Spaces
                </h3>
                <p className={css({
                  color: 'gray.600',
                  mb: '4'
                })}>
                  Create engaging outdoor learning environments that inspire exploration and discovery
                </p>
              </div>
            </div>
            </Link>

            {/* IT Services TODO: fix link*/}
            <Link to="/projects">
            <div id="itservices" className={css({
              bg: 'white',
              rounded: 'lg',
              overflow: 'hidden',
              shadow: 'md',
              transition: 'transform 0.2s',
              _hover: { transform: 'translateY(-4px)' }
            })}>
              <div className={css({
                h: '250px',
                bg: 'url(/img/pexels-brett-sayles-2881224.jpg)',
                bgSize: 'cover',
                backgroundPosition: 'center'
              })} />
              <div className={css({ p: '6' })}>
                <h3 className={css({
                  fontSize: 'xl',
                  fontWeight: 'bold',
                  mb: '4'
                })}>
                  IT Services
                </h3>
                <p className={css({
                  color: 'gray.600',
                  mb: '4'
                })}>
                  Technology solutions to support your outdoor learning programs
                </p>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 