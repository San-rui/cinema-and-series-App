import { FC } from "react";
import { CardList } from "../../components/common";
import { Layout } from "../../components/layout";
import { WithAuth } from "../../hoc/WithAuth";
import { useMovies } from "../../hooks";

const Home :FC= () =>{

    const { dataMovieFb } = useMovies()

    return(
        <Layout>
            <div className="home">
            <CardList items={dataMovieFb.items}/>
            </div>
        </Layout>
    )
}

export default WithAuth (Home)