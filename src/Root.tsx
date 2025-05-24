import { Link, Outlet, useMatchRoute } from '@tanstack/react-router';
import { css } from '../styled-system/css';
import { useState } from 'react';
import { NavItem } from './components/NavItem';

import logo from './assets/img/Logo_Cream.png';
import facebook from './assets/img/facebook.png';
import instagram from './assets/img/Instagram_Logo.png';
import fsa from './assets/img/fsa.jpg';
import { navBarHeight } from './components/navBarHeight';
import navBarRef from './components/navBarRef';

const navItems = [
  {
    label: 'Services',
    dropdownItems: [
      { label: 'Schools', href: '/schools' },
      { label: 'Outdoor spaces', href: '/projects' },
      { label: 'IT services', href: '/' },
    ],
  },
  {
    label: 'Projects',
    dropdownItems: [
      { label: 'All projects', href: '/projects' },
      { label: 'The Sanctuary', href: '/sanctuary' },
      { label: 'Garden Ideas', href: '/garden-ideas' },
      { label: 'Garden Sofas', href: '/garden-sofas' },
      { label: 'Outdoor Shelters', href: '/shelters' },
      { label: 'The Workshop', href: '/workshop' },
    ],
  },
  { label: 'Contact', href: '/contact' },
  { label: 'About', href: '/about' },
];

const pagesWithNoFooter = [
  '/workshop' as const,
  '/sanctuary' as const,
  '/shelter' as const,
  '/composting-toilet' as const,
  '/cosy-bench' as const,
  '/decking' as const,
  '/garden-ideas' as const,
  '/garden-sofas' as const,
  '/shelters' as const,
];

export function Root() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const matchRoute = useMatchRoute();
  const shouldHideFooter = pagesWithNoFooter.some((page) =>
    matchRoute({
      to: page,
    }),
  );

  return (
    <div
      className={css({
        position: 'relative',
        width: '100%',
        display: 'flex',
        flexDir: 'column',
        minHeight: '100vh',
      })}
    >
      <nav
        ref={navBarRef}
        className={css({
          bg: 'brand.darkGreen',
          py: '2',
          px: '4',
          width: '100%',
          borderBottom: '1px solid',
          borderColor: 'brand.darkGreen',
          position: 'sticky',
          top: 0,
          zIndex: 10,
          height: navBarHeight,
        })}
      >
        <div
          className={css({
            ml: { base: 0, md: 16 },
            mr: { base: 0, md: 16 },
            mx: 'auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          })}
        >
          <Link
            to="/"
            hash="root"
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '2',
            })}
            onClick={() => setIsMenuOpen(false)}
          >
            <img
              src={logo}
              alt="Woodland Venture Logo"
              className={css({
                h: '20',
                w: 'auto',
                flexShrink: 0,
                flexGrow: 0,
              })}
            />
          </Link>

          {/* Mobile menu button */}
          <button
            name="menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={css({
              display: { base: 'block', lg: 'none' },
              p: '2',
            })}
          >
            <div
              className={css({
                w: '6',
                h: '0.5',
                bg: 'brand.cream',
                mb: '1',
              })}
            />
            <div
              className={css({
                w: '6',
                h: '0.5',
                bg: 'brand.cream',
                mb: '1',
              })}
            />
            <div
              className={css({
                w: '6',
                h: '0.5',
                bg: 'brand.cream',
              })}
            />
          </button>

          {/* Desktop Navigation */}
          <div
            className={css({
              display: { base: isMenuOpen ? 'flex' : 'none', lg: 'flex' },
              flexDir: { base: 'column', lg: 'row' },
              gap: { base: '4', lg: '6' },
              alignItems: { base: 'flex-start', lg: 'center' },
              position: { base: 'absolute', lg: 'static' },
              top: { base: '100%', lg: 'auto' },
              left: { base: '0', lg: 'auto' },
              right: { base: '0', lg: 'auto' },
              bg: { base: 'brand.cream', lg: 'transparent' },
              p: { base: '4', lg: '0' },
              borderBottom: { base: '1px solid', lg: 'none' },
              borderColor: {
                base: 'brand.darkBrown',
                lg: 'transparent',
              },
            })}
          >
            {navItems.map((item) => (
              <NavItem
                key={item.label}
                label={item.label}
                href={item.href}
                dropdownItems={item.dropdownItems}
                closeMenu={() => setIsMenuOpen(false)}
              />
            ))}

            <a
              href="mailto:info@woodlandventure.co.uk"
              className={css({
                color: { base: 'brand.darkBrown', lg: 'brand.cream' },
                _hover: {
                  borderBottom: '2px solid',
                },
                display: 'block',
              })}
            >
              Email: info@woodlandventure.co.uk
            </a>
          </div>
        </div>
      </nav>

      <main className={css({ flex: 1, w: 'full' })}>
        <Outlet />
      </main>

      {!shouldHideFooter && (
        <footer
          className={css({
            bg: 'white',
            py: '6',
            px: '4',
            borderTop: '1px solid',
            borderColor: 'gray.200',
          })}
        >
          <div
            className={css({
              maxW: '7xl',
              mx: 'auto',
              display: 'flex',
              flexDir: { base: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '6',
            })}
          >
            <a
              href="http://www.forestschoolassociation.org/"
              target="_blank"
              rel="noopener noreferrer"
              className={css({
                display: 'block',
              })}
            >
              <img
                src={fsa}
                alt="Forest School Association"
                className={css({
                  h: '12',
                  w: 'auto',
                })}
              />
            </a>

            <div
              className={css({
                display: 'flex',
                gap: '4',
                alignItems: 'center',
              })}
            >
              <a
                href="https://www.facebook.com/woodlandventure/"
                target="_blank"
                rel="noopener noreferrer"
                className={css({
                  display: 'block',
                })}
              >
                <img
                  src={facebook}
                  alt="Facebook"
                  className={css({
                    h: '10',
                    w: '10',
                  })}
                />
              </a>
              <a
                href="https://www.instagram.com/woodlandventure"
                target="_blank"
                rel="noopener noreferrer"
                className={css({
                  display: 'block',
                })}
              >
                <img
                  src={instagram}
                  alt="Instagram"
                  className={css({
                    h: '10',
                    w: '10',
                  })}
                />
              </a>
            </div>

            <div
              className={css({
                color: 'gray.600',
                fontSize: 'sm',
              })}
            >
              Website developed by{' '}
              <a
                href="https://www.linkedin.com/in/charlie-crisp-88aab5122/"
                target="_blank"
                rel="noopener noreferrer"
                className={css({
                  color: 'blue.600',
                  _hover: { color: 'blue.700' },
                })}
              >
                Charlie Crisp
              </a>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
