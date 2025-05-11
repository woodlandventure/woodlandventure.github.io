import { useNavigate } from "@tanstack/react-router";
import { css } from "../../styled-system/css";
import { motion } from "framer-motion";

export interface PostCardProps {
  position: Position;
  rotation: Rotation;
  image: PostCardImage;
  link?: string;
}

type PostCardImage = "firePit" | "childRope" | "gardenSeating" | "family" | "beehiveShelter" | "shedDesign";

type Rotation = "LittleClockwise" | "LittleCounterClockwise" | "None";

type Position = "topLeft" | "bottomRight" | "middle" | "topRight" | "bottomLeft";

export function PostCard({
  position,
  rotation,
  image,
  link,
}: PostCardProps) {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{
        scale: 1,
        rotate: rotation === "LittleClockwise" ? -3 : rotation === "LittleCounterClockwise" ? 3 : 0,
      }}
      whileHover={{
        scale: 1.05,
        rotate: rotation === "LittleClockwise" ? 0 : rotation === "LittleCounterClockwise" ? 0 : 3,
      }}
      animate={{
        scale: 1,
        rotate: rotation === "LittleClockwise" ? -3 : rotation === "LittleCounterClockwise" ? 3 : 0,
      }}
      onClick={() => {
        if (link) {
          navigate({ to: link });
        }
      }}
      className={css({
        cursor: link ? "pointer" : "default",
        position: {
          lg: "absolute",
        },
        w: "300px",
        h: "230px",
        top: {
          lg: position === "topLeft" || position === "topRight" ? 5 : undefined,
        },
        left: {
          lg: position === "topLeft" || position === "bottomLeft" ? 5 : undefined,
        },
        bottom: {
          lg: position === "bottomRight" || position === "bottomLeft" ? 5 : undefined,
        },
        right: {
          lg: position === "bottomRight" || position === "topRight" ? 5 : undefined,
        },
        bg: "white",
        bgSize: "cover",
        bgPosition: "center",
        shadow: "xl",
        shadowColor: "gray.800",
        overflow: "hidden",
      })}
    >
      <div
        className={css({
          bg:
            image === "firePit"
              ? "url(/img/Woodland_Venture_Fire_Pit.jpg)"
              : image === "childRope"
                ? "url(/img/Woodland_Venture_Child_Rope_Activity.jpg)"
                : image === "gardenSeating"
                  ? "url(/img/projects/Woodland_Venture_Garden_Seating.jpg)"
                  : image === "beehiveShelter"
                    ? "url(/img/projects/Woodland_Venture_Beehive_Shelter.jpg)"
                    : image === "shedDesign"
                      ? "url(/img/projects/Woodland_Venture_Shed_Design.png)"
                      : "url(/img/Woodland_Venture_Family_Toast_Marshmallows.jpg)",
          bgSize: "cover",
          border: "5px solid white",
          height: "100%",
          width: "100%",
        })}
      />
    </motion.div>
  );
}
