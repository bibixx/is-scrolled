import ResizeObserver from "resize-observer-polyfill";

export const setupListeners = ({
  $container,
  $content,
  onScroll,
  onResize,
}) => {
  $container.addEventListener("scroll", onScroll);

  const observer = new ResizeObserver(() => {
    onResize();
    onScroll();
  });

  observer.observe($container);
  observer.observe($content);

  return { observer };
};

export const cleanupListeners = ({
  $container,
  onScroll,
  observer,
}) => {
  $container.removeEventListener("scroll", onScroll);
  observer.disconnect();
};
