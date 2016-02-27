import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Portfolio from 'Portfolio/Portfolio';
import FullScreen from 'FullScreen/FullScreen';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App} >
			<IndexRoute component={Portfolio} />
			<Route path="portfolio/:permalink" component={FullScreen} />
		</Route>
	</Router>,
document.getElementById('root'));
