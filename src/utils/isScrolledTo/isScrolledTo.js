const isScrolledToCloserEdge = scrollDirection => $container => $container[`scroll${scrollDirection}`] <= 0;
const isScrolledToFartherEdge = (scrollDirection, sizeDimension) => ($container, $scroll) => (
  ($scroll[`offset${sizeDimension}`] - $container[`offset${sizeDimension}`] - $container[`scroll${scrollDirection}`]) <= 0
);

export const isScrolledToLeft = isScrolledToCloserEdge("Left");

export const isScrolledToTop = isScrolledToCloserEdge("Top");

export const isScrolledToRight = isScrolledToFartherEdge("Left", "Width");

export const isScrolledToBottom = isScrolledToFartherEdge("Top", "Height");
