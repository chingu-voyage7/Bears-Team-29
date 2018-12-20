import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';

const Main = () =>(
	<Switch>
		<Route exact path="/home" component={ HomePage } />
		<Route path="/home/about" component={ AboutUs } />
		<Route path="/home/contactus" component={ ContactUs } />
	</Switch>
	);
export default Main;