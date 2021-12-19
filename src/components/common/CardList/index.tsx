import { FC } from "react";

import StarRating from "../../../StarRating"
import { Box, Card, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { purple } from '@mui/material/colors';

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
            
                    return(
                        <div id={`${item.id}`}>
                            <Card sx={{ maxWidth: 307, maxHeight: 620, width: "19vw", height:"33rem", display: 'flex', flexDirection: 'column', justifyContent:"space-between", padding: "1rem", borderRadius: '1rem', backgroundColor:'#ffffff10', backdropFilter: 'blur(12px)'}} variant="outlined">
                                <img
                                    src={`http://image.tmdb.org/t/p/w500${item.poster_path}`}
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
                                <ButtonToggle/>
                            </Card>
                        </div>
                    )
                })}
            </Box>
        </>
    )
}

export { CardList }