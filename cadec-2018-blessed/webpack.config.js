var path = require("path");
var includes = [
  path.resolve(__dirname, "src"),
  path.resolve(__dirname, "../cadec-2018-api/src"),
  path.resolve(__dirname, "../cadec-2018-state/src"),
  path.resolve(__dirname, "../cadec-2018-utils/src")
];

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        include: includes,
        query: {
          presets: ["react", "es2015", "stage-0"],
          cacheDirectory: true
        }
      },
      {
        test: /\.node$/,
        use: "node-loader"
      }
    ]
  },
  target: "node"
};
