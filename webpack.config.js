const path = require('path');

const {VueLoaderPlugin}= require('vue-loader')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
    },
    //此插件是添加vue-loader的必选项
    plugins: [
        new VueLoaderPlugin()
    ],
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
    },
    module: {
        rules:
            [
                {
                    test: /\.js$/,
                    use: {
                        loader: 'babel-loader', options: { presets: ['@babel/preset-env'] }
                    },
                    exclude: /(node_modules|bower_components)/,
                },
                // 添加对typescript的支持
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    options: {
                      appendTsSuffixTo: [/\.vue$/],
                    },
                    exclude: /node_modules/,
                },
                // 支持模板语法，指令系统及SFC系统的核心功能
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                }
            ]
    }
};

