module.exports = function (env) {
    'use strict';

    const webpack = require('webpack'),
        path = require('path');

    let config = {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist/'),
            filename: '[name].chunk.js'
        },
        context: path.resolve(__dirname),
        resolve: {
            modules: [
                path.resolve(__dirname),
                'node_modules'
            ]
        }
    }

    return config;
};