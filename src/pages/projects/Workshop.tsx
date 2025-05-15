import { css } from '../../../styled-system/css';
import { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { navBarHeight } from '../../components/navBarHeight';
import { PostCard, PostCardImage, Rotation, rotationToDegrees } from '../../components/PostCard';
import * as WorkshopImages from '../../assets/img/projects/Workshop';

// type Position = {
//   top?: number;
//   right?: number;
//   left?: number;
//   bottom?: number;
// };

const scrollSections: {
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
}[] = [
  //   {
  //     image: WorkshopImages.threeDCutAwaySm,
  //     position: {
  //       top: 100,
  //       right: 100,
  //     },
  //     rotation: 'LittleClockwise',
  //   },
  {
    image: WorkshopImages.threeDFullLocationSm,
    xPosition: 0.1,
    yPosition: 0.1,
    rotation: 'LittleCounterClockwise',
    direction: 'top',
    imageAspect: 252 / 382,
  },
  {
    image: WorkshopImages.threeDCutAwayLocationSm,
    xPosition: 0.8,
    yPosition: 0.8,
    rotation: 'LittleClockwise',
    direction: 'bottom',
    imageAspect: 214 / 382,
  },
  {
    image: WorkshopImages.RealBaseSm,
    xPosition: 0.8,
    yPosition: 0.2,
    rotation: 'LittleClockwise',
    direction: 'left',
    imageAspect: 314 / 382,
  },
  {
    image: WorkshopImages.RealWallsSm,
    xPosition: 0.2,
    yPosition: 1.0,
    rotation: 'LittleCounterClockwise',
    direction: 'right',
    imageAspect: 351 / 382,
  },
  //   {
  //     image: WorkshopImages.RealRoofStructureSm,
  //     position: {
  //       top: 100,
  //       left: 150,
  //     },
  //   },
  {
    image: WorkshopImages.RealFullSideSm,
    xPosition: 0.5,
    yPosition: 0.5,
    direction: 'bottom',
    imageAspect: 290 / 382,
  },
];

const ScrollSectionCard = ({
  xPosition,
  yPosition,
  direction,
  children,
  scrollLimit,
  scrollRef,
  containerWidth,
  containerHeight,
  imageAspect,
  outerHeight,
  outerWidth,
}: {
  xPosition: number;
  yPosition: number;
  direction: 'top' | 'right' | 'bottom' | 'left';
  scrollLimit: {
    start: number;
    end: number;
  };
  scrollRef: RefObject<HTMLDivElement>;
  children: React.ReactNode;
  containerWidth: number;
  containerHeight: number;
  outerHeight: number;
  outerWidth: number;
  imageAspect: number;
}) => {
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const widthLimit = Math.min(400, containerWidth);
  const heightLimit = Math.min(400, containerHeight, widthLimit);
  const width = Math.min(widthLimit, heightLimit / imageAspect);
  const height = Math.min(heightLimit, width * imageAspect);

  const xSpacing = containerWidth - width;
  const ySpacing = containerHeight - height;
  const left = xPosition * xSpacing;
  const bottom = yPosition * ySpacing;

  const movingTargetDestination = direction === 'top' || direction === 'bottom' ? bottom : left;
  console.log(containerWidth, width);
  const movingTargetStart =
    direction === 'bottom'
      ? -outerHeight - height
      : direction === 'left'
        ? -(outerWidth + width)
        : direction === 'right'
          ? outerWidth + width
          : direction === 'top'
            ? outerHeight + height
            : 0;
  // Only animate the specified direction
  const animatedValue = useTransform(
    scrollYProgress,
    [scrollLimit.start, scrollLimit.end],
    [movingTargetStart, movingTargetDestination],
  );

  return (
    <motion.div
      style={{
        left: direction === 'left' || direction === 'right' ? animatedValue : left,
        bottom: direction === 'bottom' || direction === 'top' ? animatedValue : bottom,
        width: width,
        height: height,
      }}
      className={css({
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      })}
    >
      {children}
    </motion.div>
  );
};

const ScrollSpacingPage = ({
  containerHeight,
  isFirst,
}: {
  containerHeight: string;
  isFirst: boolean;
}) => (
  <div
    style={{ height: containerHeight }}
    className={css({
      flexShrink: 0,
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      scrollSnapAlign: 'start',
      position: 'relative',
    })}
  >
    {isFirst && <FloatingScrollHint />}
  </div>
);

const FloatingScrollHint = () => {
  return (
    <div
      className={css({
        bottom: 24,
        textWrap: 'nowrap',
        position: 'absolute',
        backgroundColor: 'brand.cream',
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
      <span>scroll down to see more ↓</span>
    </div>
  );
};

/**
 * Viewport that takes up the visible screen space but isn't scrollable.
 *
 * You can render children into this viewport using transitions based on
 * the overall scroll position.
 */
const ViewportDiv = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{ paddingTop: navBarHeight }}
    className={css({
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      backgroundColor: 'brand.darkGreen',
    })}
  >
    {children}
  </div>
);

const ScrollSpacing = ({
  length,
  scrollRef,
  containerHeight,
}: {
  length: number;
  scrollRef: RefObject<HTMLDivElement>;
  containerHeight: string;
}) => (
  <div
    ref={scrollRef}
    style={{ height: containerHeight }}
    className={css({
      display: 'flex',
      flexDir: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      scrollSnapType: 'y mandatory',
      overflowY: 'scroll',
      mt: navBarHeight,
    })}
  >
    {Array.from({ length }).map((_, index) => (
      <ScrollSpacingPage isFirst={index === 0} key={index} containerHeight={containerHeight} />
    ))}
  </div>
);

const useEventListener = (event: string, listener: () => void, useCapture?: boolean) => {
  useEffect(() => {
    listener();
    window.addEventListener(event, listener, useCapture);

    return () => window.removeEventListener(event, listener, useCapture);
  }, [event, listener, useCapture]);
};

const useContainerDims = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const resize = useCallback(() => {
    const height = containerRef.current?.clientHeight;
    if (height) {
      setContainerHeight(height);
    }
    const width = containerRef.current?.clientWidth;
    if (width) {
      setContainerWidth(width);
    }
  }, [setContainerHeight, containerRef.current]);

  useEventListener('resize', resize);

  return { containerRef, containerWidth, containerHeight };
};

export function Workshop() {
  const scrollRef = useRef(null);
  const {
    containerHeight: canvasContainerHeight,
    containerWidth: canvasContainerWidth,
    containerRef: canvasContainerRef,
  } = useContainerDims();

  const {
    containerHeight: overallContainerHeight,
    containerRef: overallContainerRef,
    containerWidth: overallContainerWidth,
  } = useContainerDims();

  return (
    <>
      <ScrollSpacing
        length={scrollSections.length + 1}
        scrollRef={scrollRef}
        containerHeight={`${overallContainerHeight}px`}
      />
      <ViewportDiv>
        <div
          ref={overallContainerRef}
          className={css({
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            justifyContent: 'start',
            alignItems: 'center',
          })}
        >
          <h1
            className={css({
              mb: 5,
              mt: 1,
              fontSize: { base: '2rem', md: '4rem' },
              color: 'brand.darkBrown',
              fontWeight: 'bold',
              zIndex: 10,
              flexGrow: 0,
              backgroundColor: 'brand.cream',
              borderColor: 'brand.darkBrown',
              borderWidth: '2px',
              padding: 2,
            })}
          >
            Workshop
          </h1>
          <div className={css({ p: 4, width: '100%', height: '100%' })}>
            <div
              ref={canvasContainerRef}
              className={css({
                width: '100%',
                maxW: '5xl',
                mx: 'auto',
                borderStyle: 'transparent',
                borderColor: 'transparent',
                height: '100%',
                flexGrow: 1,
                position: 'relative',
                zIndex: 1,
              })}
            >
              <div
                className={css({
                  maxWidth: '2xl',
                  width: '70vw',
                  marginX: 'auto',
                })}
              >
                <PostCard image={WorkshopImages.shedLayout} />
              </div>
              {scrollSections.map((c, index) => {
                const length = scrollSections.length;
                const start = index / length;
                const end = (index + 1) / length;
                return (
                  <ScrollSectionCard
                    key={index}
                    scrollRef={scrollRef}
                    xPosition={c.xPosition}
                    yPosition={c.yPosition}
                    direction={c.direction}
                    scrollLimit={{ start, end }}
                    containerWidth={canvasContainerWidth}
                    containerHeight={canvasContainerHeight}
                    imageAspect={c.imageAspect}
                    outerHeight={overallContainerHeight}
                    outerWidth={overallContainerWidth}
                  >
                    <div
                      style={{
                        transform: `rotate(${rotationToDegrees(c.rotation ?? 'None')}deg)`,
                        zIndex: index,
                      }}
                      className={css({
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      })}
                    >
                      <PostCard image={c.image} />
                    </div>
                  </ScrollSectionCard>
                );
              })}
            </div>
          </div>
        </div>
      </ViewportDiv>
    </>
  );
}
