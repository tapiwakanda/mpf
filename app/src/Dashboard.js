import React from 'react';
import MenuBar from './Components/Layouts/MenuBar' 
import { Grid } from '@material-ui/core';
import TopNavBar from './Components/Layouts/TopNavBar'

import { BrowserRouter } from 'react-router-dom'


function Dashboard() {
  return (
    <div className="Dashboard">
        <Grid container style={{minHeight:'100vh'}}>
          <Grid item style={{minWidth: '18vw', float: 'left'}}>
            <BrowserRouter>
            <MenuBar/>
            </BrowserRouter>
          </Grid>
          <Grid item style={{width: '176vh', float: 'right'}}>
            <TopNavBar />
          </Grid>
        </Grid>
    </div>
  );
}

export default Dashboard;
