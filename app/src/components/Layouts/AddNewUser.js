import React, { Component } from 'react';
import MenuBar from './Components/Layouts/MenuBar';
import TopNavBar from './Components/Layouts/TopNavBar'
import MainContent from './Components/Layouts/MainContent'
import { BrowserRouter } from 'react-router-dom'
import { Grid } from '@material-ui/core';


function Admin(){
    return(
        <div className="Admin">
            <Grid container style={{minHeight:'100vh'}}>
                <Grid item xs={12} sm={2}>
                    <BrowserRouter>
                        <MenuBar/> 
                    </BrowserRouter>
                </Grid>
                <Grid item xs={12} sm={10}>
                    <TopNavBar />
                    <MainContent />
                </Grid>
            </Grid>
        </div>
    );
}

export default Admin;