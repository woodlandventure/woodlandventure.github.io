import { css } from '../../styled-system/css';
import { Link } from '@tanstack/react-router';

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
          borderColor: 'brand.darkBrown',
          borderWidth: '2px',
          borderStyle: 'solid',
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
      <div
        className={css({
          backgroundColor: 'brand.darkBrown',
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: '4px',
          left: '4px',
          zIndex: 0,
        })}
      />
    </div>
  );

  return linkTo ? <Link to={linkTo}>{card}</Link> : card;
}
