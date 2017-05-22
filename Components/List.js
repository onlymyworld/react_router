/**
 * Created by YueFang on 2017/5/22.
 */


import React from 'react'
import {Link} from 'react-router'

let UserList = React.createClass({
	getInitialState(){
		return{
			data:["张三","李四"]
		}
	},
	render(){
		return(
			<div>
				{this.state.data}
				<Link to="/adduser">Add user</Link>
			</div>
		)
	}
})

module.exports = UserList;