import { FC } from "react";
import { CardList } from "../../components/common";
import { Layout } from "../../components/layout";
import { WithAuth } from "../../hoc/WithAuth";
import { useMovies } from "../../hooks";

const Series :FC= () =>{

    const { dataMovieFb } = useMovies()

    const movies = dataMovieFb.items.filter(item=> item.media_type==='tv')
    console.log(movies)

    return(
        <Layout>
            <div className="home">
            <CardList items={movies}/>
            </div>
        </Layout>
    )
}

export default WithAuth (Series)