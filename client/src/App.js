import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from './components/layouts';
import Main from './components/pages/Main';
import {Button,AppBar,Toolbar } from '@material-ui/core';

const App = () => 
	(<div className="page">
		<Header/>
		<div className = "page-content">
			<Main/>
		</div>
		<Footer/>
	</div>);

export default App;
