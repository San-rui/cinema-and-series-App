import { FC } from "react";
import { NavBar } from "../../parts";

import './styles.scss'

const Header:FC = () => {
    
    return (
        <header className="header">
            <NavBar/>
        </header>
    )
}

export { Header }