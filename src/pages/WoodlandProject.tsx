import { css } from '../../styled-system/css';
import { Link } from '@tanstack/react-router';

export function WoodlandProject() {
  return (
    <div
      className={css({
        maxW: '7xl',
        mx: 'auto',
        py: { base: '8', md: '16' },
        px: '4',
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
          })}
        >
          Woodland Project
        </h1>
        <p
          className={css({
            fontSize: 'lg',
            color: 'gray.700',
            maxW: '2xl',
            mx: 'auto',
            mb: '4',
          })}
        >
          This is a <span className={css({ fontWeight: 'bold' })}>woodland project</span> that we
          built for a <span className={css({ fontWeight: 'bold' })}>school</span> in Tunbridge
          Wells.
        </p>
        <p
          className={css({
            fontSize: 'lg',
            color: 'gray.700',
            maxW: '2xl',
            mx: 'auto',
            mb: '4',
          })}
        >
          If you think your school or{' '}
          <span className={css({ fontWeight: 'bold' })}>organisation</span> would benefit from
          something similar,{' '}
          <Link
            hash="root"
            to="/contact"
            className={css({
              color: 'blue.600',
              _hover: { color: 'blue.700' },
            })}
          >
            get in touch
          </Link>
          !
        </p>
        <a
          href="mailto:info@woodlandventure.co.uk"
          className={css({
            color: 'blue.600',
            _hover: { color: 'blue.700' },
          })}
        >
          info@woodlandventure.co.uk
        </a>
      </div>

      <div
        className={css({
          display: 'grid',
          gridTemplateColumns: { base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
          gap: '8',
        })}
      >
        <div
          className={css({
            bg: 'white',
            rounded: 'lg',
            overflow: 'hidden',
            shadow: 'md',
          })}
        >
          <img
            src="/img/projects/Woodland_Project_Before_Small.JPG"
            alt="Before"
            className={css({
              w: 'full',
              h: '250px',
              objectFit: 'cover',
            })}
          />
          <div className={css({ p: '6' })}>
            <h3
              className={css({
                fontSize: 'xl',
                fontWeight: 'bold',
                mb: '2',
              })}
            >
              Before
            </h3>
          </div>
        </div>

        <div
          className={css({
            bg: 'white',
            rounded: 'lg',
            overflow: 'hidden',
            shadow: 'md',
          })}
        >
          <img
            src="/img/projects/Woodland_Project_After_Small.JPG"
            alt="Woodland Project - 1"
            className={css({
              w: 'full',
              h: '250px',
              objectFit: 'cover',
            })}
          />
          <div className={css({ p: '6' })}>
            <h3
              className={css({
                fontSize: 'xl',
                fontWeight: 'bold',
                mb: '2',
              })}
            >
              Woodland Project - 1
            </h3>
          </div>
        </div>

        <div
          className={css({
            bg: 'white',
            rounded: 'lg',
            overflow: 'hidden',
            shadow: 'md',
          })}
        >
          <img
            src="/img/projects/Woodland_Project_After_Small_2.JPG"
            alt="Woodland Project - 2"
            className={css({
              w: 'full',
              h: '250px',
              objectFit: 'cover',
            })}
          />
          <div className={css({ p: '6' })}>
            <h3
              className={css({
                fontSize: 'xl',
                fontWeight: 'bold',
                mb: '2',
              })}
            >
              Woodland Project - 2
            </h3>
          </div>
        </div>

        <div
          className={css({
            bg: 'white',
            rounded: 'lg',
            overflow: 'hidden',
            shadow: 'md',
          })}
        >
          <img
            src="/img/projects/Woodland_Project_After_Small_3.JPG"
            alt="Woodland Project - 3"
            className={css({
              w: 'full',
              h: '250px',
              objectFit: 'cover',
            })}
          />
          <div className={css({ p: '6' })}>
            <h3
              className={css({
                fontSize: 'xl',
                fontWeight: 'bold',
                mb: '2',
              })}
            >
              Woodland Project - 3
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
