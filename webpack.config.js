/**
 * Copyright © 1998 - 2020 Tencent. All Rights Reserved.
 *
 * @author enoyao
 */
const path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    watch: true,
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js',
        libraryTarget: 'umd',
        library: 'UserAgent',
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: ['@babel/plugin-transform-runtime']
                        }
                    },
                    {
                        loader: 'ts-loader'
                    }
                ]
            },
        ]
    }
};
