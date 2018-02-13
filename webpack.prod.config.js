let webpack = require("webpack");
let path = require("path");
let webpackMerge = require("webpack-merge");
let commonConfig = require("./webpack.base.config.js");

let basePath = __dirname;

module.exports = function () {
  return webpackMerge(commonConfig, {
    devtool: "cheap-module-source-map",

    output: {
      path: path.join(basePath, "dist"),
      filename: "[chunkhash].[name].js"
    },

    module: {
      rules: [
        // *** Loading pipe for CSS. No exclusions. Vendor css permited ***
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              {
                loader: "css-loader",
                options: {
                  modules: true,
                  camelCase: true,
                  importLoaders: 1,
                  localIdentName: "[local]__[name]___[hash:base64:5]"
                }
              },
            ]
          })
        },
        // *** Loading pipe for user SASS stylesheets ***
        {
          test: /\.scss$/,
          exclude: [/node_modules/],
          loader: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              {
                loader: "css-loader",
                options: {
                  modules: true,
                  camelCase: true,
                  importLoaders: 1,
                  localIdentName: "[local]__[name]___[hash:base64:5]"
                }
              },
              { loader: "sass-loader" }
            ]
          })
        }
      ]
    },
    
    plugins: [
      new ExtractTextPlugin({
        filename: "[chunkhash].[name].css",
        disable: false,
        allChunks: true
      }),
      new webpack.DefinePlugin({
        "process.env": {
          DEBUG_TRACES: false
        }
      })
    ],
  });
};
