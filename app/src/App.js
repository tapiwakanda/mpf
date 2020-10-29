import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import UserData from './Components/Layouts/UserData'
import MainContent from './Components/Layouts/MainContent'
import Users from './Components/Users' 
import { Grid } from '@material-ui/core';
import { Dashboard } from '@material-ui/icons';
import MenuBar from './Components/Layouts/MenuBar';
import TopNavBar from './Components/Layouts/TopNavBar'
import UploadPolicyData from './Components/Layouts/UploadPolicyData'
//import UploadPolicies from './Components/Layouts/UploadPolicies' 
import Login from './Login'
import Admin from './Components/Layouts/Admin'
//import Permissions from './Components/Layouts/Permissions'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/AddNewUsers" component={Admin} />
          <Route path="/AddNewBatch" component={UploadPolicyData} />
          <Route path="/Users" component={UserData} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;

