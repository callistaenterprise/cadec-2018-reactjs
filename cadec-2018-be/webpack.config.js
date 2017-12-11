const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: {
    index: ["./index.js"],
  },
  resolve: {
    modules: ["node_modules", path.resolve(__dirname, "src")]
  },
  target: "node",
  externals: [nodeExternals()],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /.json$/,
        loaders: ["json"]
      }
    ]
  },
  output: {
    libraryTarget: "commonjs",
    path: path.join(__dirname, ".webpack"),
    filename: "[name].js"
  }
};
