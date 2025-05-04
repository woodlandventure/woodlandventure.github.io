import { css } from "../../styled-system/css";

interface PostCardProps {
  position: Position;
  rotation: Rotation;
  image: PostCardImage;
}

type PostCardImage = "firePit" | "childRope" | "gardenSeating" | "family" | "beehiveShelter" | "shedDesign";

type Rotation = "LittleClockwise" | "LittleCounterClockwise" | "None";

type Position = "topLeft" | "bottomRight" | "middle" | "topRight" | "bottomLeft";

export function PostCard({
  position,
  rotation,
  image,
}: PostCardProps) {
  return (
    <div
      className={css({
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
    </div>
  );
}
