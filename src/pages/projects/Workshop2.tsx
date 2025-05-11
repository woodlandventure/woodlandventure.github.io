import { css } from "../../../styled-system/css";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Card = () => {
  const { scrollYProgress } = useScroll();
  const fastProgress = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  return (
    <motion.div
      style={{
        top: 100,
        right: 100,
      }}
      className={css({
        backgroundColor: "brand.darkBrown",
        width: 400,
        height: 400,
        borderRadius: "md",
        padding: "2",
        color: "brand.cream",
        position: "sticky",
      })}
    >
      <h1>Workshop</h1>
    </motion.div>
  );
};

const Card2 = () => {
  const { scrollYProgress } = useScroll();
  const fastProgress = useTransform(scrollYProgress, [0.3, 0.7], [-400, 100]);
  return (
    <motion.div
      style={{
        top: fastProgress,
        right: 0,
      }}
      className={css({
        backgroundColor: "brand.cream",
        width: 400,
        height: 400,
        borderRadius: "md",
        padding: "2",
        color: "brand.cream",
        position: "absolute",
      })}
    >
      <h1>Workshop</h1>
    </motion.div>
  );
};

const ScrollCard = () => (
  <div
    className={css({
      height: "100vh",
      backgroundColor: "white",
      mb: 10,
      width: 100,
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
          bg: "brand.darkGreen",
          display: "flex",
          flexDir: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          pt: { base: "16", md: "32" },
          scrollSnapAlign: "start",
        })}
      >
        <ScrollCard />
        <ScrollCard />
        <ScrollCard />
        <ScrollCard />
      </div>
      <div
        className={css({
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          width: "100vw",
          height: "100vw",
        })}
      >
        {/* <Card/> */}
        <Card2 />
        {/* <div className={css({width: 10, height: 10, backgroundColor: "brand.green", position: "absolute", top: 100, left: 100})}/> */}
      </div>
    </>
  );
}
