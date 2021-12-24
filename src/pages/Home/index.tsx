import { FC } from "react";
import { CardList } from "../../components/common";
import { Layout } from "../../components/layout";
import { WithAuth } from "../../hoc/WithAuth";
import { useMovies, useUsers } from "../../hooks";

import './styles.scss'

const Home :FC= () =>{

    const { dataMovieFb } = useMovies()
    const { currentUser } = useUsers()
    console.log(currentUser)

    return(
        <Layout>
            <div className="home">
            <div className='hello-text'>
                <span>Hola </span>
                <span>{currentUser.name}</span>
            </div>
            <CardList items={dataMovieFb.items}/>
            </div>
        </Layout>
    )
}

export default WithAuth (Home)