/**
 * Created by Administrator on 2017/5/19.
 */

import React from 'react'
import ReactDom from 'react-dom'
import {Router,Route,hashHistory,IndexRoute,IndexRedirect} from 'react-router'
import App from './Components/App.js'
import Home from './Components/Home.js'
import UserCenter from './Components/UserCenter.js'
import List from './Components/List.js'
import LinkList from './Components/LinkList.js'

ReactDom.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={UserCenter} />   /*根路径时，默认加载的组件，相当于index.html时加载的组件*/
			<IndexRedirect to="/home" />   /*当用户访问根路由时，将组件重定向到某个子组件*/
			<Route path="/home" component={Home}></Route>
			<Route path="/linkList" component={LinkList}></Route>
			<Route path="/list" component={List}></Route>
			<Route path="/userCenter" component={UserCenter}></Route>
		</Route>
	</Router>,
	document.getElementById('helloworld')
)