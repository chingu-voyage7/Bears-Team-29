import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import {Button,AppBar,Toolbar } from '@material-ui/core';

import { Header, Footer } from './components/layouts';
import Main from './components/pages/Main';
import Admin from './components/admin/Admin';
import { Provider } from './Store';

const App = () => 
	(	
		<Provider>
			<div className="page">
				<Route path="/admin" component={ Admin } />
				{/*There is probably a better way to this*/}
				<Route path="/home" render={() =>(
					<Fragment>
						<Header/>
							<Main/>
						<Footer/>
					</Fragment>
				)
				}/>
			</div>
		</Provider>
	);

export default App;
