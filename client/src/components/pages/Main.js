import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Admin from '../admin/Admin';

const Main = () =>(
	<Switch>
		<Route exact path="/" component={ HomePage } />
		<Route exact path="/about" component={ AboutUs } />
		<Route exact path="/contactus" component={ ContactUs } />
		<Route exact path="/admin" component={ Admin } />
	</Switch>
	);
export default Main;