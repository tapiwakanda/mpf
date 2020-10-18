import React from 'react';
import { Grid, TextField, InputAdornment } from '@material-ui/core'
import {AccountCircle, LockRounded} from '@material-ui/icons'
import OmPic from './Login.jpg'
import OmLogo from './Logo.png'
import Button from '@material-ui/core/Button'

function App() {
  return (
    <div className="App">
      <Grid container style={{minHeight:'100vh'}}>
        <Grid item xs={12} sm={6}>
          <img src={OmPic} style={{width: '100%', height: '100%', objectFit: 'cover', }} alt ='Old Mutual'/>
        </Grid>
        <Grid container item xs={12} sm={6}
          alignItems= 'center' 
          direction= 'column' 
          justify= 'space-between'
          style={{padding: 5}}>
          <div />
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: 400,
            minWidth: 300}}>
            <Grid container justify="center">
            <img src={OmLogo} width={200} alt ='logo'/>
            </Grid>
            <TextField 
              label='Username' 
              margin='normal' 
              InputProps={{ startAdornment: (<InputAdornment position="start"><AccountCircle /></InputAdornment>), }} />
            <TextField 
              label='Password'
              margin='normal' 
              InputProps={{ startAdornment: (<InputAdornment position="start"><LockRounded /></InputAdornment>),}} />
            <Button variant='contained' style={{background: '#009677', padding: '10px', margin: '20px', color: 'white'}}>
              Login
            </Button>
            <Button variant='outlined'>Need Help? Contact Help Desk.</Button>
          </div>
          <div />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
