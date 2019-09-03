import { Component, createRef } from "react";
import PropTypes from "prop-types";
import ResizeObserver from "resize-observer-polyfill";

import onScrollFn from "../utils/onScroll";
import onResizeFn from "../utils/onResize";

export default class IsScrolled extends Component {
  static propTypes = {
    children: PropTypes.func,
    render: PropTypes.func,
  }

  static defaultProps = {
    children: null,
    render: null,
  }

  state = {
    isScrolledTo: {
      left: true,
      top: true,
      right: false,
      bottom: false,
    },
    isScrollable: {
      x: false,
      Y: false,
    },
  }

  containerRef = createRef();

  contentRef = createRef();

  observer = null;

  componentDidMount() {
    const {
      containerRef: {
        current: $container,
      },
      contentRef: {
        current: $content,
      },
    } = this;

    const {
      onScroll,
      onResize,
    } = this;

    if (!$container) {
      return;
    }

    $container.addEventListener("scroll", onScroll);

    this.observer = new ResizeObserver(() => {
      onResize();
      onScroll();
    });

    this.observer.observe($container);
    this.observer.observe($content);
  }

  componentWillUnmount() {
    this.containerRef.current.removeEventListener("scroll", this.onScroll);
    this.observer.disconnect();
  }

  onScroll = () => onScrollFn(
    v => this.setState({ isScrolledTo: v }),
  )(this.containerRef.current, this.contentRef.current);

  onResize = () => onResizeFn(
    v => this.setState({ isScrollable: v }),
  )(this.containerRef.current, this.contentRef.current);

  render() {
    const { children, render } = this.props;
    const { isScrolledTo, isScrollable } = this.state;
    const { containerRef, contentRef } = this;

    const renderFn = children || render;

    return renderFn({
      isScrolledTo, containerRef, contentRef, isScrollable,
    });
  }
}
