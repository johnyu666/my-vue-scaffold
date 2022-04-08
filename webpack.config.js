const path = require('path');

const {VueLoaderPlugin}= require('vue-loader')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
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
                    test: /\.js$/, exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader', options: { presets: ['@babel/preset-env'] }
                    }
                },
                {
                    test: /\.vue$/, exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'vue-loader' 
                    }
                }
            ]
    }
};

