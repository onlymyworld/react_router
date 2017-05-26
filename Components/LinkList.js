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
	contextTypes:{
		router:React.PropTypes.object
	},
	render(){
		return(
			<div>
				<ul>

				</ul>
			</div>
		)
	}
})

module.exports = LinkList;



/*Link代替了a标签*/