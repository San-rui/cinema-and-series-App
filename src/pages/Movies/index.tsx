import { FC } from "react";
import { CardList } from "../../components/common";
import { Layout } from "../../components/layout";
import { WithAuth } from "../../hoc/WithAuth";
import { useMovies } from "../../hooks";

import './styles.scss'

const Movies :FC= () =>{

    const { dataMovieFb } = useMovies()

    const movies = dataMovieFb.items.filter(item=> item.media_type==='movie')

    return(
        <Layout>
            <div className="movie">
                {movies.length>0? <CardList items={movies}/>: <p className="text-no-items">There are no items added yet...</p>}
            </div>
        </Layout>
    )
}

export default WithAuth (Movies)