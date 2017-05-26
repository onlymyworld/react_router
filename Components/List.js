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
	contextTypes:{
		router:React.PropTypes.object
	},
	render(){
		return(
			<div>
				{
					this.state.data.map(function (name) {
						return(
							<p>{name}</p>
						)
					})
				}
			</div>
		)
	}
})

module.exports = UserList;