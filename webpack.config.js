module.exports = {
    entry: {js: './src/main.js'},
    output: {path: __dirname + '/public', filename: 'bundle.js'},
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
        ],
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './public',
        port: 8080,
        inline: true,
        historyApiFallback: true,
    }
};
