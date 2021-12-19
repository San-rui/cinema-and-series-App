import { FC } from "react";

import StarRating from "../StarRating"
import { Box, Card, Typography } from "@mui/material";

import { Item } from "../../../types";
import { ButtonToggle } from "../index"

type Props={
    items:Item[], 
}

const CardList :FC<Props> = ({items}) =>{

    return (
        <>
            <Box sx={{
                display: 'grid',
                columnGap: 4,
                rowGap: 4,
                gridTemplateColumns: 'repeat(4, 1fr)',
                width: "100%"
            }}>
                {items?.map(item =>{

                    const srcImage = (!item.poster_path)? "https://cdn4.vectorstock.com/i/1000x1000/39/98/error-404-page-not-found-vector-14463998.jpg": `http://image.tmdb.org/t/p/w500${item.poster_path}`
            
                    return(
                        <div id={`${item.id}`}>
                            <Card sx={{ maxWidth: 307, maxHeight: 620, width: "19vw", height:"33rem", display: 'flex', flexDirection: 'column', justifyContent:"space-between", padding: "1rem", borderRadius: '1rem', backgroundColor:'#ffffff10', backdropFilter: 'blur(12px)'}} variant="outlined">
                                <img
                                    src={srcImage}
                                    alt={item.original_title}
                                    loading="lazy"
                                />
                                <Typography sx={{ fontSize: 14, fontFamily: "'Quicksand', sans-serif", color:'white' }} color="text.secondary" gutterBottom>
                                    {item.original_title}
                                </Typography>
                                <Typography sx={{ fontSize: 14, fontFamily: "'Quicksand', sans-serif", color:'white'  }} color="text.secondary" gutterBottom>
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