import React, {Component} from 'react';
import { Grid, TextField, InputAdornment } from '@material-ui/core'
import {AccountCircle, LockRounded} from '@material-ui/icons'
import OmPic from './Login.jpg'
import OmLogo from './Logo.png'
import Button from '@material-ui/core/Button'

class Login extends Component {
  constructor (props){
    super(props);
    this.state = {
        staffCode: '',
        password: ''
    }

}

handleSubmit(e){
    e.preventDefault();
    console.log(this.state)
    /* axios({
        method: "POST",
        url: "http://localhost:3002/send",
        data: this.state
    }).then((response) =>{
        if (response.data.status === 'success'){
            alert("User Logged In");
            this.resetForm();
        } else if (response.data.status === 'fail'){
            alert("Failed to Login user")
        }
    }) */
}


// handle change
handleChange = TextField => e =>{
    this.setState({
        [TextField]: e.target.value
    });
}
  render(){
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
                variant="outlined"
                onChange={this.handleChange('staffCode')}
                value={this.state.staffCode}
                label='Username' 
                margin='normal' 
                InputProps={{ startAdornment: (<InputAdornment position="start"><AccountCircle /></InputAdornment>), }} />
              <TextField 
                variant="outlined"
                onChange={this.handleChange('password')}
                type="password"
                value={this.state.password}
                label='Password'
                margin='normal' 
                InputProps={{ startAdornment: (<InputAdornment position="start"><LockRounded /></InputAdornment>),}} />
              <Button variant='contained' onClick={e => this.handleSubmit(e)} style={{background: '#009677', padding: '10px', margin: '20px', color: 'white'}}>
                Login
              </Button>
              <Button  variant='outlined'>Need Help? Contact Help Desk.</Button>
            </div>
            <div />
          </Grid>
        </Grid>
      </div>
    );
  }
  
}

export default Login;
