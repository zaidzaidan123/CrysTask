import React from 'react';
import {useNavigate} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from '../../../public/logo_crystask.png';

const HomeHeader = () => {
    const go = useNavigate();

    return (

        <AppBar position="static">
            <Toolbar>
                <img
                    src={logo}
                    alt="logo"
                    style={{width: '20px', height: 'auto'}}
                />
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    Crystask
                </Typography>
                <Button color="inherit" onClick={()=> go("/")}>Sign up</Button>
                <Button color="inherit" onClick ={()=>go("/SignIn")}>Login</Button>
            </Toolbar>
        </AppBar>
    );
}

export default HomeHeader
