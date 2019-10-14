import ResizeObserver from "resize-observer-polyfill";

export const setupListeners = ({
  $container,
  $content,
  onScroll,
  onResize,
} : {
  $container: HTMLElement,
  $content: HTMLElement,
  onScroll: () => any,
  onResize: () => any,
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
} : {
  $container: HTMLElement,
  onScroll: () => any,
  observer: ResizeObserver,
}) => {
  $container.removeEventListener("scroll", onScroll);
  observer.disconnect();
};
