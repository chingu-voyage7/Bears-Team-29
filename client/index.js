import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Admin  from './src/components/admin/Admin';
import App from './src/App';

ReactDOM.render(
	<Router>
		<div>
			<Route exact path="/" component={App}/>
			<Route path="/admin" component={Admin}/>
		</div>
	</Router>, document.getElementById('root')
	);
