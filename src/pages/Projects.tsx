import { css } from '../../styled-system/css'
import { Link } from '@tanstack/react-router'

export function Projects() {
  return (
    <div className={css({
      maxW: '7xl',
      mx: 'auto',
      py: { base: '8', md: '16' },
      px: '4'
    })}>
      <div className={css({
        textAlign: 'center',
        mb: '12'
      })}>
        <h1 className={css({
          fontSize: { base: '3xl', md: '4xl' },
          fontWeight: 'bold',
          mb: '6'
        })}>
          Our Projects
        </h1>
        <p className={css({
          fontSize: 'lg',
          color: 'gray.700',
          maxW: '2xl',
          mx: 'auto',
          mb: '4'
        })}>
          Here are some of the <span className={css({ fontWeight: 'bold' })}>learning resources</span> we've been building for our clients around Tunbridge Wells.
        </p>
        <p className={css({
          fontSize: 'lg',
          color: 'gray.700'
        })}>
          <span className={css({ fontWeight: 'bold' })}>Like what you see?</span>{' '}
          Get in contact to get a <span className={css({ fontWeight: 'bold' })}>bespoke quote!</span>{' '}
          <a 
            href="mailto:info@woodlandventure.co.uk"
            className={css({
              color: 'blue.600',
              _hover: { color: 'blue.700' }
            })}
          >
            info@woodlandventure.co.uk
          </a>
        </p>
      </div>

      <div className={css({
        display: 'grid',
        gridTemplateColumns: { base: '1fr', md: 'repeat(3, 1fr)' },
        gap: '8'
      })}>
        <div className={css({
          display: 'flex',
          flexDir: 'column',
          gap: '8'
        })}>
          <Link
            to="/projects/shelter"
            className={css({
              bg: 'white',
              rounded: 'lg',
              overflow: 'hidden',
              shadow: 'md',
              transition: 'transform 0.2s',
              _hover: { transform: 'translateY(-4px)' }
            })}
          >
            <img 
              src="/img/projects/Forest_School_Woodland_BeforeAndAfter.JPG"
              alt="Outdoor Shelter"
              className={css({
                w: 'full',
                h: '250px',
                objectFit: 'cover'
              })}
            />
            <div className={css({ p: '6' })}>
              <h3 className={css({
                fontSize: 'xl',
                fontWeight: 'bold',
                mb: '2'
              })}>
                Outdoor Shelter
              </h3>
            </div>
          </Link>

          <div className={css({
            bg: 'white',
            rounded: 'lg',
            overflow: 'hidden',
            shadow: 'md'
          })}>
            <img 
              src="/img/projects/Forest_School_Woodland_Parachute.JPG"
              alt="Parachute"
              className={css({
                w: 'full',
                h: '250px',
                objectFit: 'cover'
              })}
            />
            <div className={css({ p: '6' })}>
              <h3 className={css({
                fontSize: 'xl',
                fontWeight: 'bold',
                mb: '2'
              })}>
                Parachute
              </h3>
            </div>
          </div>

          <div className={css({
            bg: 'white',
            rounded: 'lg',
            overflow: 'hidden',
            shadow: 'md'
          })}>
            <img 
              src="/img/projects/Forest_School_Woodland_Work_Top.JPG"
              alt="Mud Kitchen - Work Top"
              className={css({
                w: 'full',
                h: '250px',
                objectFit: 'cover'
              })}
            />
            <div className={css({ p: '6' })}>
              <h3 className={css({
                fontSize: 'xl',
                fontWeight: 'bold',
                mb: '2'
              })}>
                Mud Kitchen - Work Top
              </h3>
            </div>
          </div>
        </div>

        <div className={css({
          display: 'flex',
          flexDir: 'column',
          gap: '8'
        })}>
          <div className={css({
            bg: 'white',
            rounded: 'lg',
            overflow: 'hidden',
            shadow: 'md'
          })}>
            <img 
              src="/img/projects/Forest_School_Woodland_Fire_Circle.JPG"
              alt="Fire Circle"
              className={css({
                w: 'full',
                h: '250px',
                objectFit: 'cover'
              })}
            />
            <div className={css({ p: '6' })}>
              <h3 className={css({
                fontSize: 'xl',
                fontWeight: 'bold',
                mb: '2'
              })}>
                Fire Circle
              </h3>
            </div>
          </div>

          <div className={css({
            bg: 'white',
            rounded: 'lg',
            overflow: 'hidden',
            shadow: 'md'
          })}>
            <img 
              src="/img/projects/Forest_School_Woodland_Chalkboard.JPG"
              alt="Fencing and Chalkboard"
              className={css({
                w: 'full',
                h: '250px',
                objectFit: 'cover'
              })}
            />
            <div className={css({ p: '6' })}>
              <h3 className={css({
                fontSize: 'xl',
                fontWeight: 'bold',
                mb: '2'
              })}>
                Fencing and Chalkboard
              </h3>
            </div>
          </div>

          <div className={css({
            bg: 'white',
            rounded: 'lg',
            overflow: 'hidden',
            shadow: 'md'
          })}>
            <img 
              src="/img/projects/Forest_School_Woodland_Sink.JPG"
              alt="Mud Kitchen - Sink"
              className={css({
                w: 'full',
                h: '250px',
                objectFit: 'cover'
              })}
            />
            <div className={css({ p: '6' })}>
              <h3 className={css({
                fontSize: 'xl',
                fontWeight: 'bold',
                mb: '2'
              })}>
                Mud Kitchen - Sink
              </h3>
            </div>
          </div>
        </div>

        <div className={css({
          display: 'flex',
          flexDir: 'column',
          gap: '8'
        })}>
          <Link
            to="/projects/sanctuary"
            className={css({
              bg: 'white',
              rounded: 'lg',
              overflow: 'hidden',
              shadow: 'md',
              transition: 'transform 0.2s',
              _hover: { transform: 'translateY(-4px)' }
            })}
          >
            <img 
              src="/img/projects/Forest_School_Woodland_Sanctuary_After.JPG"
              alt="The Sanctuary"
              className={css({
                w: 'full',
                h: '250px',
                objectFit: 'cover'
              })}
            />
            <div className={css({ p: '6' })}>
              <h3 className={css({
                fontSize: 'xl',
                fontWeight: 'bold',
                mb: '2'
              })}>
                The Sanctuary
              </h3>
            </div>
          </Link>

          <div className={css({
            bg: 'white',
            rounded: 'lg',
            overflow: 'hidden',
            shadow: 'md'
          })}>
            <img 
              src="/img/projects/Forest_School_Woodland_Kitchen_2020.jpg"
              alt="Forest School Kitchen"
              className={css({
                w: 'full',
                h: '250px',
                objectFit: 'cover'
              })}
            />
            <div className={css({ p: '6' })}>
              <h3 className={css({
                fontSize: 'xl',
                fontWeight: 'bold',
                mb: '2'
              })}>
                Forest School Kitchen
              </h3>
            </div>
          </div>

          <div className={css({
            bg: 'white',
            rounded: 'lg',
            overflow: 'hidden',
            shadow: 'md'
          })}>
            <img 
              src="/img/projects/Forest_School_Woodland_Sandpit_Cover.JPG"
              alt="Sandpit Cover"
              className={css({
                w: 'full',
                h: '250px',
                objectFit: 'cover'
              })}
            />
            <div className={css({ p: '6' })}>
              <h3 className={css({
                fontSize: 'xl',
                fontWeight: 'bold',
                mb: '2'
              })}>
                Sandpit Cover
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 