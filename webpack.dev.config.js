let webpack = require("webpack");
let path = require("path");
let webpackMerge = require("webpack-merge");
let commonConfig = require("./webpack.base.config.js");

let basePath = __dirname;

module.exports = function () {
  return webpackMerge(commonConfig, {
    devtool: 'source-map',

    devServer: {
         contentBase: './dist', // Content base
         inline: true, // Enable watch and live reload
         host: 'localhost',
         port: 8080,
         stats: 'errors-only'
    },

    output: {
      path: path.join(basePath, "dist"),
      filename: "[name].js"
    },

    module: {
      rules: [
        // *** Loading pipe for CSS. No exclusions. Vendor css permited ***
        {
          test: /\.css$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: true,
                sourceMap: true,
                importLoaders: 1,
                localIdentName: "[local]__[name]___[hash:base64:5]"
              }
            },
          ]
        },
        // *** Loading pipe for SASS stylesheets ***
        {
          test: /\.scss$/,
          exclude: [/node_modules/],
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: true,
                camelCase: true,
                sourceMap: true,
                importLoaders: 1,
                localIdentName: "[local]__[name]___[hash:base64:5]"
              }
            },
            "sass-loader"
          ]
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env": {
          DEBUG_TRACES: true
        }
      })
    ],
  });
};
