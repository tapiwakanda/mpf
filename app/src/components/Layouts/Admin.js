import React from 'react';
import MenuBar from './MenuBar';
import TopNavBar from './TopNavBar'
import MainContent from './MainContent' 
import Users from '../Users'
import UploadPolicies from './UploadPolicies' 
//import { Button, Container, TextField } from '@material-ui/core';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { Grid } from '@material-ui/core'; 
import { Dashboard } from '@material-ui/icons';


function Admin(){
    return(
        <div className="Admin">
            <Grid container style={{minHeight:'100vh'}}>
                <Grid item style={{minWidth: '18vw', float: 'left'}}>
                    <BrowserRouter>
                        <MenuBar/> 
                    </BrowserRouter>
                </Grid>
                <Grid item style={{width: '176vh', float: 'right'}}>
                    <TopNavBar />
                    <MainContent /> 
                </Grid>
            </Grid>
        </div>
    );
}

export default Admin;