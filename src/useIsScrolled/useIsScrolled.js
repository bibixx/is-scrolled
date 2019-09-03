import { useRef, useEffect, useState } from "react";
import ResizeObserver from "resize-observer-polyfill";

import onScrollFn from "../utils/onScroll";

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

    const onScroll = () => onScrollFn(setScrolledTo)($container, $content);

    if (!$container) {
      return () => {};
    }

    $container.addEventListener("scroll", onScroll);
    onScroll();

    const observer = new ResizeObserver(() => {
      setIsScrollable({
        x: $container.offsetWidth < $content.offsetWidth,
        y: $container.offsetHeight < $content.offsetHeight,
      });
      onScroll();
    });

    observer.observe($container);
    observer.observe($content);

    return () => {
      $container.removeEventListener("scroll", onScroll);
      observer.disconnect();
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
