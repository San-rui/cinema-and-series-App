import { FC } from "react";
import { useDispatch } from "react-redux";

import { LoginForm } from "../../components/forms/LoginForm";
import { Layout } from "../../components/layout";
import { processAuth } from "../../redux/actions/auth";

import './styles.scss'

const Login :FC= () =>{

    const dispatch = useDispatch()
    dispatch(processAuth())

    return(
        <Layout hidenHeader>
            <div className="login">
                <LoginForm/>
            </div>
        </Layout>
    )
    
}

export default Login