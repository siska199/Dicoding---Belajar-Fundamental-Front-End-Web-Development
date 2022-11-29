const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "production",

  /* Plugin */
  plugins : [
    /* HTML Webpack Plugin */
    new HtmlWebpackPlugin({
      template : "./src/template.html",
      filename : "index.html"
    })
  ],
  /* Loader */
  module: {
    rules: [
      /* CSS Loader */
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      /* Babel Loader */
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
    ],
  },
  /* Ignoring warning */
  devServer : {
    client : {
      overlay : {
        errors : true,
        warnings : false
      }
    }
  }
};
