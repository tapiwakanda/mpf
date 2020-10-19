import React from 'react';
import Login from './Login'
import Dashboard from './Dashboard'
import Admin from './components/Layouts/Admin'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact from="/" render={ props => <Login {...props} />} />
            <Route exact from="/Dashboard" render={ props => <Dashboard {...props} />} />
            <Route exact from="/AddUsers" render={ props => <Admin {...props} />} />
          </Switch>
        </BrowserRouter>

    </div>
  );
}

export default App;
