import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import Portfolio from 'Portfolio/Portfolio';
import Layout from 'Layout';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App} >
			<IndexRoute component={Portfolio} />
			<Route path="/:permalink" component={Layout} />
		</Route>
	</Router>,
document.getElementById('root'));
