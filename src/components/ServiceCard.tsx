import { Link } from '@tanstack/react-router'
import { css } from '../../styled-system/css'

interface ServiceCardProps {
  title: string
  description: string
  image: "childRope" | "parachute" | "itServices"
  linkTo: string
  imagePosition?: string
}

export function ServiceCard({ title, description, image, linkTo, imagePosition = 'center' }: ServiceCardProps) {
  return (
    <Link to={linkTo}>
      <div className={css({
        bg: 'white',
        rounded: 'lg',
        height: '100%',
        overflow: 'hidden',
        shadow: 'md',
        transition: 'transform 0.2s',
        _hover: { transform: 'translateY(-4px)' }
      })}>
        <div className={css({
          h: '250px',
          bg: image === "childRope" ? 
            "url(/img/Woodland_Venture_Child_Rope_Activity.jpg)":
            image === "parachute" ? "url(/img/projects/Forest_School_Woodland_Parachute.JPG)" :
            "url(/img/pexels-brett-sayles-2881224.jpg)",
          bgSize: 'cover',
          backgroundPosition: imagePosition
        })} />
        <div className={css({ p: '6' })}>
          <h3 className={css({
            fontSize: 'xl',
            fontWeight: 'bold',
            mb: '4'
          })}>
            {title}
          </h3>
          <p className={css({
            color: 'gray.600',
            mb: '4'
          })}>
            {description}
          </p>
        </div>
      </div>
    </Link>
  )
} 