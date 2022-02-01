import { FC } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import './styles.scss'

const Footer:FC = ()=>{
    return (
        <footer className="footer">
            <p>Made with</p>
            <FavoriteBorderIcon sx={{color: '#10002b'}}/>
            <p>by San</p>
        </footer>
    )
}

export {Footer}
