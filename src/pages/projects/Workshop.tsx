import { css } from '../../../styled-system/css';
import { shedLayout } from '../../assets/img/projects/Workshop';
import { useRef, useEffect, useState } from 'react';
import { navBarHeight } from '../../components/navBarHeight';

const Card = () => {
  return (
    <div
      className={css({
        backgroundColor: 'brand.darkBrown',
        width: 400,
        height: 400,
        borderRadius: 'md',
        padding: '2',
        color: 'brand.cream',
        position: 'sticky',
      })}
    >
      <h1>Workshop</h1>
    </div>
  );
};

export function Workshop() {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate image style based on scroll position
  const imageStyle = {
    transform: `translateY(${Math.min(scrollY * 0.5, 200)}px) scale(${1 + Math.min(scrollY, 400) / 2000})`,
    opacity: 1 - Math.min(scrollY / 800, 0.3),
    transition: 'transform 0.2s, opacity 0.2s',
  };

  return (
    <div
      ref={containerRef}
      className={css({
        minH: '400vh',
        bg: 'brand.darkGreen',
        display: 'flex',
        flexDir: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        pt: { base: '16', md: '32' },
      })}
    >
      <h1
        className={css({
          color: 'brand.cream',
          fontSize: { base: '3xl', md: '5xl' },
          fontWeight: 'bold',
          mb: '12',
          position: 'sticky',
          top: navBarHeight,
        })}
      >
        Workshop Project
      </h1>
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: 600,
          height: 400,
        }}
        className={css({ mb: '24' })}
      >
        <img
          src={shedLayout}
          alt="Shed Layout"
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            ...imageStyle,
          }}
        />
      </div>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
