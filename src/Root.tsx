import { Link, Outlet, useMatchRoute } from '@tanstack/react-router'
import { css } from '../styled-system/css'
import { useState } from 'react'
import { NavItem } from './components/NavItem'

import logo from './assets/img/Logo_Cream.png'
import facebook from './assets/img/facebook.png'
import instagram from './assets/img/Instagram_Logo.png'
import fsa from './assets/img/fsa.jpg'

const navItems = [
  {
    label: 'Services',
    dropdownItems: [
      { label: 'Schools', href: '/schools' },
      { label: 'Outdoor spaces', href: '/projects' },
      { label: 'IT services', href: '/' }
    ]
  },
  {
    label: 'Projects',
    dropdownItems: [
      { label: 'All projects', href: '/projects' },
      { label: 'Shelter project', href: '/projects/shelter' },
      { label: 'The Sanctuary', href: '/projects/sanctuary' }
    ]
  },
  { label: 'Contact', href: '/contact' },
  { label: 'About', href: '/about' }
]

export function Root() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const matchRoute = useMatchRoute()
  const isHome = Boolean(matchRoute({ to: '/' }))

  return (
    <div className={css({ minH: '100vh', display: 'flex', flexDir: 'column' })}>
      <nav className={css({ 
        bg: isHome ? 'brand.darkGreen' : "white", 
        py: '2',
        px: '4',
        borderBottom: '1px solid', 
        borderColor: isHome ? "brand.darkGreen" : 'gray.200',
        position: 'sticky',
        top: 0,
        zIndex: 10
      })}>
        <div className={css({
          ml: 16,
          mr: 16,
          mx: 'auto', 
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        })}>
          <Link to="/" className={css({ 
            display: 'flex',
            alignItems: 'center',
            gap: '2'
          })}>
            <img 
              src={logo}
              alt="Woodland Venture Logo" 
              className={css({ 
                h: '20',
                w: 'auto'
              })}
            />
          </Link>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={css({ 
              display: { base: 'block', md: 'none' },
              p: '2'
            })}
          >
            <div className={css({ 
              w: '6',
              h: '0.5',
              bg: 'gray.600',
              mb: '1'
            })} />
            <div className={css({ 
              w: '6',
              h: '0.5',
              bg: 'gray.600',
              mb: '1'
            })} />
            <div className={css({ 
              w: '6',
              h: '0.5',
              bg: 'gray.600'
            })} />
          </button>

          {/* Desktop Navigation */}
          <div className={css({ 
            display: { base: isMenuOpen ? 'flex' : 'none', md: 'flex' },
            flexDir: { base: 'column', md: 'row' },
            gap: { base: '4', md: '6' },
            alignItems: 'center',
            position: { base: 'absolute', md: 'static' },
            top: { base: '100%', md: 'auto' },
            left: { base: '0', md: 'auto' },
            right: { base: '0', md: 'auto' },
            bg: { base: 'white', md: 'transparent' },
            p: { base: '4', md: '0' },
            borderBottom: { base: '1px solid', md: 'none' },
            borderColor: { base: isHome ? "brand.cream" : 'gray.200', md: 'transparent' }
          })}>
            {navItems.map((item) => (
              <NavItem
                key={item.label}
                label={item.label}
                href={item.href}
                isHome={isHome}
                dropdownItems={item.dropdownItems}
              />
            ))}

            <a 
              href="mailto:info@woodlandventure.co.uk"
              className={css({ 
                color: isHome ? "brand.cream" : 'gray.600',
                _hover: { color: 'gray.900' },
                display: { base: 'block', lg: 'block' }
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

      <footer className={css({ 
        bg: 'white', 
        py: '6',
        px: '4',
        borderTop: '1px solid', 
        borderColor: 'gray.200' 
      })}>
        <div className={css({ 
          maxW: '7xl', 
          mx: 'auto',
          display: 'flex',
          flexDir: { base: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '6'
        })}>
          <a 
            href="http://www.forestschoolassociation.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={css({
              display: 'block'
            })}
          >
            <img 
              src={fsa} 
              alt="Forest School Association"
              className={css({
                h: '12',
                w: 'auto'
              })}
            />
          </a>

          <div className={css({ 
            display: 'flex',
            gap: '4',
            alignItems: 'center'
          })}>
            <a 
              href="https://www.facebook.com/woodlandventure/" 
              target="_blank"
              rel="noopener noreferrer"
              className={css({
                display: 'block'
              })}
            >
              <img 
                src={facebook} 
                alt="Facebook"
                className={css({
                  h: '10',
                  w: '10'
                })}
              />
            </a>
            <a 
              href="https://www.instagram.com/woodlandventure" 
              target="_blank"
              rel="noopener noreferrer"
              className={css({
                display: 'block'
              })}
            >
              <img 
                src={instagram} 
                alt="Instagram"
                className={css({
                  h: '10',
                  w: '10'
                })}
              />
            </a>
          </div>

          <div className={css({ 
            color: 'gray.600',
            fontSize: 'sm'
          })}>
            Website developed by{' '}
            <a 
              href="https://www.linkedin.com/in/charlie-crisp-88aab5122/"
              target="_blank"
              rel="noopener noreferrer"
              className={css({
                color: 'blue.600',
                _hover: { color: 'blue.700' }
              })}
            >
              Charlie Crisp
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
} 