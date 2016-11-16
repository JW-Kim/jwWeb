var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
	  path: './dist',
	  filename: 'bundle.js'
  },
  resolve: {
	  extensions: ['', '.js', '.jsx'],
  },
  module: {
	  loaders:[
	  	{ 	
	  		test: /\.jsx$/, 
	  		exclude: /node_modules/, 
	  		loader: 'jsx-loader' 
	  	},
	  	{	
	  		test: /\.js$/, 
	  		exclude:/node_modules/, 
	  		loader: 'babel-loader'},
	  	{
	        test: /\.css$/,
	        loader: "style-loader!css-loader"
	  	},
	  	{
	  	  test: /\.(png|jpg)$/,
	  	  loader: 'url-loader'
	  	}
      ]
  },
  plugins: [
      new CommonsChunkPlugin('init.js'),
      new HtmlWebpackPlugin({
	      template: './src/index.html',
	      inject: false
	  })               
  ]
};