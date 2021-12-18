import { FC, useState } from "react";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';

import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import CloseIcon from '@mui/icons-material/Close';

import { Link} from 'react-router-dom';



const NavBar :FC = () =>{

    const [open, setOpen] = useState('flex');
    const [display, setDisplay] = useState('flex');


    return (
        <>
            <Box sx={{ display: ['none','none','flex','flex'], backgroundColor: 'red', color: 'white', height: '3rem', marginBottom: '2rem'}}>
                <Typography>Cinema</Typography>
                <Box>
                    <Link to='./'>Home</Link>
                    <Link to='./movies'>Movies</Link>
                    <Link to='./series'>Series</Link>
                    <Link to='./admin'>Admin</Link>
                    <Link to='./users'>Users</Link>
                    <Button>Exit</Button>
                </Box>
            </Box>
            <Box sx={{ display: [display, display,'none','none'], backgroundColor: 'red', color: 'white', height: '3rem', marginBottom: '2rem'}}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="end"
                    onClick={() => {setOpen('flex'); setDisplay('none')}}
                    sx={{ ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                </IconButton>
                </Box>
                <Box sx={{ display:open, flexDirection:'column', backgroundColor: 'white', zIndex: 20, top:0,}}>
                    <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="end"
                    onClick={() => {setOpen('none'); ; setDisplay('flex')}}
                    sx={{ ...(open && { display: 'none' }) }}
                    >
                        <CloseIcon />
                        
                </IconButton>
                <Box sx={{ display:open, flexDirection:'column', backgroundColor: 'white', zIndex: 20, top:0,}}>
                            <Link to='./'>Home</Link>
                            <Link to='./movies'>Movies</Link>
                            <Link to='./series'>Series</Link>
                            <Link to='./admin'>Admin</Link>
                            <Link to='./users'>Users</Link>
                        <Button>Exit</Button>
                    </Box>
            </Box>
        </>
    );
}

export { NavBar }