import { FC } from "react";
import { CardList } from "../../components/common";
import { Layout } from "../../components/layout";
import { WithAuth } from "../../hoc/WithAuth";
import { useMovies } from "../../hooks";

import './styles.scss'

const Series :FC= () =>{

    const { dataMovieFb } = useMovies()

    const series = dataMovieFb.items.filter(item=> item.media_type==='tv')

    return(
        <Layout>
            <div className="series">
                {series.length>0? <CardList items={series}/> : <p className="text-no-items">There are no items added yet...</p>}
            </div>
        </Layout>
    )
}

export default WithAuth (Series)