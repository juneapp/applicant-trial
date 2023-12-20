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
        host: "dev.june.local",
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        proxy: {
            "/api/**": {
                target: "https://editor.staging.juneapp.com/",
                changeOrigin: true,
                logLevel: "debug",
            },
            "/media/image/**": {
                target: "https://editor.staging.juneapp.com/",
                changeOrigin: true,
                logLevel: "debug",
            },
        },
    },
    module: {
        // exclude node_modules
        rules: [
            // `js` and `jsx` files are parsed using `babel`
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            // `ts` and `tsx` files are parsed using `ts-loader`
            {
                test: /\.(ts|tsx)$/,
                loader: "ts-loader",
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    // pass all js files through Babel
    resolve: {
        extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
    },
};
