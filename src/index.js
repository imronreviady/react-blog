import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, withRouter } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import CreateArticle from './components/CreateArticle';
import Login from './components/Login';
import Signup from './components/Signup';
import SingleArticle from './components/SingleArticle';

import registerServiceWorker from './registerServiceWorker';

const Main = withRouter(({location}) => {
	return (
		<div>
			{
				location.pathname !== '/login' && location.pathname !== '/signup' &&
				<Navbar />
			}

			<Route exact path="/" component={Welcome} />
			<Route path="/login" component={Login} />
			<Route path="/signup" component={Signup} />
			<Route path="/article/:slug" component={SingleArticle} />
			<Route path="/articles/create" component={CreateArticle} />

			{
				location.pathname !== '/login' && location.pathname !== '/signup' &&
				<Footer />
			}
		</div>
	);
});

ReactDOM.render(
	<BrowserRouter>
		<Main />
	</BrowserRouter>
	, document.getElementById('root'));
registerServiceWorker();
