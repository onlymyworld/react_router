/**
	* Created by YueFang on 2017/5/22.
	*/

import React from 'react'

let UserCenter = React.createClass({
	getInitialState(){
		return {
			name:'yf',
			age:12
		}
	},
	render(){
		return (
			<div>
				<p>{this.state.name}</p>
				<p>{this.state.age}</p>
			</div>
		)
	}
})

module.exports = UserCenter;