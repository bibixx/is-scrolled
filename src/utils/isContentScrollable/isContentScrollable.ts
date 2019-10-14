const isContentScrollable = ($container: HTMLElement, $content: HTMLElement)
: { y: boolean, x: boolean } => ({
  x: $container.offsetWidth < $content.offsetWidth,
  y: $container.offsetHeight < $content.offsetHeight,
});

export default isContentScrollable;
