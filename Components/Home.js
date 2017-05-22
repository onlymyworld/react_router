/**
 * Created by Administrator on 2017/5/22.
 */


import React from 'react'
import {Link} from 'react-router'

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
				<Link to="/linklist" >LinkList</Link>
			</div>
		)
	}
})

module.exports = Home;