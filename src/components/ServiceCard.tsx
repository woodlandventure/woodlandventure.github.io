import { Link } from '@tanstack/react-router'
import { css } from '../../styled-system/css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

interface ServiceCardProps {
  title: string
  description: string
  image: "childRope" | "parachute" | "itServices" | "sanctuary"
  linkTo: string
  imagePosition?: string
}

export function ServiceCard({ title, description, image, linkTo, imagePosition = 'center' }: ServiceCardProps) {
  return (
    <Link to={linkTo}>
      <div className={css({
        width: {base: "100%", md: "4xl"},
        height: { base: '100%', md: '12rem' },
        maxW: {base: "30rem", md: "4xl"},
        display: "flex",
        flexDirection: { base: "column", md: "row" },
        bg: 'white',
        rounded: 'lg',
        overflow: 'hidden',
        shadow: 'md',
        transition: 'transform 0.2s',
        mb: "10",
        _hover: { transform: 'translateY(-4px)' },
        bgColor: "gray.100",
        color: "brand.darkBrown"
      })}>
        <div className={css({
          w: { base: '100%', md: '15rem' },
          h: { base: "15rem", md: '15rem' },
          flexGrow: 0,
          flexShrink: 0,
          overflow: 'hidden',
          bg: image === "childRope" ? 
            "url(/img/Woodland_Venture_Child_Rope_Activity.jpg)":
            image === "parachute" ? "url(/img/projects/Forest_School_Woodland_Parachute.JPG)" :
            image === "sanctuary" ? "url(/img/projects/Forest_School_Woodland_Sanctuary_After.JPG)" :
            "url(/img/pexels-brett-sayles-2881224.jpg)",
          bgSize: 'cover',
          backgroundPosition: imagePosition,
        })} />
        <div className={css({ p: '6', display: 'flex', flexDirection: 'column', flex: 1 })}>
          <h3 className={css({
            fontSize: { base: 'xl', md: '4xl' },
            fontWeight: 'bold',
            mb: '4'
          })}>
            {title}
          </h3>
          <p className={css({
            color: 'brand.darkBrown',
            mb: '4',
            fontSize: { base: 'md', md: 'xl' }
          })}>
            {description}
          </p>
        </div>
        <div className={css({
          alignItems: 'center',
          justifyContent: 'center',
          p: { base: 8, md: 16 },
          color: 'brand.darkBrown',
          fontSize: { base: 'xl', md: '2xl' },
          display: { base: 'none', md: 'flex' }
        })}>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
    </Link>
  )
} 