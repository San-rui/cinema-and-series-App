import { FC } from "react";

import { LoginForm } from "../../components/forms/LoginForm";
import { Layout } from "../../components/layout";
import  serie1  from '../../assets/images/serie1.jpeg';
import it from '../../assets/images/it.jpeg';
import bigBang from '../../assets/images/bigBang.jpeg'
import benjaminButton from '../../assets/images/benjamin-button.jpeg'

import Box from '@mui/material/Box';
import Carousel from 'react-material-ui-carousel';

import './styles.scss'

type Item={
    src: string,
    name: string,
}

const Login :FC= () =>{

    var items: Item[] = [
        {
            src: serie1,
            name: 'breaking bad',
        },
        {
            src: it,
            name:'it',
        },
        {
            src: bigBang,
            name:'bigBang',
        },
        {
            src: benjaminButton,
            name:'benjamin Button',
        }
    ]

    return(
        <Layout hidenHeader hidenFotter>
            
            <Box sx={{ flexWrap: 'wrap' }} className="login">
                <LoginForm/>
            </Box>
            <Carousel className="carousel" indicators={false}>
                {
                    items.map( (item, i) => {
                        return (
                            <Box sx={{backgroundImage: `url(${item?.src})`}} className="box-carousel-image">
                                
                            </Box>
                        )
                    } )
                }
            </Carousel>
        </Layout>
    )
}

export default Login