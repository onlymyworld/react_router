/**
 * Created by YueFang on 2017/5/26.
 */

import React from 'react'
import {Link} from 'react-router'


let HeaderMenus = React.createClass({
	getInitialState(){
		return{
			menus:[<Link to="/database">Database</Link>,
					<Link to="/file">File</Link>,
					<Link to="/userCenter">userCenter</Link>,
					<Link to="/list">List</Link>,
					<Link to="/addUser">AddUser</Link>]
		}
	},
	render(){
		return(
			<ul className="HeaderMenu">
				{
					this.state.menus.map(function (item) {
						return(
							<li>{item}</li>
						)
					})
				}
			</ul>
		)
	}
})

module.exports = HeaderMenus;