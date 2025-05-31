import { css } from '../../styled-system/css';
import { thinBrownBorder } from '../components/border';
import { WithShadow } from '../components/Shadow';

export function Contact() {
  return (
    <div
      className={css({
        maxW: '3xl',
        mx: 'auto',
        py: { base: '8', md: '16' },
        px: '4',
      })}
    >
      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
          gap: '8',
          alignItems: 'center',
        })}
      >
        <WithShadow>
          <div
            className={css({
              bgColor: 'white',
              p: '8',
            })}
          >
            <h1
              className={css({
                fontSize: { base: '3xl', md: '4xl' },
                fontWeight: 'bold',
                mb: '6',
                textAlign: { base: 'center', md: 'left' },
                borderBottomColor: 'brand.darkBrown',
                borderBottomWidth: '1px',
                borderBottomStyle: 'solid',
              })}
            >
              Contact Us
            </h1>

            <div
              className={css({
                fontSize: 'lg',
                color: 'gray.700',
                lineHeight: 'relaxed',
              })}
            >
              <p className={css({ mb: '4' })}>
                We are fortunate enough to be using Priest's Wood which is part of the{' '}
                <a
                  href="http://www.chilstone.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={css({
                    color: 'blue.600',
                    _hover: { color: 'blue.700' },
                  })}
                >
                  Chilstone
                </a>{' '}
                site.
              </p>

              <address
                className={css({
                  fontStyle: 'normal',
                  mb: '6',
                })}
              >
                Victoria Park Fordcombe Lodge,
                <br />
                Fordcombe Road,
                <br />
                Langton Green,
                <br />
                Tunbridge Wells Kent
                <br />
                TN3 0RD
              </address>

              <div className={css({ mb: '4' })}>
                For all enquiries, please email{' '}
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

              <div className={css({ mb: '4' })}>
                Mobile:{' '}
                <a
                  href="tel:+447767827390"
                  className={css({
                    color: 'blue.600',
                    _hover: { color: 'blue.700' },
                  })}
                >
                  07767827390
                </a>
              </div>

              <p
                className={css({
                  fontSize: 'sm',
                  color: 'gray.500',
                  fontStyle: 'italic',
                })}
              >
                (Please be aware, we will not be able to take calls during sessions)
              </p>
            </div>
          </div>
        </WithShadow>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.584919171141!2d0.19133631546861227!3d51.134563979575624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47df44d4f936cd57%3A0xc665b28b573644ab!2sChilstone!5e0!3m2!1sen!2suk!4v1491253700448"
          className={css({
            w: 'full',
            h: '450px',
            ...thinBrownBorder,
          })}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}
