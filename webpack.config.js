const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const extractPlugin = new ExtractTextPlugin({
	filename: 'main.css'
});

module.exports = {
	entry: './src/js/app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		//publicPath: '/dist'
	},
	module: {
		rules: [
			{
				test: /.js$/,
				use: 
					{
						loader: 'babel-loader',
						options: {
							presets: ['es2015']
						}
					}
			},
			{
				test: /\.scss$/,
				use: extractPlugin.extract({
					use: ['css-loader', 'sass-loader']
				})				
			},
			{
				test: /\.html$/,
				use: ['html-loader']
			},
			{
				test: /\.(jpg|png)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'img/'
					}
				}
			}
		]
	},
	plugins: [
		extractPlugin,
		new webpack.optimize.UglifyJsPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html'
		}),
		/*
		Esto carga dinamicamente en el head, el bundle.js y el main.css
		new HtmlWebpackPlugin({
			filename: 'users.html',
			template: './src/users.html'
		}),*/
		new HtmlWebpackPlugin({
			filename: 'users.html',
			template: './src/users.html',
			chunks: []
			//Al indicar los chunks vacios, no le pasa nada el bundle.js ni el main.css
		}),
		new CleanWebpackPlugin(['dist'])
	]
};