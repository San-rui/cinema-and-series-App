import { FC } from "react";
import { LoginForm } from "../../components/forms/LoginForm";
import { Layout } from "../../components/layout";

import './styles.scss'

const Login :FC= () =>{

    return(
        <Layout hidenHeader>
            <div className="login">
                <LoginForm/>
            </div>
        </Layout>
    )
    
}

export default Login