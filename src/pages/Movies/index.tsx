import { FC } from "react";
import { CardList } from "../../components/common";
import { Layout } from "../../components/layout";
import { WithAuth } from "../../hoc/WithAuth";
import { useMovies } from "../../hooks";

const Movies :FC= () =>{

    const { dataMovieFb } = useMovies()

    const movies = dataMovieFb.items.filter(item=> item.media_type==='movie')
    console.log(movies)

    return(
        <Layout>
            <div className="home">
            <CardList items={movies}/>
            </div>
        </Layout>
    )
}

export default WithAuth (Movies)