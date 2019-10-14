const getPropError = (prop: string) => new ReferenceError(
  `[is-scrolled]: ${prop} wasn't set properly. Take a look at the docs 🙌 https://github.com/bibixx/is-scrolled`,
);

export default getPropError;
