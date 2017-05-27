/**
	* Created by YueFang on 2017/5/26.
	*/

import React from 'react'

let DataBase = React.createClass({
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
			title:'数据'
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

module.exports = DataBase;