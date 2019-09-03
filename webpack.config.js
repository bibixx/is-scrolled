/* eslint-disable import/no-commonjs */

const path = require("path");

const exp = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
    libraryTarget: "commonjs2",
  },
  target: "web",
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  externals: [
    "react",
    "react-dom",
  ],
};

exp.devtool = "#source-map";

module.exports = exp;
