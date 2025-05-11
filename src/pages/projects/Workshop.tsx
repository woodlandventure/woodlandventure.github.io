import { css } from '../../../styled-system/css';
import { RefObject, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { navBarHeight } from '../../components/navBarHeight';
import { PostCard, PostCardImage, Rotation, rotationToDegrees } from '../../components/PostCard';
import { shedLayout } from '../../assets/img/projects/Workshop';

type Position = {
  top?: number;
  right?: number;
  left?: number;
  bottom?: number;
};

const scrollSections: {
  position: Position;
  image: PostCardImage;
  rotation: Rotation;
}[] = [
  {
    position: {
      top: 100,
      right: 100,
    },
    image: 'firePit',
    rotation: 'LittleClockwise',
  },
  {
    position: {
      top: 100,
      left: 100,
    },
    image: 'childRope',
    rotation: 'LittleCounterClockwise',
  },
  {
    position: {
      bottom: 100,
      right: 100,
    },
    image: 'shedDesign',
    rotation: 'None',
  },
];

const ScrollSectionCard = ({
  position,
  children,
  scrollLimit,
  scrollRef,
}: {
  position: {
    top?: number;
    right?: number;
    left?: number;
    bottom?: number;
  };
  scrollLimit: {
    start: number;
    end: number;
  };
  scrollRef: RefObject<HTMLDivElement>;
  children: React.ReactNode;
}) => {
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const top = useTransform(
    scrollYProgress,
    [scrollLimit.start, scrollLimit.end],
    [-400, position.top ?? 0],
  );
  const right = useTransform(
    scrollYProgress,
    [scrollLimit.start, scrollLimit.end],
    [-400, position.right ?? 0],
  );
  const left = useTransform(
    scrollYProgress,
    [scrollLimit.start, scrollLimit.end],
    [-400, position.left ?? 0],
  );
  const bottom = useTransform(
    scrollYProgress,
    [scrollLimit.start, scrollLimit.end],
    [-400, position.bottom ?? 0],
  );
  return (
    <motion.div
      style={{
        top: position.top ? top : undefined,
        right: position.right ? right : undefined,
        left: position.left ? left : undefined,
        bottom: position.bottom ? bottom : undefined,
      }}
      className={css({
        width: 400,
        height: 400,
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

const ScrollSpacingPage = ({ containerHeight }: { containerHeight: string }) => (
  <div
    style={{ height: containerHeight }}
    className={css({
      flexShrink: 0,
      backgroundColor: 'transparent',
      scrollSnapAlign: 'start',
    })}
  ></div>
);

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
      <ScrollSpacingPage key={index} containerHeight={containerHeight} />
    ))}
  </div>
);

export function Workshop() {
  const scrollRef = useRef(null);

  const containerHeight = `${window.innerHeight - 94}px`;
  return (
    <>
      <ScrollSpacing
        length={scrollSections.length + 1}
        scrollRef={scrollRef}
        containerHeight={containerHeight}
      />
      <ViewportDiv>
        <div
          className={css({
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          })}
        >
          <h1
            className={css({
              mb: 10,
              fontSize: '4rem',
              color: 'brand.cream',
              fontWeight: 'bold',
              zIndex: 10,
              backgroundColor: 'brand.darkGreen',
              padding: 4,
              borderRadius: 'sm',
            })}
          >
            Workshop
          </h1>
          <div
            className={css({
              width: '70vh',
            })}
          >
            <PostCard image={shedLayout} />
          </div>
        </div>

        {scrollSections.map((c, index) => {
          const length = scrollSections.length;
          const start = index / length;
          const end = (index + 1) / length;
          return (
            <ScrollSectionCard
              key={index}
              scrollRef={scrollRef}
              position={c.position}
              scrollLimit={{ start, end }}
            >
              <motion.div
                animate={{
                  rotate: rotationToDegrees(c.rotation),
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
              </motion.div>
            </ScrollSectionCard>
          );
        })}
      </ViewportDiv>
    </>
  );
}
