const onResize = setState => ($container, $content) => {
  setState({
    x: $container.offsetWidth < $content.offsetWidth,
    y: $container.offsetHeight < $content.offsetHeight,
  });
};

export default onResize;
