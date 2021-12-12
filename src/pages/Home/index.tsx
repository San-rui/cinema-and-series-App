import { FC } from "react";
import { Layout } from "../../components/layout";
import { MovieList} from "../../components/parts"
import { WithAuth } from "../../hoc/WithAuth";


const Home :FC= () =>{

    
    return(
        <Layout>
            <div className="home">
                ESTOY EN LA HOME
                <MovieList/>
            </div>
        </Layout>
    )
    
}

export default WithAuth (Home)