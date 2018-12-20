import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from './src/Store';

import App from './src/App';

ReactDOM.render(
	<Router>
		<App/>
	</Router>, document.getElementById('root')
	);