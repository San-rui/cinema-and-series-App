import { FC } from "react";

import StarRating from "../../../StarRating"

import { useMovies } from "../../../hooks";
import { Box, Button, Card, Typography } from "@mui/material";


const MovieList :FC = () =>{

    const { items } = useMovies();

    return (
        <Box sx={{
            display: 'grid',
            columnGap: 1,
            rowGap: 1,
            gridTemplateColumns: 'repeat(4, 1fr)',
            width: "80%"
        }}>
            {items?.map(item =>{
        
                return(
                    <div id={`${item.id}`}>
                        <Card sx={{ maxWidth: 307, maxHeight: 620, width: "19vw", height:"80vh", display: 'flex', flexDirection: 'column', justifyContent:"space-between"}} variant="outlined">
                            <img
                                src={`http://image.tmdb.org/t/p/w500${item.poster_path}`}
                                alt={item.original_title}
                                loading="lazy"
                            />
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                {item.original_title}
                            </Typography>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                {item.vote_average}
                            </Typography>
                            <StarRating stars={item.vote_average} />
                            <Button variant="contained">Eliminar</Button>
                        </Card>
                    </div>
                    
            )
            })}
        </Box>
    )
}

export { MovieList }