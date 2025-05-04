import { css } from "../../styled-system/css";

interface PostCardProps {
  position: Position;
  rotation: Rotation;
  image: PostCardImage;
}

type PostCardImage = "firePit" | "childRope" | "parachute" | "sanctuary";

type Rotation = "LittleClockwise" | "LittleCounterClockwise" | "None";

type Position = "topLeft" | "bottomRight" | "middle";

export function PostCard({
  position,
  rotation,
  image,
}: PostCardProps) {
  return (
    <div
      className={css({
        position: "absolute",
        w: "300px",
        h: "200px",
        top: position === "topLeft" ? 10 : undefined,
        left: position === "topLeft" ? 0 : undefined,
        bottom: position === "bottomRight" ? 10 : undefined,
        right: position === "bottomRight" ? 0 : undefined,
        bg: "white",
        bgSize: "cover",
        bgPosition: "center",
        shadow: "xl",
        shadowColor: "gray.800",
        transform: rotation === "LittleClockwise" ? "rotate(-3deg)" : rotation === "LittleCounterClockwise" ? "rotate(3deg)" : "rotate(0deg)",
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
                : image === "parachute"
                  ? "url(/img/projects/Forest_School_Woodland_Parachute.JPG)"
                  : "url(/img/projects/Forest_School_Woodland_Sanctuary_After.JPG)",
          bgSize: "cover",
          border: "5px solid white",
          height: "100%",
          width: "100%",
        })}
      />
    </div>
  );
}
