type scrollEdge = "Top"|"Left";
type sizeDimension = "Width"|"Height";

// eslint-disable-next-line consistent-return
const isScrolledToCloserEdge = (scrollEdge: scrollEdge) => ($container: HTMLElement) => {
  switch (scrollEdge) {
    case "Top": {
      return $container.scrollTop <= 0;
    }
    case "Left": {
      return $container.scrollLeft <= 0;
    }
  }
};

const isScrolledToFartherEdge = (
  scrollEdge: scrollEdge,
  sizeDimension: sizeDimension,
) => (
  $container: HTMLElement,
  $scroll: HTMLElement,
) => {
  const scrollDimension = sizeDimension === "Width" ? $scroll.offsetWidth : $scroll.offsetHeight;
  const containerDimension = sizeDimension === "Width" ? $container.offsetWidth : $container.offsetHeight;
  const distanceFromEdge = scrollEdge === "Top" ? $container.scrollTop : $container.scrollLeft;

  return (scrollDimension - containerDimension - distanceFromEdge) <= 0;
};

export const isScrolledToLeft = isScrolledToCloserEdge("Left");

export const isScrolledToTop = isScrolledToCloserEdge("Top");

export const isScrolledToRight = isScrolledToFartherEdge("Left", "Width");

export const isScrolledToBottom = isScrolledToFartherEdge("Top", "Height");
