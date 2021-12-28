import { FC } from 'react';

import './styles.scss'

const Main:FC = ({children}) => {

    return (
            <main className="main">
                { children }
            </main>
    )
}

export { Main }