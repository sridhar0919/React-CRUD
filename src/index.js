import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import App from './App';
import User from './components/User';
import Userdetails from './components/Userdetails';
import Editdata from './components/Editdata';
import Userform from './components/Userform';

const routing = (
  <Router>
    <h1>CRUD OPERATION</h1>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/create">Create User</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/users" component={User} />
        <Route exact path="/users/:id" component={Userdetails} />
        <Route exact path="/editUser/:id" component={Editdata} />
        <Route exact path="/create" component={Userform} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
