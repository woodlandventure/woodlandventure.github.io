export const optimizeImage = ({
  image,
  desiredHeight,
  desiredWidth,
}: {
  image: string;
  desiredHeight?: number;
  desiredWidth?: number;
}) => {
  if (import.meta.env.DEV) {
    return image;
  }

  // Round down to the nearest 10 so that different devices can share images which
  // helps because:
  // 1. It reduces the cost (billing limits are based on number of transformations)
  // 2. It reduces latency as we don't need to wait for tranformation if a similar
  //    size image is available.
  const roundedDownHeight = desiredHeight ? Math.floor(desiredHeight / 10) * 10 : undefined;
  const roundedDownWidth = desiredWidth ? Math.floor(desiredWidth / 10) * 10 : undefined;
  let url = `/cdn-cgi/image/`;
  if (roundedDownHeight) {
    url += `,height=${roundedDownHeight}`;
  }
  if (roundedDownWidth) {
    url += `,width=${roundedDownWidth}`;
  }
  if (roundedDownHeight && roundedDownWidth) {
    url += `,fit=crop`;
  }
  return `${url}${image}`;
};
