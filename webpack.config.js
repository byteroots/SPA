const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports={
    entry: './index.js',
    output:{
        filename:'main.bundle.js',
        path: __dirname + '/dist',
        publicPath: '',
        assetModuleFilename: 'asset/[hash][ext][query]'
    
    },
    module:{
        rules:[
            {
                test: /\.(png|jpeg|jpg|gif|svg|woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource'
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: 'main.min.css'
        }),
        new CleanWebpackPlugin()
    ],
    devServer:{
        publicPath:'/dist/',
        watchContentBase: true
    },
    mode: 'development'
}