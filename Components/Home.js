/**
 * Created by Administrator on 2017/5/22.
 */


import React from 'react'

let Home = React.createClass({
	getInitialState(){
		return {
			welcome:'欢迎访问'
		}
	},
	render(){
		return (
			<div>
				{this.state.welcome}
			</div>
		)
	}
})