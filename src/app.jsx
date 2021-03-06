/*
* @Author: Xugai
* @Date:   2019-01-27 21:02:28
* @Last Modified by:   Xugai
* @Last Modified time: 2019-01-27 23:22:01
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Link, Switch } from 'react-router-dom';

import Layout from 'component/layout/index.jsx';
import Home from 'page/home/index.jsx';
import Login from 'page/login/index.jsx';
import ErrorPage from 'page/error/index.jsx';
import UserList from 'page/userList/index.jsx';
import OrderList from 'page/order/index.jsx';
import OrderDetail from 'page/order/detail.jsx';
import ProductRouter from 'page/product/router.jsx';

class App extends React.Component{
	render(){
		let layoutRouter = (
			<Layout>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/product' component={ProductRouter}/>
					<Route path='/product-category' component={ProductRouter}/>
					<Route exact path='/order' component={OrderList} />
					<Route path='/order/detail/:orderNo' component={OrderDetail} />
					<Redirect exact from='/user' to='/user/index' />
					<Route path='/user/index' component={UserList} />
					<Route component={ErrorPage} />
				</Switch>
			</Layout>
		);

		return (
			<Router>
				<Switch>
					<Route path='/login' component={Login} />
					<Route path='/' render={() => layoutRouter} />
				</Switch>		
			</Router>		
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);





