import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import Layout from 'Layout';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App} >
			<IndexRoute component={Layout} />
			<Route path="/:permalink" component={Layout} />
		</Route>
	</Router>,
document.getElementById('root'));
