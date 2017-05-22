/**
 * Created by YueFang on 2017/5/22.
 */

import React from 'react'
import {browserHistory} from 'react-router'

let AddUser = React.createClass({
	getInitialState(){
		return{
			name:'',
			pwd:''
		}
	},
	submitHandler(event){
		event.preventDefault();
		const username=event.target.elements[0].value;
		const pwd =event.target.elements[1].value;
		const path=`/list/${username}/${pwd}`;
		browserHistory.push(path);
	},
	userNameChangeHandler(event){
		this.setState({name:event.target.value.trim()});
	},
	passwordChangeHandler(event){
		this.setState({pwd:event.target.value.trim()});
	},
	render(){
		return (
			<div>
				Add user
				<form onSubmit={this.submitHandler}>
					<input type="text" placeholder="username" onChange={this.userNameChangeHandler}/>
					<input type="password" placeholder="password" onChange={this.passwordChangeHandler}/>
					<button type="submit">go</button>
				</form>
				<p>
					{this.state.name}
				</p>
				<p>
					{this.state.pwd}
				</p>
			</div>
		)
	}
})

module.exports = AddUser;