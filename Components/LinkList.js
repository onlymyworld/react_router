/**
	 * Created by Administrator on 2017/5/22.
 */

import React from 'react'
import {Link,IndexLink} from 'react-router'

let LinkList = React.createClass({
	getInitialState(){
		return{

		}
	},
	render(){
		return(
			<div>
				<ul>
					<li><IndexLink to="/" activeClassName="active" onlyActiveOnIndex={true}>Home</IndexLink></li>
					<li><Link to="/list" activeClassName="active">About</Link></li>
					<li><Link to="/userCenter" activeClassName="active">Report</Link></li>
				</ul>
			</div>
		)
	}
})

module.exports = LinkList;



/*Link代替了a标签*/