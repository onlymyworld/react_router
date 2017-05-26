/**
	* Created by YueFang on 2017/5/26.
	*/

import React from 'react'


let File = React.createClass({
	getInitialState(){
		return{

		}
	},
	propsTypes(){
		return{
			title:React.props.string.isRequired
		}
	},
	getDefaultProps(){
		return{
			title:"文件"
		}
	},
	render(){
		return(
			<div>
				{this.props.title}
			</div>
		)
	}
})

module.exports = File;