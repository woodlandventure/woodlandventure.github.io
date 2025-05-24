import { useNavigate } from '@tanstack/react-router';
import { css } from '../../styled-system/css';
import { motion } from 'framer-motion';
import { optimizeImage } from './optimizeImage';

export interface PostCardProps {
  position: Position;
  rotation: Rotation;
  image: PostCardImage;
  link?: string;
  asBackgroundImage?: boolean;
  desiredHeight?: number;
}

export type PostCardImage = string;

export type Rotation = 'LittleClockwise' | 'LittleCounterClockwise' | 'None';

type Position = 'topLeft' | 'bottomRight' | 'middle' | 'topRight' | 'bottomLeft';

export const PostCard = ({
  image,
  desiredHeight,
  asBackgroundImage,
}: {
  image: PostCardImage;
  desiredHeight?: number;
  asBackgroundImage?: boolean;
}) => {
  if (asBackgroundImage) {
    const scaledImageSrc = desiredHeight ? optimizeImage({ image, desiredHeight }) : image;

    return (
      <div
        style={{
          backgroundImage: `url(${scaledImageSrc})`,
        }}
        className={css({
          bgSize: 'cover',
          border: '5px solid white',
          height: '100%',
          width: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        })}
      />
    );
  } else {
    const imageSrc = desiredHeight ? optimizeImage({ image, desiredHeight }) : image;
    return (
      <div
        className={css({
          borderColor: 'brand.darkBrown',
          borderWidth: '1px',
          borderStyle: 'solid',
          backgroundColor: 'white',
          height: '100%',
          width: '100%',
        })}
      >
        <img
          src={imageSrc}
          alt={image}
          className={css({
            bgSize: 'cover',
            border: '5px solid white',
            height: '100%',
            width: '100%',
          })}
        />
      </div>
    );
  }
};

export const rotationToDegrees = (rotation: Rotation) => {
  return rotation === 'LittleClockwise' ? -3 : rotation === 'LittleCounterClockwise' ? 3 : 0;
};

export const rotationToHoverDegrees = (rotation: Rotation) => {
  return rotation === 'LittleClockwise' ? 0 : rotation === 'LittleCounterClockwise' ? 0 : 3;
};

export const PositionedPostCard = ({
  position,
  rotation,
  image,
  link,
  asBackgroundImage,
  desiredHeight,
}: PostCardProps) => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{
        scale: 1,
        rotate: rotationToDegrees(rotation),
      }}
      whileHover={{
        scale: 1.05,
        rotate: rotationToHoverDegrees(rotation),
      }}
      animate={{
        scale: 1,
        rotate: rotationToDegrees(rotation),
      }}
      onClick={() => {
        if (link) {
          navigate({ to: link, hash: 'root' });
        }
      }}
      className={css({
        cursor: link ? 'pointer' : 'default',
        position: {
          lg: 'absolute',
        },
        w: { base: '300px', md: '400px' },
        h: { base: '230px', md: '300px' },
        top: {
          lg: position === 'topLeft' || position === 'topRight' ? 5 : undefined,
        },
        left: {
          lg: position === 'topLeft' || position === 'bottomLeft' ? 5 : undefined,
        },
        bottom: {
          lg: position === 'bottomRight' || position === 'bottomLeft' ? 5 : undefined,
        },
        right: {
          lg: position === 'bottomRight' || position === 'topRight' ? 5 : undefined,
        },
        bg: 'white',
        bgSize: 'cover',
        bgPosition: 'center',
        shadow: 'xl',
        shadowColor: 'gray.800',
        overflow: 'hidden',
      })}
    >
      <PostCard image={image} asBackgroundImage={asBackgroundImage} desiredHeight={desiredHeight} />
    </motion.div>
  );
};
