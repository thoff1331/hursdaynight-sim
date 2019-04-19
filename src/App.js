import React, { Component } from "react";
import { HashRouter, Link } from "react-router-dom";
import routes from "./components/routes";
import Item from "./components/Item";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <nav className="nav">
            <div>Trev's Teams</div>
            <div>
              <Link to="/">
                <div>Home</div>
              </Link>
              <Link to="/lakers">
                <div>Lakers</div>
              </Link>
              <Link to="/braves">
                <div>Braves</div>
              </Link>
              <Link to="/jazz">
                <div>Jazz</div>
              </Link>
              {routes}
            </div>
          </nav>
        </div>
      </HashRouter>
    );
  }
}

export default App;
