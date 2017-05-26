/**
 * Created by Administrator on 2017/5/19.
 */

import React from 'react'
import ReactDom from 'react-dom'
import {Router,Route,hashHistory,browserHistory,IndexRoute,IndexRedirect} from 'react-router'
import App from './Components/App.js'
import Home from './Components/Home.js'
import UserCenter from './Components/UserCenter.js'
import List from './Components/List.js'
import LinkList from './Components/LinkList.js'
import AddUser from './Components/Adduser.js'
import Database from './Components/DataBase.js'
import File from './Components/File.js'

ReactDom.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={UserCenter} />   /*根路径时，默认加载的组件，相当于index.html时加载的组件*/
			<IndexRedirect to="/home" />   /*当用户访问根路由时，将组件重定向到某个子组件*/
			<Route path="/home" component={Home} />
			<Route path="/database" component={Database} />
			<Route path="/file" component={File} />
			<Route path="/linkList" component={LinkList} />
			<Route path="/list" component={List} />
			<Route path="/userCenter" component={UserCenter} />
			<Route path="aaa/adduser" component={AddUser} />
			<Route path="/adduser" component={AddUser} onEnter={(({params},replace) =>replace(`aaa/adduser`))}/>
		</Route>
	</Router>,
	document.getElementById('helloworld')
)