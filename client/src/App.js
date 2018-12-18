import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { Header, Footer } from './components/layouts';
import Main from './components/pages/Main';
import {Button,AppBar,Toolbar } from '@material-ui/core';
import Admin from './components/admin/Admin';

const App = () => 
	(<div className="page">
		<Route path="/admin" component={ Admin } />
		{/*There is probably a better way to this*/}
		<Route exact path="/" render={() =>(
			<Fragment>
				<Header/>
					<Main/>
				<Footer/>
			</Fragment>
		)
		}/>
	</div>);

export default App;
