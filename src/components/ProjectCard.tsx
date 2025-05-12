import { css } from '../../styled-system/css';
import { Link } from '@tanstack/react-router';
import { thickBrownBorder } from './border';
import { Shadow } from './Shadow';

interface ProjectCardProps {
  image: string;
  alt: string;
  title: string;
  linkTo?: string;
}

export function ProjectCard({ image, alt, title, linkTo }: ProjectCardProps) {
  const card = (
    <div
      className={css({
        position: 'relative',
        _hover: { transform: 'translateY(-4px)' },
        transition: 'transform 0.2s',
      })}
    >
      <div
        className={css({
          position: 'relative',
          bg: 'white',
          overflow: 'hidden',
          zIndex: 1,
          ...thickBrownBorder,
        })}
      >
        <img
          src={image}
          alt={alt}
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
            {title}
          </h3>
        </div>
      </div>
      <Shadow />
    </div>
  );

  return linkTo ? <Link to={linkTo}>{card}</Link> : card;
}
