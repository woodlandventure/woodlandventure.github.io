import { useEffect, RefObject, useState, useCallback, useRef } from 'react';

export const useEventListener = (event: string, listener: () => void, useCapture?: boolean) => {
  useEffect(() => {
    listener();
    window.addEventListener(event, listener, useCapture);

    return () => window.removeEventListener(event, listener, useCapture);
  }, [event, listener, useCapture]);
};

export const useElementDims = (ref: RefObject<HTMLDivElement>) => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const resize = useCallback(() => {
    const height = ref.current?.clientHeight;
    if (height) {
      setHeight(height);
    }
    const width = ref.current?.clientWidth;
    if (width) {
      setWidth(width);
    }
  }, [ref]);

  useEventListener('resize', resize);

  return { width, height };
};

export const useContainerDims = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { width: containerWidth, height: containerHeight } = useElementDims(containerRef);
  return {
    containerRef,
    containerWidth,
    containerHeight,
  };
};
