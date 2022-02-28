import path, { dirname } from "path";
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));


export default {
    entry: "./src/index.js",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                resolve: {
                    fullySpecified: false,
                },
                options: { presets: [ "@babel/preset-react", "@babel/preset-env"]}
            },
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"]
            }
        ]
    },
    resolve: {
        extensions: [ "*", ".js", ".jsx"],
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