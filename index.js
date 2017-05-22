/**
 * Created by Administrator on 2017/5/19.
 */

import React from 'react'
import ReactDom from 'react-dom'
import {Router,Route,hashHistory} from 'react-router'
import ProductDom from './Components/App.js'

ReactDom.render((
	<Router history={hashHistory}>
		<Route path="/" component={ProductDom} />
	</Router>
	),
	//<ProductDom />

	document.getElementById('helloworld')
)