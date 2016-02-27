import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Portfolio from 'Portfolio/Portfolio';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App} >
			<IndexRoute component={Portfolio} />
		</Route>
	</Router>,
document.getElementById('root'));
