/**
 * Created by YueFang on 2017/5/22.
 */


import React from 'react'

let List = React.createClass({
	getInitialState(){
		return{
			data:["张三","李四"]
		}
	},
	render(){
		return(
			<div>
				{this.state.data}
			</div>
		)
	}
})

module.exports = List;