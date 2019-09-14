const isContentScrollable = ($container, $content): { y: boolean, x: boolean } => ({
  x: $container.offsetWidth < $content.offsetWidth,
  y: $container.offsetHeight < $content.offsetHeight,
});

export default isContentScrollable;
