import { css } from '../../../styled-system/css';
import { useRef } from 'react';
// import { motion, useScroll, useTransform } from "framer-motion";
import { navBarHeight } from '../../components/navBarHeight';

// const Card = ({
//   position,
//   scrollLimit,
// }: {
//   position: {
//     top?: number;
//     right?: number;
//     left?: number;
//     bottom?: number;
//   };
//   scrollLimit: {
//     start: number;
//     end: number;
//   };
// }) => {
//   const { scrollYProgress } = useScroll();
//   const top = useTransform(
//     scrollYProgress,
//     [scrollLimit.start, scrollLimit.end],
//     [-400, position.top ?? 0]
//   );
//   const right = useTransform(
//     scrollYProgress,
//     [scrollLimit.start, scrollLimit.end],
//     [-400, position.right ?? 0]
//   );
//   const left = useTransform(
//     scrollYProgress,
//     [scrollLimit.start, scrollLimit.end],
//     [-400, position.left ?? 0]
//   );
//   const bottom = useTransform(
//     scrollYProgress,
//     [scrollLimit.start, scrollLimit.end],
//     [-400, position.bottom ?? 0]
//   );
//   return (
//     <motion.div
//       style={{
//         top: position.top ? top : undefined,
//         right: position.right ? right : undefined,
//         left: position.left ? left : undefined,
//         bottom: position.bottom ? bottom : undefined,
//       }}
//       className={css({
//         backgroundColor: "brand.cream",
//         border: "1px solid",
//         borderColor: "brand.darkGreen",
//         width: 400,
//         height: 400,
//         borderRadius: "md",
//         padding: "2",
//         color: "brand.cream",
//         position: "absolute",
//       })}
//     >
//       <h1>Workshop</h1>
//     </motion.div>
//   );
// };

const ScrollCard = () => (
  <div
    className={css({
      height: '80vh',
      flexShrink: 0,
      backgroundColor: 'white',
      mb: 10,
      width: 400,
      scrollSnapAlign: 'start',
    })}
  ></div>
);

export function Workshop2() {
  const scrollRef = useRef(null);

  return (
    <>
      <div
        ref={scrollRef}
        className={css({
          bg: 'brand.darkGreen',
          display: 'flex',
          flexDir: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          pt: { base: '16', md: '32' },
          scrollSnapAlign: 'start',
          scrollSnapType: 'y mandatory',
          overflowY: 'scroll',
          height: `calc(100vh - ${navBarHeight}))`,
          mt: navBarHeight,
        })}
      >
        <ScrollCard />
        <ScrollCard />
        <ScrollCard />
        <ScrollCard />
      </div>
      {/* <div
        className={css({
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          width: "100%",
          height: "100%",
        })}
      >
        <Card position={{ top: 100, right: 100 }} scrollLimit={{ start: 0, end: 0.2 }} />
        <Card position={{ top: 100, left: 100 }} scrollLimit={{ start: 0.3, end: 0.5 }} />
        <Card position={{ bottom: 100, right: 100 }} scrollLimit={{ start: 0.6, end: 0.8 }} />
      </div> */}
    </>
  );
}
