const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        'bundle': ['./client/javascripts/index.js']
    },
    output: {
        filename: 'bundle.js',
        publicPath: '/',
        path: path.resolve(process.cwd(), 'public')
    },

    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.sass'],
        alias: {
            app: path.resolve(__dirname, 'app'),
            client: path.resolve(__dirname, 'client'),
            config: path.resolve(__dirname, 'config'),
            test: path.resolve(__dirname, 'test')
        }
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [path.resolve(__dirname, 'client', 'javascripts')],
                loader: 'babel-loader'
            }
        ]
    }
};