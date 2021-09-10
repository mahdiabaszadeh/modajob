/** @format */

require("dotenv").config({ path: "./.env" });
const webpack = require("webpack");
const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

let mode = "development";
let target = "web";

const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin(),
  new HtmlWebpackPlugin({
    template: "src/index.html",
  }),
  new webpack.DefinePlugin({
    "process.env": JSON.stringify(process.env),
  }),
];

if (process.env.NODE_ENV === "production") {
  mode = "production";
  target = "browserslist";
}
if (process.env.SERVE) {
  plugins.push(new ReactRefreshWebpackPlugin({ overlay: false }));
}

module.exports = {
  mode: mode,
  target: target,
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "image/[hash][ext][query]",
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset",
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "" },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: plugins,

  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@Components": path.resolve(__dirname, "src/components/"),
      "@Utilities": path.resolve(__dirname, "src/utilities/"),
      "@Assets": path.resolve(__dirname, "src/assets/"),
    },
  },

  devtool: "source-map",
  devServer: {
    static: "./dist",
    hot: true,
  },
};
