/**
	* Created by YueFang on 2017/5/19.
	*/

module.exports = {
	entry:{
		index:'./index.js'
	},
	output:{
		filename:'build.js'
	},
	module:{
		loaders:[
			{test:/\.css$/,loader:'style-loader!css-loader'},
			{test:/\.(js|jsx)$/,exclude:/node_modules/,loader:'babel-loader'}
		]
	}
}