/* eslint-disable quotes */
const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");

module.export = {
  mode: "development",
  entry: "./src/app.js",
  devtool: "eval-cheap-module-source-map",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "assets"),
  },
  devServer: {
    contentBase: "./",
  },
  plugin: [new CleanPlugin.CleanWebpackPlugin()],
};
