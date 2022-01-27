import { FC } from "react";
import { CardDetail } from "../../components/common";
import { Layout } from "../../components/layout";
import { WithAuth } from "../../hoc/WithAuth";
import { useMovies } from "../../hooks";

import './styles.scss'

const Details :FC= () =>{

    const { videos } = useMovies()
    
    return(
        <Layout>
            <div className="details">
                <CardDetail videos={videos}/>
            </div>
        </Layout>
    )
}

export default WithAuth (Details)