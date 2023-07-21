const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
  devServer: {
    port: 8008,
    host: 'dev.june.local',
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    proxy: {
      "/api/**": {
        target: "https://editor.staging.juneapp.com/",
        changeOrigin: true,
        logLevel: 'debug'
      },
      "/media/image/**": {
        target: "https://editor.staging.juneapp.com/",
        changeOrigin: true,
        logLevel: 'debug'
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // Add other rules for handling different file types if needed
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
      },
    ],
  },
  
  // pass all js files through Babel
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
  }
};