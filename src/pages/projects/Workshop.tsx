import { css } from '../../../styled-system/css';
import { RefObject, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { navBarHeight } from '../../components/navBarHeight';
import { PostCard, PostCardImage, Rotation, rotationToDegrees } from '../../components/PostCard';
import * as WorkshopImages from '../../assets/img/projects/Workshop';

type Position = {
  top?: number;
  right?: number;
  left?: number;
  bottom?: number;
};

const scrollSections: {
  position?: Position;
  image: PostCardImage;
  rotation?: Rotation;
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
    position: {
      top: 1,
      left: 20,
    },
    rotation: 'LittleCounterClockwise',
  },
  {
    image: WorkshopImages.threeDCutAwayLocationSm,
    position: {
      bottom: 1,
      right: 20,
    },
  },
  {
    image: WorkshopImages.RealBaseSm,
    position: {
      bottom: 20,
      left: 1,
    },
    rotation: 'LittleClockwise',
  },
  {
    image: WorkshopImages.RealWallsSm,
    position: {
      top: 20,
      right: 1,
    },
    rotation: 'LittleCounterClockwise',
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
    position: {
      bottom: 100,
      right: 100,
    },
  },
];

const ScrollSectionCard = ({
  position = {
    top: 100,
    right: 100,
  },
  children,
  scrollLimit,
  scrollRef,
}: {
  position?: Position;
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
    [-1000, position.top ?? 0],
  );
  const right = useTransform(
    scrollYProgress,
    [scrollLimit.start, scrollLimit.end],
    [-1000, position.right ?? 0],
  );
  const left = useTransform(
    scrollYProgress,
    [scrollLimit.start, scrollLimit.end],
    [-1000, position.left ?? 0],
  );
  const bottom = useTransform(
    scrollYProgress,
    [scrollLimit.start, scrollLimit.end],
    [-1000, position.bottom ?? 0],
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
      backgroundColor: 'transparent',
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
            justifyContent: 'start',
            alignItems: 'center',
          })}
        >
          <h1
            className={css({
              mb: 5,
              mt: 1,
              fontSize: '4rem',
              color: 'brand.darkBrown',
              fontWeight: 'bold',
              zIndex: 10,
              flexGrow: 0,
              backgroundColor: 'brand.cream',
              borderColor: 'brand.darkBrown',
              borderWidth: '2px',
              padding: 1,
            })}
          >
            Workshop
          </h1>
          <div
            className={css({
              width: '100%',
              height: '100%',
              flexGrow: 1,
              position: 'relative',
            })}
          >
            <div
              className={css({
                maxWidth: '2xl',
                width: '70vw',
                borderColor: 'brand.darkBrown',
                borderWidth: '2px',
                borderStyle: 'solid',
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
                  position={c.position}
                  scrollLimit={{ start, end }}
                >
                  <div
                    // animate={{
                    //   rotate: rotationToDegrees(c.rotation ?? 'None'),
                    // }}
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
    </>
  );
}
