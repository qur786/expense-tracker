import path, { dirname } from "path";
import { fileURLToPath } from "url";
import CopyPlugin from "copy-webpack-plugin";

const __dirname = dirname(fileURLToPath(import.meta.url));


export default {
    entry: "./src/index.js",
    mode: "development",
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: "./public/index.html", to: ""
                }
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                resolve: {
                    fullySpecified: false,
                },
                options: { presets: ["@babel/preset-react", "@babel/preset-env"] }
            },
            {
                test: /\.css$/,
                use: ["style-loader", {
                    loader: "css-loader", options: {
                        modules: true,
                        importLoaders: 1,
                    }
                }]
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: "bundle.js"
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "public"),
        },
        port: 3000,
    }
};