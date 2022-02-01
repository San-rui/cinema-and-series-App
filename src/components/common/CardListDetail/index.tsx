import { FC } from "react";

import image from '../../../assets/images/image.png'

import StarRating from "../StarRating"
import { Box, Card, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

import { Item } from "../../../types";

import './styles.scss'
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { processVideos } from "../../../redux/actions/videos";

const useStyle = makeStyles({
    card:{ 
        backgroundColor: '#041738',
        border:'1px solid #ff0054',
        color:'#ffffff'
    }
})

type Props={
    items:Item[], 
}

const CardListDetail :FC<Props> = ({items}) =>{

    const { push } = useHistory();
    const classes = useStyle();
    const dispatch = useDispatch();

    const details =( data:number )=>{

        push(`/details/${data}`);
        dispatch(processVideos(data));
    }

    return (
        <>
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent:'center',
                width: "80%",
                }}>
                {items?.map(item =>{

                    const srcImage = (!item.poster_path)? `${image}`: `http://image.tmdb.org/t/p/w500${item.poster_path}`
                    
                    return(
                        <div id={`${item.id}`}>
                            <Card className={classes.card} sx={{ 
                                    width: ['12rem','10rem'],
                                    height: ['22rem','20rem'],
                                    padding: '1rem',
                                    borderRadius: '1rem', 
                                    margin:'1rem'
                                }} 
                                variant="outlined"
                                >
                                <div className='button-detail' onClick={()=>details(item.id)}>
                                    <img
                                        src={srcImage}
                                        alt={item.original_title}
                                        loading="lazy"
                                        className="image"
                                    />
                                    <Typography  sx={{ fontSize: 14, fontFamily: "'Quicksand', sans-serif", }}>
                                        {item.original_title? item.original_title : item.original_name}
                                    </Typography>
                                    <Typography sx={{ fontSize: 14, fontFamily: "'Quicksand', sans-serif",  }}>
                                        {item.vote_average}
                                    </Typography>
                                    <StarRating stars={item.vote_average} />
                                
                                </div>
                                
                            </Card>
                        </div>
                    )
                })}
            </Box>
        </>
    )
}

export { CardListDetail }