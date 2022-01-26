import { FC } from "react";
import { CardDetail } from "../../components/common";
import { Layout } from "../../components/layout";
import { WithAuth } from "../../hoc/WithAuth";
import { useMovies } from "../../hooks";

const Details :FC= () =>{

    const { videos } = useMovies()
    
    return(
        <Layout>
            <CardDetail videos={videos}/>
        </Layout>
    )
}

export default WithAuth (Details)