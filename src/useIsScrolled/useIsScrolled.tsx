import { useRef, useEffect, useState } from "react";

import getScrollBounds from "../utils/getScrollBounds";
import isContentScrollable from "../utils/isContentScrollable";

import { setupListeners, cleanupListeners } from "../utils/listeners";

const useIsScrolled = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [isScrolledTo, setScrolledTo] = useState({
    left: true,
    top: true,
    right: false,
    bottom: false,
  });
  const [isScrollable, setIsScrollable] = useState({
    x: false,
    y: false,
  });

  useEffect(() => {
    const { current: $container } = containerRef;
    const { current: $content } = contentRef;

    const onScroll = () => setScrolledTo(getScrollBounds($container, $content));
    const onResize = () => setIsScrollable(isContentScrollable($container, $content));

    const { observer } = setupListeners({
      $container,
      $content,
      onScroll,
      onResize,
    });

    return () => {
      cleanupListeners({
        $container,
        onScroll,
        observer,
      });
    };
  }, [containerRef, contentRef]);

  return {
    containerRef,
    contentRef,
    isScrolledTo,
    isScrollable,
  };
};

export default useIsScrolled;
