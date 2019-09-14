import { useRef, useEffect, useState } from "react";

import onScrollFn from "../utils/onScroll";
import onResizeFn from "../utils/onResize";

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
    Y: false,
  });

  useEffect(() => {
    const { current: $container } = containerRef;
    const { current: $content } = contentRef;

    const onScroll = () => setScrolledTo(onScrollFn($container, $content));
    const onResize = () => setIsScrollable(onResizeFn($container, $content));

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
