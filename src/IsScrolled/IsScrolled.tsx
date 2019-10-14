import React, { PureComponent, createRef } from "react";

import getScrollBounds from "../utils/getScrollBounds";
import isContentScrollable from "../utils/isContentScrollable";
import getPropError from "../utils/throwError";

import { setupListeners, cleanupListeners } from "../utils/listeners";

interface isScrolledTo {
  left: boolean;
  top: boolean;
  right: boolean;
  bottom: boolean;
}

interface isScrollable {
  x: boolean;
  y: boolean;
}

export interface ChildProps {
  isScrolledTo: isScrolledTo;
  containerRef: React.RefObject<unknown>;
  contentRef: React.RefObject<unknown>;
  isScrollable: isScrollable;
}

export interface IsScrolledProps {
  children: React.FunctionComponent<ChildProps>;
  render: Function;
  component: React.ComponentType<ChildProps>;
}

export interface IsScrolledState {
  isScrolledTo: isScrolledTo;
  isScrollable: isScrollable;
}

export default class IsScrolled extends PureComponent<IsScrolledProps, IsScrolledState> {
  static defaultProps = {
    children: null,
    render: null,
    component: null,
  };

  state = {
    isScrolledTo: {
      left: true,
      top: true,
      right: false,
      bottom: false,
    },
    isScrollable: {
      x: false,
      y: false,
    },
  };

  containerRef = createRef<HTMLElement>();

  contentRef = createRef<HTMLElement>();

  observer: ResizeObserver | null = null;

  componentDidMount() {
    const {
      containerRef: {
        current: $container,
      },
      contentRef: {
        current: $content,
      },
    } = this;

    if ($container === null) {
      throw getPropError("containerRef");
    }

    if ($content === null) {
      throw getPropError("contentRef");
    }

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

    if ($container === null) {
      throw getPropError("containerRef");
    }

    if (observer === null) {
      // TODO add error
      return;
    }

    cleanupListeners({
      $container,
      onScroll,
      observer,
    });
  }

  onScroll = () => {
    if (this.containerRef.current === null) {
      throw getPropError("containerRef");
    }

    if (this.contentRef.current === null) {
      throw getPropError("contentRef");
    }

    this.setState({
      isScrolledTo: getScrollBounds(this.containerRef.current, this.contentRef.current),
    });
  };

  onResize = () => {
    if (this.containerRef.current === null) {
      throw getPropError("containerRef");
    }

    if (this.contentRef.current === null) {
      throw getPropError("contentRef");
    }

    this.setState({
      isScrollable: isContentScrollable(this.containerRef.current, this.contentRef.current),
    });
  };

  render() {
    const { children, render, component: PropComponent } = this.props;
    const { isScrolledTo, isScrollable } = this.state;
    const { containerRef, contentRef } = this;

    const RenderComponent = children || PropComponent || render;

    return (
      <RenderComponent
        isScrolledTo={isScrolledTo}
        containerRef={containerRef}
        contentRef={contentRef}
        isScrollable={isScrollable}
      />
    );
  }
}
