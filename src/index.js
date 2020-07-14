import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter, Route } from "react-router-dom";
import reducers from "./app/reducers";
import Home from "./app/containers/home/home";
import Dashboard from "./app/containers/dashboard/dashboard";
import About from "./app/containers/about/about";
import Inbox from "./app/containers/inbox/inbox";
import Profile from "./app/containers/profile/profile";
import Login from "./app/containers/login/login";
import "bootstrap/dist/css/bootstrap.min.css";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/" render={(props) => <Home {...props} />} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/about" component={About} />
      <Route path="/inbox" component={Inbox} />
      <Route path="/profile" component={Profile} />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById("root"));
