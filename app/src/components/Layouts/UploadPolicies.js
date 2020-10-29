import React from 'react'
import { Button } from '@material-ui/core';
import Container from '@material-ui/core/Container';


export default function UploadPolicies() {
    return (
        <div className='UploadPolicies'>
            <Container
                alignItems= 'center' 
                direction= 'column' 
                justify= 'space-between'
                style={{padding: 15, paddingLeft: 45}} 
            >
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: 400,
                    minWidth: 300
                }}>
                <h1 style={{color: '#009677'}}>Upload New Policies</h1>
                <input type='file' />
                <Button variant='contained' style={{backgroundColor: '#009677', margin: '20px'}}>Upload</Button>
                </div>      
            </Container>
        </div>
    )
}
