import React, { PureComponent, createRef } from "react";
import PropTypes from "prop-types";

import onScrollFn from "../utils/onScroll";
import onResizeFn from "../utils/onResize";

import { setupListeners, cleanupListeners } from "../utils/listeners";

export default class IsScrolled extends PureComponent {
  static propTypes = {
    children: PropTypes.func,
    render: PropTypes.func,
    component: PropTypes.node,
  }

  static defaultProps = {
    children: null,
    render: null,
    component: null,
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

    const { observer } = setupListeners({
      $container,
      $content,
      onScroll,
      onResize,
    });

    this.observer = observer;
  }

  componentWillUnmount() {
    const {
      containerRef: {
        current: $container,
      },
      onScroll,
      observer,
    } = this;

    cleanupListeners({
      $container,
      onScroll,
      observer,
    });
  }

  onScroll = () => {
    this.setState({
      isScrolledTo: onScrollFn(this.containerRef.current, this.contentRef.current),
    });
  };

  onResize = () => {
    this.setState({
      isScrollable: onResizeFn(this.containerRef.current, this.contentRef.current),
    });
  };

  render() {
    const { children, render, component: PropComponent } = this.props;
    const { isScrolledTo, isScrollable } = this.state;
    const { containerRef, contentRef } = this;

    if (PropComponent) {
      return (
        <PropComponent
          isScrolledTo={isScrolledTo}
          containerRef={containerRef}
          contentRef={contentRef}
          isScrollable={isScrollable}
        />
      );
    }

    const renderFn = children || render;

    return renderFn({
      isScrolledTo, containerRef, contentRef, isScrollable,
    });
  }
}
