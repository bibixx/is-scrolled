import {
  isScrolledToLeft,
  isScrolledToTop,
  isScrolledToRight,
  isScrolledToBottom,
} from "../isScrolledTo";

const onScroll = ($container, $scroll) => ({
  left: isScrolledToLeft($container),
  top: isScrolledToTop($container),
  right: isScrolledToRight($container, $scroll),
  bottom: isScrolledToBottom($container, $scroll),
});

export default onScroll;
