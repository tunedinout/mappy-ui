import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Redirect, Switch, NavLink, Link } from 'react-router-dom';
import Users from './user/pages/Users'
import NewPlace from "./places/pages/NewPlace";
import { createBrowserHistory } from 'history'
import Auth from "./shared/pages/auth";
import PlacesList from "./places/pages/PlacesList";
import Home from "./shared/pages/home";
const history = createBrowserHistory();
const App = () => {
  return (

    <Router history={history} >
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/auth' >
          <Auth />
        </Route>
        <Route exact path='/users' >
          <Users />
        </Route>
        <Route exact path='/places' >
          <PlacesList />
        </Route>
        <Route exact path='/places/new' >
          <NewPlace />
        </Route>
        <Redirect to='/' />
      </Switch>
    </Router >
  );
}
export default App;
