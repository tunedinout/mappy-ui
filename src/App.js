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

const users = [
  {
    imageSrc: "https://i.pinimg.com/736x/4e/1e/f5/4e1ef5453477c50fe588d18effd0a426.jpg",
    profileImageHeight: "100",
    profileImageWidth: "100",
    username: "Jessica Bretton",
    placesAdded: 4,
  },
  {
    imageSrc: "https://www.gstatic.com/tv/thumb/persons/70047/70047_v9_bb.jpg",
    profileImageHeight: "100",
    profileImageWidth: "100",
    username: "James Cameron",
    placesAdded: 10
  },
  {
    imageSrc: "https://pyxis.nymag.com/v1/imgs/411/c95/f56811cafc00d7a8c9e4f9c44caa23d805-25-curb-your-enthusaism-costume-new-lede.rsquare.w700.jpg",
    profileImageHeight: "100",
    profileImageWidth: "100",
    username: "Scott Damon",
    placesAdded: 10
  },
  {
    imageSrc: "https://pyxis.nymag.com/v1/imgs/411/c95/f56811cafc00d7a8c9e4f9c44caa23d805-25-curb-your-enthusaism-costume-new-lede.rsquare.w700.jpg",
    profileImageHeight: "100",
    profileImageWidth: "100",
    username: "Jacob hardesty",
    placesAdded: 12,
  }
]
const title = "Mappy";
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
          <Users buttons={buttons} title={title} users={users} />
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
