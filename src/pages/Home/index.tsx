import { FC } from "react";
import { Layout } from "../../components/layout";
import { WithAuth } from "../../hoc/WithAuth";


const Home :FC= () =>{

    return(
        <Layout>
            <div className="home">
                Home
            </div>
        </Layout>
    )
    
}

export default WithAuth (Home)