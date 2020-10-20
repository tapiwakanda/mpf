import { Button, Container, TextField } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom'
import React from 'react';
import { Grid } from '@material-ui/core';
import MenuBar from './Components/Layouts/MenuBar';
import TopNavBar from './Components/Layouts/TopNavBar'

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
                    <Container>
                        <div style={{
                            alignItems: 'center',
                            direction: 'column',
                            flexDirection: 'column',
                            justify: 'space-between'
                        }}>
                            <TextField label="Name" margin='normal'></TextField>
                            <TextField label="Surname" margin='normal'></TextField>
                            <TextField label="Staff Code" margin='normal'></TextField>
                            <Button variant='contained'>Add User</Button>
                        </div>
                    </Container>
                </Grid>
            </Grid>
        </div>
    );
}

export default Admin;