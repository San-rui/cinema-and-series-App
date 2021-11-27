
import { FC } from "react";
import { Layout } from "../../components/layout";
import { SingupForm } from "../../components/forms"

import './styles.scss'

const SingUp :FC = () =>{

    return(
        <Layout hidenHeader>
            <div className="singup">
                <SingupForm/>
            </div>
        </Layout>
    )
    
}

export default SingUp