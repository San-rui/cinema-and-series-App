import { FC, useState } from "react";
import { Link} from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import cine from '../../../assets/images/cine.png';

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
                <div className="cointainer-logo">
                    <img src={cine} alt="cine" className="cinema-logo"/>
                    <Typography className='name-app'>
                        CINEMA
                    </Typography>
                </div>
                <Box>
                    <Link to='/' className='link-nav'>Home</Link>
                    <Link to='/movies' className='link-nav'>Movies</Link>
                    <Link to='/series' className='link-nav'>Series</Link>
                    {(role==='admin') && <Link to='/admin?page=1' className='link-nav'>Admin</Link>}
                    {(role==='admin') && <Link to='/users' className='link-nav'>Users</Link>}
                    <button className='nav-button'
                        onClick={logout}
                    >Exit</button>
                </Box>
            </Box>
            <Box className="nav-responsive" sx={{ display: [display, display,'none','none'], color: 'white', height: '3rem', marginBottom: '2rem'}}>
                <button onClick={() => {setOpen('flex'); setDisplay('none')}} className="button-menu">
                    <MenuIcon className="menu"/>
                </button>
                <div className="cointainer-logo">
                    <img src={cine} alt="cine" className="cinema-logo"/>
                    <Typography className='name-app'>
                        CINEMA
                    </Typography>
                </div>
            </Box>
            <Box  className="nav-responsive-options" sx={{ display:[open, open, 'none', 'none'], zIndex: 20, top:0,}}>
                <button className="close-button" onClick={() => {setOpen('none'); ; setDisplay('flex')}}>
                    <CloseIcon />
                </button>
                <Box  sx={{ display:[open, open, 'none', 'none'], flexDirection:'column', backgroundColor: 'white', zIndex: 20, top:0,}}>
                    <Link to='/' className='link-nav'>Home</Link>
                    <Link to='/movies' className='link-nav'>Movies</Link>
                    <Link to='/series' className='link-nav'>Series</Link>
                    {(role==='admin')&& <Link to='/admin?page=1' className='link-nav'>Admin</Link>}
                    {(role==='admin')&&<Link to='/users'className='link-nav'>Users</Link>}
                    <button className='nav-button'
                        onClick={logout}
                    >Exit</button>
                </Box>
            </Box>
        </>
    );
}

export { NavBar }