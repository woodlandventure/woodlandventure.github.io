import { css } from '../../styled-system/css';
import { Link } from '@tanstack/react-router';
import { thickBrownBorder } from './border';
import { Shadow } from './Shadow';
import { useContainerDims } from '../pages/projects/useDims';
import { optimizeImage } from './optimizeImage';

interface ProjectCardProps {
  image: string;
  alt: string;
  title: string;
  linkTo?: string;
  objectPosition?: string;
}

export function ProjectCard({
  image,
  alt,
  title,
  linkTo,
  objectPosition = 'center',
}: ProjectCardProps) {
  const { containerRef, containerWidth, containerHeight } = useContainerDims();
  const card = (
    <div
      ref={containerRef}
      className={css({
        position: 'relative',
      })}
    >
      <div
        className={css({
          position: 'relative',
          bg: 'white',
          overflow: 'hidden',
          zIndex: 1,
          ...thickBrownBorder,
          _hover: { transform: 'translateY(-4px)' },
          transition: 'transform 0.2s',
        })}
      >
        <img
          src={optimizeImage({
            image,
            desiredWidth: containerWidth,
            desiredHeight: containerHeight,
          })}
          alt={alt}
          style={{ objectPosition }}
          className={css({
            w: 'full',
            h: '250px',
            objectFit: 'cover',
            borderBottomColor: 'brand.yellow',
            borderBottomWidth: '4px',
            borderBottomStyle: 'solid',
          })}
        />
        <div className={css({ p: '6' })}>
          <h3
            className={css({
              color: 'black',
              fontSize: 'xl',
              fontWeight: 'bold',
              mb: '2',
            })}
          >
            {title} {linkTo && '→'}
          </h3>
        </div>
      </div>
      <Shadow />
    </div>
  );

  return linkTo ? (
    <Link hash="root" to={linkTo}>
      {card}
    </Link>
  ) : (
    card
  );
}
