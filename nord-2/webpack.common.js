module.exports = {
    entry: "./src/js/index.js",
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                    options: {
                        esModule: false,
                        minimize: true,
                        sources: {
                            list: [
                                {
                                    tag: 'img',
                                    attribute: 'src',
                                    type: 'src',
                                }
                            ]
                        }
                    }
                }]
            },
            {
                test: /\.(woff(2)?|ico|eot|ttf|svg|png|jpe?g|gif)(\?[a-z0-9=\.]+)?$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "assets"
                    }
                }
            },
        ]
    },
};