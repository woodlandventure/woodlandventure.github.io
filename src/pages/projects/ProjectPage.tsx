import { PostCardImage, Rotation } from '../../components/PostCard';
import { css } from '../../../styled-system/css';
import { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { PostCard, rotationToDegrees } from '../../components/PostCard';
import navBarRef from '../../components/navBarRef';
import { thinBrownBorder } from '../../components/border';
import { WithShadow } from '../../components/Shadow';

export type ScrollSection = {
  /**
   * Percentage of the container width. 0 is left, 1 is right
   */
  xPosition: number;
  /**
   * Percentage of the container height. 0 is bottom, 1 is top
   */
  yPosition: number;
  image: PostCardImage;
  rotation?: Rotation;
  direction: 'top' | 'right' | 'bottom' | 'left';
  /**
   * Height over length. Measured from the base image.
   *
   * Used to calculate positioning
   */
  imageAspect: number;
};

const FloatingScrollHint = ({ direction = 'right' }: { direction?: 'right' | 'down' }) => {
  return (
    <div
      className={css({
        bottom: direction === 'down' ? 24 : 'auto',
        right: direction === 'right' ? 24 : 'auto',
        textWrap: 'nowrap',
        position: 'absolute',
        backgroundColor: 'white',
        zIndex: 20,
        textAlign: 'center',
        color: 'brand.darkBrown',
        fontSize: 'md',
        fontWeight: 'bold',
        borderWidth: '1px',
        padding: 2,
        animation: 'bounce 1s ease-in-out infinite',
      })}
    >
      <span>
        {direction === 'right' ? 'scroll right to see more →' : 'scroll down to see more ↓'}
      </span>
    </div>
  );
};

const useEventListener = (event: string, listener: () => void, useCapture?: boolean) => {
  useEffect(() => {
    listener();
    window.addEventListener(event, listener, useCapture);

    return () => window.removeEventListener(event, listener, useCapture);
  }, [event, listener, useCapture]);
};

const useElementDims = (ref: RefObject<HTMLDivElement>) => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const resize = useCallback(() => {
    const height = ref.current?.clientHeight;
    if (height) {
      setHeight(height);
    }
    const width = ref.current?.clientWidth;
    if (width) {
      setWidth(width);
    }
  }, [ref]);

  useEventListener('resize', resize);

  return { width, height };
};

const useContainerDims = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { width: containerWidth, height: containerHeight } = useElementDims(containerRef);
  return {
    containerRef,
    containerWidth,
    containerHeight,
  };
};

// Image component for each gallery item
interface ProjectImageProps {
  image: PostCardImage;
  rotation: Rotation;
  containerHeight: number;
  containerWidth: number;
  aspect: number;
}

const ProjectImage = ({
  image,
  rotation,
  containerHeight,
  containerWidth,
  aspect,
}: ProjectImageProps) => {
  const imageHeightLimit = Math.min(containerHeight, (containerWidth - 40) * aspect);
  const imageWidthLimit = Math.min(containerWidth, (containerHeight - 40) / aspect);

  return (
    <div
      style={{
        height: imageHeightLimit,
        width: imageWidthLimit,
      }}
      className={css({
        scrollSnapAlign: 'end',
        mx: { base: 2, md: 4 },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexShrink: 0,
        my: 'auto',
      })}
    >
      <div
        style={{
          transform: `rotate(${rotationToDegrees(rotation)}deg)`,
        }}
        className={css({
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform 0.3s ease',
          padding: 4,
          my: 'auto',
        })}
      >
        <PostCard image={image} />
      </div>
    </div>
  );
};

export const ProjectPage = ({
  name,
  baseImage,
  scrollSections,
  finalDescription,
}: {
  name: string;
  baseImage: PostCardImage;
  scrollSections: ScrollSection[];
  finalDescription: React.ReactElement;
}) => {
  const { height: navBarHeight } = useElementDims(navBarRef);
  const { containerRef } = useContainerDims();

  const {
    containerRef: imageContainerRef,
    containerHeight: imageContainerHeight,
    containerWidth: imageContainerWidth,
  } = useContainerDims();

  // Combine the base image with all scroll sections for the horizontal gallery
  const allImages = [
    { image: baseImage, rotation: 'None' as Rotation, aspect: 1 },
    ...scrollSections.map((section) => ({
      image: section.image,
      rotation: section.rotation || 'None',
      aspect: section.imageAspect,
    })),
  ];

  return (
    <div
      ref={containerRef}
      style={{ minHeight: `calc(100vh - ${navBarHeight + 1}px)` }}
      className={css({
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        backgroundColor: 'brand.cream',
        position: 'relative',
        zIndex: 0,
        overflowX: 'hidden',
        py: { base: 4, lg: 8 },
        px: { base: 0, lg: 0 },
      })}
    >
      {/* Main content wrapper with overlapping elements */}
      <div
        className={css({
          position: 'relative',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: { lg: '80vh' },
        })}
      >
        {/* Description Section with title inside */}
        <div
          className={css({
            width: { base: '90%', md: '85%', lg: '50%' },
            maxWidth: 'xl',
            zIndex: 10,
            position: { lg: 'absolute' },
            top: { lg: '5%' },
            left: { lg: '5%' },
            mb: { base: 8, lg: 0 },
            mx: { base: 4, lg: 0 },
          })}
        >
          <WithShadow>
            <div
              className={css({
                backgroundColor: 'white',
                textAlign: 'center',
                color: 'brand.darkBrown',
                fontSize: { base: 'md', md: 'lg', lg: 'xl' },
                width: '100%',
                p: { base: 6, md: 8 },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: 'xl',
                ...thinBrownBorder,
              })}
            >
              <h1
                className={css({
                  fontSize: { base: '1.8rem', md: '2.5rem', lg: '3rem' },
                  color: 'brand.darkBrown',
                  fontWeight: 'bold',
                  mb: { base: 4, md: 6 },
                  width: 'fit-content',
                  position: 'relative',
                  _after: {
                    content: '""',
                    position: 'absolute',
                    bottom: '-8px',
                    left: '10%',
                    width: '80%',
                    height: '3px',
                    backgroundColor: 'brand.darkBrown',
                  },
                })}
              >
                {name}
              </h1>
              {finalDescription}
            </div>
          </WithShadow>
        </div>

        {/* Horizontally Scrollable Image Gallery - positioned to start underneath the card */}
        <div
          className={css({
            position: { base: 'relative', lg: 'absolute' },
            width: '100%',
            right: { lg: '0' },
            left: { lg: '0' },
            pt: { lg: '10vh' },
            height: { base: 'auto', lg: '75vh' },
            overflowY: 'visible',
          })}
        >
          <FloatingScrollHint direction="right" />
          <div
            ref={imageContainerRef}
            className={css({
              mt: { base: 10, lg: 0 },
              display: 'flex',
              overflowX: 'auto',
              overflowY: 'hidden',
              scrollSnapType: 'x mandatory',
              width: '100%',
              height: '100%',
              px: 4,
              '&::-webkit-scrollbar-track': {
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'brand.darkBrown',
              },
            })}
          >
            {/* Invisible spacing element that only appears on large screens */}
            <div
              className={css({
                minWidth: { base: '0', lg: '2xl' },
                display: { base: 'none', lg: 'block' },
                height: '1px',
                flexShrink: 0,
                scrollSnapAlign: 'end',
              })}
            />

            {allImages.map((item, index) => (
              <ProjectImage
                key={index}
                image={item.image}
                rotation={item.rotation}
                containerHeight={imageContainerHeight}
                containerWidth={imageContainerWidth}
                aspect={item.aspect}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
