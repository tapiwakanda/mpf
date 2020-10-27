import React, { Component } from 'react'
import axios from 'axios'
import { Button, TextField } from '@material-ui/core';
import Container from '@material-ui/core/Container';
//import { Grid } from '@material-ui/core';

class MainContent extends Component {
    constructor (props){
        super(props);
        this.state = {
            name: '',
            surname: '',
            staffCode: '',
            permissions: ''
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
                alert("User Added");
                this.resetForm();
            } else if (response.data.status === 'fail'){
                alert("Failed to add user")
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
                    <form onSubmit={this.handleSubmit}>
                    <TextField variant='outlined' label="Name" value={this.state.name} margin='normal' onChange={this.handleChange('name')}></TextField>
                    <TextField variant='outlined' label="Surname" value={this.state.surname} margin='normal' onChange={this.handleChange('surname')}></TextField>
                    <TextField variant='outlined' label="Staff Code" value={this.state.staffCode} margin='normal' onChange={this.handleChange('staffCode')}></TextField>
                    <TextField variant='outlined' label="Permissions" value={this.state.permissions} margin='normal' onChange={this.handleChange('permissions')} ></TextField>
                    <Button onClick={e => this.handleSubmit(e)} variant='contained' style={{backgroundColor: '#009677', margin: '20px'}}>Add New User</Button>
                    </form>
                    </div>      
                </Container>
            </div>
        )
    }
    
}

export default MainContent;