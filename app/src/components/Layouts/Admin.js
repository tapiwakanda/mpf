import React from 'react';
import MenuBar from './MenuBar';
import TopNavBar from './TopNavBar'
import MainContent from './MainContent' 
//import { Button, Container, TextField } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom'
import { Grid } from '@material-ui/core'; 


function Admin(){
    return(
        <div className="Admin">
            <Grid container style={{minHeight:'100vh'}}>
                <Grid item xs={12} sm={3}>
                    <BrowserRouter>
                        <MenuBar/> 
                    </BrowserRouter>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <TopNavBar />
                    <MainContent />
                </Grid>
            </Grid>
        </div>
    );
}

export default Admin;