import React from 'react'
import { Avatar, Button, Grid2, Paper, TextField, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import {useNavigate} from "react-router-dom";

function SignUp() {
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }

    const go = useNavigate();
    return (
        <Grid2>
            <Paper elevation={20} style={paperStyle}>
                <Grid2 align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid2>
                <form>
                    <TextField fullWidth label='Name' placeholder='Enter your name' />
                    <TextField fullWidth label='Email' placeholder='Enter your Email' />
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }} >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                    <TextField fullWidth label='Phone Number' placeholder='Enter your phone number' />
                    <TextField fullWidth label='Password' />
                    <TextField fullWidth label='Confirm Password' />

                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Button type='submit' variant='contained' color='primary'
                            onClick ={()=>go("/SignIn")}>Sign Up</Button>
                </form>
            </Paper>


        </Grid2>
    )
}
export default SignUp;