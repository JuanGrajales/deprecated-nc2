import React, { Component } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Juan from "./components/Juan";
import Profile from "./components/Profile";
let users = ["Juan", "Jess", "Jax"];

class App extends Component {
  userLinks = () => {
    const links = users.map((user) => {
      return (
        <li>
          <Link to={`/profile/${user}`}>{user}</Link>
        </li>
      );
    });
    return links;
  };
  render() {
    return (
      <BrowserRouter>
        <div>
          <h2>Nav</h2>
          <ul>
            {this.userLinks()}
            {/* <li>
              <Link to="/juan">Juan Profile</Link>
            </li>
            <li>
              <Link to="/profile">Generic Profile</Link>
            </li>
            <li>Jess Profile</li> */}
          </ul>
          <h2>
            Switch will choose the route that has the path matching the url
          </h2>
          <Switch>
            <Route exact path="/juan" render={(props) => <Juan {...props} />} />
            <Route
              exact
              path="/profile/:username"
              render={(props) => <Profile {...props} />}
            />
            {/* <Route
              exact
              path="/juan"
              render={(props) => (
                <Juan {match={props.match} history={props.history}} />
              )}
            /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

// How to create dynamic pages?

// How to create a param?
