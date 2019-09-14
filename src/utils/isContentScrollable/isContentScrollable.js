const isContentScrollable = ($container, $content) => ({
  x: $container.offsetWidth < $content.offsetWidth,
  y: $container.offsetHeight < $content.offsetHeight,
});

export default isContentScrollable;
