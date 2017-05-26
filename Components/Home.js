/**
 * Created by YueFang on 2017/5/22.
 */


import React from 'react'
import {Link} from 'react-router'

let Home = React.createClass({
	getInitialState(){
		return {
			welcome:'欢迎访问'
		}
	},
	contextTypes:{
		router:React.PropTypes.object
	},
	render(){
		return (
			<div>
				{this.state.welcome}
			</div>
		)
	}
})

module.exports = Home;