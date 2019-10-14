export interface isScrolledTo {
  left: boolean;
  top: boolean;
  right: boolean;
  bottom: boolean;
}

export interface isScrollable {
  x: boolean;
  y: boolean;
}

export interface Attributes {
  isScrolledTo: isScrolledTo;
  isScrollable: isScrollable;
  containerRef: React.RefObject<unknown>;
  contentRef: React.RefObject<unknown>;
}
