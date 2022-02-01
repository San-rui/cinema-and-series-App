import { FC } from "react";
import { useHistory } from "react-router-dom";
import { CardDetail, CardListDetail} from "../../components/common";
import { Layout } from "../../components/layout";
import { WithAuth } from "../../hoc/WithAuth";
import { useMovies } from "../../hooks";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import './styles.scss'

const Details :FC= () =>{

    const { videos, dataMovieFb} = useMovies();
    const { goBack } = useHistory();
    
    return(
        <Layout>
            <div className="details-page">
                <CardDetail videos={videos}/>
                <button className="go-back" onClick={goBack}>
                    <ArrowBackIcon/>
                    <span>Go Back </span>
                </button>
                <CardListDetail items={dataMovieFb.items}/>
            </div>
        </Layout>
    )
}

export default WithAuth (Details)