import { Link } from '@tanstack/react-router';
import { css } from '../../styled-system/css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { WithShadow } from './Shadow';
import { optimizeImage } from './optimizeImage';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  linkTo?: string;
  imagePosition?: string;
}

const OptionalLink = ({ children, to }: { children: React.ReactNode; to?: string }) => {
  if (to) {
    return (
      <Link hash="root" to={to}>
        {children}
      </Link>
    );
  }
  return <>{children}</>;
};

export function ServiceCard({
  title,
  description,
  image,
  linkTo,
  imagePosition = 'center',
}: ServiceCardProps) {
  const desiredWidth = window.innerWidth;
  return (
    <div
      className={css({
        mb: 10,
        _hover: { transform: 'translateY(-4px)' },
        transition: 'transform 0.2s',
      })}
    >
      <WithShadow borderWidth="thick" hoverAnimation>
        <OptionalLink to={linkTo}>
          <div
            className={css({
              position: 'relative',
              width: { base: '100%', md: '4xl' },
              height: { base: '100%', md: '12rem' },
              maxW: { base: '30rem', md: '4xl' },
            })}
          >
            <div
              className={css({
                position: 'relative',
                width: { base: '100%', md: '4xl' },
                height: { base: '100%', md: '12rem' },
                maxW: { base: '30rem', md: '4xl' },
                display: 'flex',
                flexDirection: { base: 'column', md: 'row' },
                bg: 'white',
                bgColor: 'white',
                color: 'black',
                overflow: 'hidden',
                zIndex: 1,
              })}
            >
              <div
                style={{
                  backgroundImage: `url(${optimizeImage({
                    image,
                    desiredWidth,
                  })})`,
                }}
                className={css({
                  w: { base: '100%', md: '12rem' },
                  h: { base: '12rem', md: '12rem' },
                  flexGrow: 0,
                  flexShrink: 0,
                  bgSize: 'cover',
                  backgroundPosition: imagePosition,

                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',

                  borderColor: 'brand.yellow',
                  borderWidth: '4px',

                  borderRightStyle: { md: 'solid', base: 'none' },
                  borderBottomStyle: { base: 'solid', md: 'none' },
                  borderTopStyle: { md: 'none', base: 'none' },
                  borderLeftStyle: { md: 'none', base: 'none' },
                })}
              />
              <div className={css({ p: '6', display: 'flex', flexDirection: 'column', flex: 1 })}>
                <h3
                  className={css({
                    fontSize: { base: 'xl', md: '4xl' },
                    fontWeight: 'bold',
                    mb: '4',
                  })}
                >
                  {title}
                </h3>
                <p
                  className={css({
                    color: 'gray.500',
                    mb: '4',
                    fontSize: { base: 'md', md: 'xl' },
                  })}
                >
                  {description}
                </p>
              </div>
              <div
                className={css({
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: { base: 8, md: 16 },
                  color: 'brand.darkBrown',
                  fontSize: { base: 'xl', md: '2xl' },
                  display: { base: 'none', md: 'flex' },
                })}
              >
                {linkTo && <FontAwesomeIcon icon={faArrowRight} />}
              </div>
            </div>
          </div>
        </OptionalLink>
      </WithShadow>
    </div>
  );
}
