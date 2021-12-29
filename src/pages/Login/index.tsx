import { FC } from "react";

import { LoginForm } from "../../components/forms/LoginForm";
import { Layout } from "../../components/layout";
import  cinema  from '../../assets/images/cinema.png'

import Box from '@mui/material/Box';

import './styles.scss'

const Login :FC= () =>{

    return(
        <Layout hidenHeader hidenFotter>
            
            <Box sx={{ flexWrap: 'wrap' }} className="login">
                <LoginForm/>
                <Box sx={{width: ['100%', '80%', '80%', '50%' ]}}>
                    <img src={cinema} className="cinema-image" alt="cinema"/>
                </Box>
                
            </Box>
        </Layout>
    )
}

export default Login