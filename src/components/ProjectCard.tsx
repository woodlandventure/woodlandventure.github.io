import { css } from "../../styled-system/css";
import { Link } from "@tanstack/react-router";

interface ProjectCardProps {
  image: string;
  alt: string;
  title: string;
  linkTo?: string;
}

export function ProjectCard({ image, alt, title, linkTo }: ProjectCardProps) {
  const card = (
    <div
      className={css({
        bg: "white",
        rounded: "md",
        overflow: "hidden",
        shadow: "md",
        transition: "transform 0.2s",
        _hover: { transform: linkTo ? "translateY(-4px)" : undefined },
      })}
    >
      <img
        src={image}
        alt={alt}
        className={css({
          w: "full",
          h: "250px",
          objectFit: "cover",
          borderBottomColor: "brand.darkBrown",
          borderBottomWidth: "4px",
          borderBottomStyle: "solid",
        })}
      />
      <div className={css({ p: "6" })}>
        <h3
          className={css({
            fontSize: "xl",
            fontWeight: "bold",
            mb: "2",
          })}
        >
          {title}
        </h3>
      </div>
    </div>
  );

  return linkTo ? <Link to={linkTo}>{card}</Link> : card;
}
