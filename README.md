<h1 align="center">is-scrolled</h1>

[![npm](https://badgen.net/npm/v/is-scrolled)](https://www.npmjs.com/package/is-scrolled)
[![npm](https://badgen.net/npm/dt/is-scrolled)](https://www.npmjs.com/package/is-scrolled)
[![npm](https://badgen.net/npm/dm/is-scrolled)](https://www.npmjs.com/package/is-scrolled)
[![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/bibixx/is-scrolled)](https://snyk.io/test/github/bibixx/is-scrolled)
![CircleCI branch](https://badgen.net/circleci/github/bibixx/is-scrolled)
[![david-dm.org](https://badgen.net/david/dep/bibixx/is-scrolled)](https://david-dm.org/bibixx/is-scrolled)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://badgen.net/badge/commitizen/friendly/green)](http://commitizen.github.io/cz-cli/)

> React component & hook to easily check whether whether scroll area has reached its limit

## Installation

`npm install -S is-scrolled`

## Examples

* [__Use case demo__](https://codesandbox.io/s/is-scrolled-demo-5j94s)
* [Simple component implementation (codesandbox.io)](https://codesandbox.io/s/is-scrolled-example-3dpdz)
* [Simple hook implementation (codesandbox.io)](https://codesandbox.io/s/is-scrolled-hook-example-3od1t)

## Usage

The package gives 2 different methods of using it

1. `IsScrolled` component with a function as a child, component or render prop
2. `useIsScrolled` hook

### Component usage example

```jsx
const Table = () => (
  <IsScrolled>
    {({
      isScrolledTo,
      isScrollable,
      containerRef,
      contentRef,
    }) => (
      <div ref={containerRef}>
        <table ref={contentRef}>
          <tbody>
            {new Array(n).fill(null).map((_, i) => (
              <tr key={i}>
                {new Array(n).fill(null).map((_, j) => (
                  <td key={j}>{i + 1}x{j + 1}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </IsScrolled>
)
```

### Hook usage example

```jsx
const Table = () => {
  const {
    containerRef,
    isScrollable,
    contentRef,
    isScrolledTo
  } = useIsScrolled();

  return (
    <div ref={containerRef}>
      <table ref={contentRef}>
        <tbody>
          {new Array(n).fill(null).map((_, i) => (
            <tr key={i}>
              {new Array(n).fill(null).map((_, j) => (
                <td key={j}>{i + 1}x{j + 1}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
```

### Function attributes
Those values will be passed as the attributes to the render function or will be an output of the hook.

__`containerRef: React.RefObject`__<br />
Needs to be passed as `ref` attribute to the element surrounding content that should be in scrollable area. (Probably should have `overflow: auto` set in CSS)

__`contentRef: React.RefObject`__<br />
Needs to be passed as `ref` attribute to the content that should be in scrollable area.

__`isScrolledTo: { left: boolean, top: boolean, right: boolean, bottom: boolean }`__<br />
Object describing whether scrollable area has reached any of the sides.

__`isScrollable: { x: boolean, y: boolean }`__</br>
Object describing whether scroll is available for given axis.

### `IsScrolled` props
There are three ways to render things with this component. If more then one of those props are passed the one used will be chosen based on this order

### Props
* __`children?: (props: Attributes) => React.ReactNode`__
* __`component?: React.ComponentType<Attributes>`__
* __`render: (props: Attributes) => React.ReactNode`__

## Dependencies

Only required dependency for this package is `React`. Make sure you have it installed in your project.

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/bibixx/is-scrolled/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2019 [bibixx <bartosz@legiec.eu>](https://github.com/bibixx).<br />
This project is [MIT](https://github.com/bibixx/is-scrolled/blob/master/LICENSE) licensed.
