import React from 'react';
import MenuBar from './Components/Layouts/MenuBar'
import { Grid } from '@material-ui/core';
import TopNavBar from './Components/Layouts/TopNavBar'

import { BrowserRouter } from 'react-router-dom'


function Dashboard() {
  return (
    <div className="Dashboard">
        <Grid container style={{minHeight:'100vh'}}>
          <Grid item xs={12} sm={2}>
            <BrowserRouter>
            <MenuBar/>
            </BrowserRouter>
          </Grid>
          <Grid item xs={12} sm={10}>
            <TopNavBar />
          </Grid>
        </Grid>
    </div>
  );
}

export default Dashboard;
