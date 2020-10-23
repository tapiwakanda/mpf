import React from 'react'
import { Button, TextField } from '@material-ui/core';
import Container from '@material-ui/core/Container';
//import { Grid } from '@material-ui/core';

function MainContent() {
    return (
        <div className='MainContent'>
            <Container
                alignItems= 'center' 
                direction= 'column' 
                justify= 'space-between'
                style={{padding: 5}} 
            >
                <div style={{
                    display: 'flex', 
                    flexDirection: 'column',
                    maxWidth: 400,
                    minWidth: 300
                }}>
                <h1 style={{color: '#009677'}}>Add New User</h1>
                <TextField variant='outlined' label="Name" margin='normal'></TextField>
                <TextField variant='outlined' label="Surname" margin='normal'></TextField>
                <TextField variant='outlined' label="Staff Code" margin='normal'></TextField>
                <TextField variant='outlined' label="Permissions" margin='normal'></TextField>
                <Button variant='contained' style={{backgroundColor: '#009677', margin: '20px'}}>Add New User</Button>
                </div>      
            </Container>
        </div>
    )
}

export default MainContent;
