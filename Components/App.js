/**
 * Created by Administrator on 2017/5/19.
 */

import "../css/index.css"



import React from 'react'
import HeaderMenu from "./HeaderMenu.js"
class App extends React.Component{
	render(){
		return(
			<div>
				<HeaderMenu></HeaderMenu>
				{this.props.children}
			</div>
		)
	}
}

module.exports = App;