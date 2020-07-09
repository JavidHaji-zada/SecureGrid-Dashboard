import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';

import reducers from './reducers';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './containers/home/home';
import Dashboard from './containers/dashboard/dashboard';
import About from './containers/about/about';
import Inbox from './containers/inbox/inbox';
import Profile from './containers/profile/profile';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(thunk)
));

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Route path='' component={Home} />
      <Route path='/home' component={Home} />
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/about' component={About} />
      <Route path='/inbox' component={Inbox} />
      <Route path='/profile' component={Profile} />

    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));