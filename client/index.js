import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './src/App';

ReactDOM.render(
	<Router>
		<App/>
	</Router>, document.getElementById('root')
	);
