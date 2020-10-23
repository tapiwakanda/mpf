import React from 'react'
import { Button } from '@material-ui/core/Button'

export default function UploadPolicies() {
    return (
        <div className='UploadPolicies'>
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
                <input type='file' />
                <Button variant='contained' style={{backgroundColor: '#009677', margin: '20px'}}>Add New User</Button>
                </div>      
            </Container>
        </div>
    )
}
