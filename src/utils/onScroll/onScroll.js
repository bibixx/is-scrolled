import {
  isScrolledToLeft,
  isScrolledToTop,
  isScrolledToRight,
  isScrolledToBottom,
} from "../isScrolledTo";

const onScroll = setState => ($container, $scroll) => {
  setState({
    left: isScrolledToLeft($container),
    top: isScrolledToTop($container),
    right: isScrolledToRight($container, $scroll),
    bottom: isScrolledToBottom($container, $scroll),
  });
};

export default onScroll;
