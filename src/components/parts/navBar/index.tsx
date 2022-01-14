import { FC, useState } from "react";
import { Link} from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

import './styles.scss'
import { useAuth } from "../../../hooks";

const NavBar :FC = () =>{

    const [open, setOpen] = useState('none');
    const [display, setDisplay] = useState('flex');

    const { currentUser, logout } = useAuth();
    const role=  currentUser.role;

    return (
        <>
            <Box className="navBar" sx={{ display: ['none','none','flex','flex'], justifyContent:'space-between', marginBottom: '2rem'}}>
                <Typography className='name-app'>
                    CINEMA
                </Typography>
                <Box>
                    <Link to='./' className='link-nav'>Home</Link>
                    <Link to='./movies' className='link-nav'>Movies</Link>
                    <Link to='./series' className='link-nav'>Series</Link>
                    {(role==='admin') && <Link to='./admin/1' className='link-nav'>Admin</Link>}
                    {(role==='admin') && <Link to='./users' className='link-nav'>Users</Link>}
                    <button className='nav-button'
                        onClick={logout}
                    >Exit</button>
                </Box>
            </Box>
            <Box sx={{ display: [display, display,'none','none'], backgroundColor: '#edf2f4', color: 'white', height: '3rem', marginBottom: '2rem'}}>
                <button onClick={() => {setOpen('flex'); setDisplay('none')}}>
                    <MenuIcon />
                </button>
            </Box>
            <Box sx={{ display:[open, open, 'none', 'none'], flexDirection:'column', backgroundColor: 'white', zIndex: 20, top:0,}}>
                <button onClick={() => {setOpen('none'); ; setDisplay('flex')}}>
                    <CloseIcon />
                </button>
                <Box sx={{ display:[open, open, 'none', 'none'], flexDirection:'column', backgroundColor: 'white', zIndex: 20, top:0,}}>
                    <Link to='./'>Home</Link>
                    <Link to='./movies'>Movies</Link>
                    <Link to='./series'>Series</Link>
                    {(role==='admin')&& <Link to='./admin/1' className='link-nav'>Admin</Link>}
                    {(role==='admin')&&<Link to='./users'>Users</Link>}
                    <button className='nav-button'
                        onClick={logout}
                    >Exit</button>
                </Box>
            </Box>
        </>
    );
}

export { NavBar }