import { PostCardImage, Rotation } from '../../components/PostCard';
import { css } from '../../../styled-system/css';
import { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PostCard, rotationToDegrees } from '../../components/PostCard';
import navBarRef from '../../components/navBarRef';
import { thickBrownBorder } from '../../components/border';

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
  const widthLimit = Math.min(800, containerWidth - 20);
  const heightLimit = Math.min(400, containerHeight - 20);
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
  children,
}: {
  containerHeight: string;
  children: React.ReactNode;
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
    {children}
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
const ViewportDiv = ({
  children,
  viewportRef,
}: {
  children: React.ReactNode;
  viewportRef: RefObject<HTMLDivElement>;
}) => (
  <div
    ref={viewportRef}
    className={css({
      flexGrow: 1,
      flexShrink: 1,
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1,
      backgroundColor: 'brand.darkGreen',
      position: 'relative',
      overflowY: 'scroll',
    })}
  >
    {children}
  </div>
);

const ScrollSpacing = ({
  length,
  scrollRef,
  containerHeight,
  finalDescription,
}: {
  length: number;
  scrollRef: RefObject<HTMLDivElement>;
  containerHeight: string;
  finalDescription: React.ReactElement;
}) => (
  <div
    ref={scrollRef}
    style={{ height: containerHeight }}
    className={css({
      position: 'absolute',
      top: 0,
      width: '100%',
      display: 'flex',
      flexDir: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      scrollSnapType: 'y mandatory',
      overflowY: 'scroll',
      zIndex: 10,
    })}
  >
    {Array.from({ length }).map((_, index) => (
      <ScrollSpacingPage key={index} containerHeight={containerHeight}>
        {index === 0 && <FloatingScrollHint />}
      </ScrollSpacingPage>
    ))}
    <ScrollSpacingPage containerHeight={containerHeight}>
      <div
        className={css({
          height: 'fit-content',
          backgroundColor: 'brand.cream',
          ...thickBrownBorder,
          textAlign: 'center',
          color: 'brand.darkBrown',
          fontSize: { base: 'md', md: 'xl', lg: '2xl' },
          width: { base: 'sm', md: 'xl' },
          mt: { base: 5, md: 10 },
          p: 10,
        })}
      >
        {finalDescription}
      </div>
    </ScrollSpacingPage>
  </div>
);

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
  }, [setHeight, ref.current]);

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
  const scrollRef = useRef(null);
  const {
    containerHeight: canvasContainerHeight,
    containerWidth: canvasContainerWidth,
    containerRef: canvasContainerRef,
  } = useContainerDims();

  const { height: navBarHeight } = useElementDims(navBarRef);
  const { containerRef: viewportRef, containerHeight: viewportHeight } = useContainerDims();
  const {
    containerHeight: overallContainerHeight,
    containerRef: overallContainerRef,
    containerWidth: overallContainerWidth,
  } = useContainerDims();

  return (
    <div
      ref={overallContainerRef}
      style={{ height: `calc(100vh - ${navBarHeight + 1}px)` }}
      className={css({
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        backgroundColor: 'brand.darkGreen',
        position: 'relative',
        zIndex: 0,
      })}
    >
      <h1
        className={css({
          flexGrow: 0,
          flexShrink: 0,
          mb: { base: 3, md: 10 },
          mt: { base: 3, md: 2 },
          fontSize: { base: '2rem', md: '4rem' },
          color: 'brand.darkBrown',
          fontWeight: 'bold',
          zIndex: 10,
          backgroundColor: 'brand.cream',
          borderColor: 'brand.darkBrown',
          borderWidth: '2px',
          padding: 2,
          width: 'fit-content',
          mx: 'auto',
        })}
      >
        {name}
      </h1>
      <ViewportDiv viewportRef={viewportRef}>
        <ScrollSpacing
          length={scrollSections.length + 1}
          scrollRef={scrollRef}
          containerHeight={`${viewportHeight}px`}
          finalDescription={finalDescription}
        />
        <div
          className={css({
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            justifyContent: 'start',
            alignItems: 'center',
          })}
        >
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
                position: 'sticky',
                top: 10,
              })}
            >
              <PostCard image={baseImage} />
            </div>
            {scrollSections.map((c, index) => {
              const length = scrollSections.length + 1;
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
      </ViewportDiv>
    </div>
  );
};
