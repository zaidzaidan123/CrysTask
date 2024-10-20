import * as React from 'react';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { Avatar, Button, FormControlLabel, TextField, Typography, Link, Grid2 } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function SignIn() {
    const paperStyle ={padding: 20, height: '50vh', width:280, margin:"20px auto" }
    const avatarStyle ={backgroundColor:'#2395a5'}
    const btnstyle={margin: '8px 0'}
    
    return (
        <Grid2>
            <Paper elevation={10} style={paperStyle}>
                <Grid2 align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                <h2>Sign In</h2>
                </Grid2>
                <TextField label='Username' placeholder='Enter username' fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type ='password' fullWidth required/>
                <FormControlLabel 
                control={
                    <Checkbox             
                    name="checkedB"
                    color="primary"
                    />
                    }
                    label="Remember me"
                 />    
        
        <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
        <Typography>
            <Link href="#">
            Forgot password ?
            </Link>
        </Typography>
        <Typography> Do you have an account ?
            <Link href="#">
            Sign Up
            </Link>
        </Typography>
            </Paper>
        </Grid2>
    );
}
export default SignIn