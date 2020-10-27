import React from 'react';
import Login from './Login'
import Dashboard from './Dashboard'
import Upload from './Components/Layouts/Upload'
import Admin from './Components/Layouts/Admin'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact from="/" render={ props => <Login {...props} />} />
            <Route exact from="/dashboard" render={ props => <Dashboard {...props} />} />
            <Route exact from="/AddNewUsers" render={ props => <Admin {...props} />} />
            <Route exact from="/AddNewBatch" render={ props => <Upload {...props} />} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;

