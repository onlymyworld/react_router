/**
 * Created by Administrator on 2017/5/19.
 */

import "../css/index.css"


import React from 'react'
class Product extends React.Component{
	render(){
		return(
			<div>
				{this.props.children}
			</div>
		)
	}
}

module.exports = Product;