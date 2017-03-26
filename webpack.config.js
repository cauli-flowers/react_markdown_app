const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = [
    {
        entry: {
            js: './src/main.js',
        },
        output: {
            path: __dirname + '/public',
            filename: 'bundle.js'
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                }
            ]
        },
        devtool: 'source-map',
        devServer: {
            contentBase: './public',
            port: 8080,
            inline: true,
            historyApiFallback: true
        }
    },
    {
        entry: {
            css: './src/main.css',
        },
        output: {
            path: __dirname + '/public',
            filename: 'bundle.css'
        },
        module: {
            loaders: [
                {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract('css-loader!postcss-loader'),
                },
            ]
        },
        plugins: [
            new ExtractTextPlugin('bundle.css'),
            new webpack.LoaderOptionsPlugin({
                  options: {
                    context: __dirname + '/public',
                    postcss: [
                      require('postcss-easy-import')({glob: true})
                    ]
                  }
            }),
        ],
        devtool: 'source-map',
        devServer: {
            contentBase: './public',
            port: 8080,
            inline: true,
            historyApiFallback: true
        }
    }
];
