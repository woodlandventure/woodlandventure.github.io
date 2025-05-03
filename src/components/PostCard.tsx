import { css } from '../../styled-system/css'

interface PostCardProps {
  top?: number
  left?: number
  bottom?: number
  right?: number
  rotation: number
  zIndex: number
  image: string
}

export function PostCard({ top, left, bottom, right, rotation, zIndex, image }: PostCardProps) {
  return (
    <div className={css({
      position: 'absolute',
      w: '300px',
      h: '200px',
      top,
      left,
      bottom,
      right,
      bg: 'white',
      bgSize: 'cover',
      bgPosition: 'center',
      shadow: 'xl',
      transform: `rotate(${rotation}deg)`,
      zIndex,
      overflow: "hidden",
    })}>
      <div className={css({
        bg: `url(${image})`,
        bgSize: "cover",
        border: "5px solid white",
        height: "100%",
        width: "100%",
      })} />
    </div>
  )
} 