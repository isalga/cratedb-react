import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Items from "./pages/Items";
import { useRequestTables } from './api/hooks';
import { ROOT_PATH, ITEMS_PATH } from './config';

const App = () => {
  const [{tables, loading, error }] = useRequestTables();

  if (loading) {
    return <p>loading...</p>
  }

  if (error) {
    return <p>Error while getting database tables</p>
  }

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={ROOT_PATH}>/</Link>
            </li>
            { tables && tables.map(name => (
              <li key={`nav-${name[0]}`}>
                <Link to={ITEMS_PATH.replace(':tableName', name[0])}>{name[0]}</Link>
              </li>
            )) }
          </ul>
        </nav>
        <div className="page-container">
          <Switch>
            <Route exact path={ROOT_PATH}>
              <Dashboard />
            </Route>
            <Route path={ITEMS_PATH}>
              <Items />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;