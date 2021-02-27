const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'math-kombat.js',
        path: path.resolve(__dirname, 'public/js'),
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
};