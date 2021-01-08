const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;
const path = require("path");
const deps = require("./package.json").dependencies;
module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3003,
    historyApiFallback: true,
    hot: false,
    hotOnly: false,
  },
  output: {
    publicPath: "auto",
    chunkFilename: "[id].[contenthash].js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react", "@babel/preset-typescript"],
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".mjs", ".jsx", ".css"],
    alias: { events: "events" },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "sales",
      filename: "remoteEntry.js",
      remotes: {
        order: "order@http://localhost:3002/remoteEntry.js",
        sales: "sales@http://localhost:3003/remoteEntry.js",
        shell: "shell@http://localhost:3000/remoteEntry.js",
        dashboard: "dashboard@http://localhost:3001/remoteEntry.js",
      },
      exposes: {
        "./DepositsWidget": "./src/view/components/DepositsWidget",
        "./TodayWidget": "./src/view/components/TodayWidget",
      },
      shared: [
        {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps.react,
          },
          "react-dom": {
            singleton: true,
            requiredVersion: deps["react-dom"],
          },
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
