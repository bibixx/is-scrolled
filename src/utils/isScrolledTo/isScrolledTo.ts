enum ScrollEdge {
  top,
  left
}

enum Dimension {
  x,
  y
}

// eslint-disable-next-line consistent-return
const isScrolledToCloserEdge = (scrollEdge: ScrollEdge) => ($container: HTMLElement) => {
  switch (scrollEdge) {
    case ScrollEdge.top: {
      return $container.scrollTop <= 0;
    }
    case ScrollEdge.left: {
      return $container.scrollLeft <= 0;
    }
  }
};

const calculateDistanceToFartherEdge = (
  scrollSize: number,
  containerSize: number,
  distanceFromEdge: number,
): number => scrollSize - (containerSize + distanceFromEdge);

const isScrolledToFartherEdge = (
  dimension: Dimension,
) => (
  $container: HTMLElement,
  $scroll: HTMLElement,
) => {
  if (dimension === Dimension.x) {
    const { width: scrollSize } = $scroll.getBoundingClientRect();

    const { width: containerSize } = $container.getBoundingClientRect();

    const distanceFromEdge = $container.scrollLeft;

    const distance = calculateDistanceToFartherEdge(
      scrollSize,
      containerSize,
      distanceFromEdge,
    );

    return Math.floor(distance) <= 0;
  }

  const { height: scrollSize } = $scroll.getBoundingClientRect();

  const { height: containerSize } = $container.getBoundingClientRect();

  const distanceFromEdge = $container.scrollTop;

  const distance = calculateDistanceToFartherEdge(
    scrollSize,
    containerSize,
    distanceFromEdge,
  );

  return Math.floor(distance) <= 0;
};

export const isScrolledToLeft = isScrolledToCloserEdge(ScrollEdge.left);

export const isScrolledToTop = isScrolledToCloserEdge(ScrollEdge.top);

export const isScrolledToRight = isScrolledToFartherEdge(Dimension.x);

export const isScrolledToBottom = isScrolledToFartherEdge(Dimension.y);
