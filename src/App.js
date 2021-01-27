import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch, NavLink, Link } from 'react-router-dom';
import Group from '@material-ui/icons/Group'
import KeyboardCapslockIcon from '@material-ui/icons/KeyboardCapslock';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Users from './user/pages/Users'
import NewPlace from "./places/pages/NewPlace";
import { createBrowserHistory } from 'history'
import Auth from "./shared/pages/auth";
import PlacesList from "./places/pages/PlacesList";
import Home from "./shared/pages/home";
import "./App.css";

const history = createBrowserHistory();
var buttons = [
  {
    color: "secondary",
    text: "Users",
    icon: <Group />,
    variant: "contained",
    path: "/users"
  },
  {
    color: "Primary",
    text: "Auth",
    icon: <KeyboardCapslockIcon />,
    variant: "contained",
    path: "auth",
  },
  {
    color: "tertiary",
    text: "New",
    icon: <AddCircleIcon />,
    variant: "outlined",
    path: "places/new"
  }
]
const title = "Mappy";
const onUsersClick = (event) => {

}
const App = () => {
  return (

    <Router history={history} >
      <Switch>
        <Route exact path='/'>
          <Home buttons={buttons} title={title} />
        </Route>
        <Route exact path='/auth' >
          <Auth />
        </Route>
        <Route exact path='/users' >
          <Users buttons={buttons} title={title} />
        </Route>
        <Route exact path='/places' >
          <PlacesList buttons={buttons} title={title} />
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
