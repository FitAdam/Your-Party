import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'
import AddPerson from './AddPerson';
import AllPeople from './AllPeople';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/all" className="navbar-brand">
            FitAdam
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/all"} className="nav-link">
                All People
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/all"]} component={AllPeople} />
            <Route exact path="/add" component={AddPerson} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
