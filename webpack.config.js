const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                  }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
        ]
    },
    devServer: {
        static: {
          publicPath: '/build',
          directory: path.resolve(__dirname, 'build')
        },
        proxy: { '/api': 'http://localhost:3000' },
    },
    plugins: [new HtmlWebpackPlugin ({
        template: './src/index.html'
    })]
}

