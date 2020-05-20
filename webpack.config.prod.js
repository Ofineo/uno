/* eslint-disable quotes */
const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");

module.export = {
  mode: "production",
  entry: "./src/app.js",
  devtool: "none",
  output: {
    filename: "[contenthash].js",
    path: path.resolve(__dirname, "assets"),
  },
  devServer: {
    contentBase: "./",
  },
  plugin: [new CleanPlugin.CleanWebpackPlugin()],
};
