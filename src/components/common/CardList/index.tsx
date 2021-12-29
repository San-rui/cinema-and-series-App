import { FC } from "react";

import image from '../../../assets/images/image.png'

import StarRating from "../StarRating"
import { Box, Card, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

import { Item } from "../../../types";
import { ButtonToggle } from "../index"

import './styles.scss'


const useStyle = makeStyles({
    card:{ 
        backgroundColor: '#81b29a',
    }
})

type Props={
    items:Item[], 
}

const CardList :FC<Props> = ({items}) =>{

    const classes = useStyle()

    return (
        <>
            <Box sx={{
                display: ['flex', 'flex', 'grid', 'grid'],
                flexWrap: 'wrap', 
                columnGap: 4,
                gridTemplateColumns: ['repeat 1','repeat(2, 1fr)','repeat(3, 1fr)','repeat(4, 1fr)'],
                width: "100%",
                justifyContent: 'center',
            }}>
                {items?.map(item =>{

                    const srcImage = (!item.poster_path)? `${image}`: `http://image.tmdb.org/t/p/w500${item.poster_path}`
            
                    return(
                        <div id={`${item.id}`}>
                            <Card className={classes.card} sx={{ 
                                width: ['80vw', '40vw', '30vw', '17rem' ],
                                height: ['38rem', '40rem', '40rem', '33rem'], 
                                display: 'flex', 
                                flexDirection: 'column', 
                                justifyContent:"space-between", 
                                padding: "1rem", 
                                borderRadius: '1rem', 
                                marginBottom:'1.5rem'}} 
                                variant="outlined">
                                <img
                                    src={srcImage}
                                    alt={item.original_title}
                                    loading="lazy"
                                    className="image"
                                />
                                <Typography sx={{ fontSize: 14, fontFamily: "'Quicksand', sans-serif", }} color="text.secondary" gutterBottom>
                                    {item.original_title}
                                </Typography>
                                <Typography sx={{ fontSize: 14, fontFamily: "'Quicksand', sans-serif",  }} color="text.secondary" gutterBottom>
                                    {item.vote_average}
                                </Typography>
                                <StarRating stars={item.vote_average} />
                                <ButtonToggle item={item}/>
                            </Card>
                        </div>
                    )
                })}
            </Box>
        </>
    )
}

export { CardList }