import { useNavigate } from '@tanstack/react-router';
import { css } from '../../styled-system/css';
import { motion } from 'framer-motion';

export interface PostCardProps {
  position: Position;
  rotation: Rotation;
  image: PostCardImage;
  link?: string;
}

const postCardImages = [
  'firePit',
  'childRope',
  'gardenSeating',
  'family',
  'beehiveShelter',
  'workshopPlan',
  'shedDesign',
];

export type PostCardImage = (typeof postCardImages)[number] | string;

export type Rotation = 'LittleClockwise' | 'LittleCounterClockwise' | 'None';

type Position = 'topLeft' | 'bottomRight' | 'middle' | 'topRight' | 'bottomLeft';

export const PostCard = ({ image }: { image: PostCardImage }) => {
  const isImage = postCardImages.includes(image);

  if (isImage) {
    return (
      <div
        className={css({
          bg:
            image === 'firePit'
              ? 'url(/img/Woodland_Venture_Fire_Pit.jpg)'
              : image === 'childRope'
                ? 'url(/img/Woodland_Venture_Child_Rope_Activity.jpg)'
                : image === 'gardenSeating'
                  ? 'url(/img/projects/Woodland_Venture_Garden_Seating.jpg)'
                  : image === 'beehiveShelter'
                    ? 'url(/img/projects/Woodland_Venture_Beehive_Shelter.jpg)'
                    : image === 'shedDesign'
                      ? 'url(/img/projects/Woodland_Venture_Shed_Design.png)'
                      : image === 'workshopPlan'
                        ? 'url(/img/projects/Workshop/Shed_Layout.png)'
                        : 'url(/img/Woodland_Venture_Family_Toast_Marshmallows.jpg)',
          bgSize: 'cover',
          border: '5px solid white',
          height: '100%',
          width: '100%',
        })}
      />
    );
  } else {
    return (
      <img
        src={image}
        alt={image}
        className={css({
          bgSize: 'cover',
          border: '5px solid white',
          height: '100%',
          width: '100%',
        })}
      />
    );
  }
};

export const rotationToDegrees = (rotation: Rotation) => {
  return rotation === 'LittleClockwise' ? -3 : rotation === 'LittleCounterClockwise' ? 3 : 0;
};

export const rotationToHoverDegrees = (rotation: Rotation) => {
  return rotation === 'LittleClockwise' ? 0 : rotation === 'LittleCounterClockwise' ? 0 : 3;
};

export const PositionedPostCard = ({ position, rotation, image, link }: PostCardProps) => {
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
          navigate({ to: link });
        }
      }}
      className={css({
        cursor: link ? 'pointer' : 'default',
        position: {
          lg: 'absolute',
        },
        w: '300px',
        h: '230px',
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
      <PostCard image={image} />
    </motion.div>
  );
};
