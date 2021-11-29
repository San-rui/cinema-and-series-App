import { FC } from "react";

import { useState } from "react";

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Item } from "../../../types";
import { getMovies } from "../../../api/cinema";
import { useEffect } from "react";


const MovieList :FC = () =>{

    const [movies, setMovies] = useState <Item[]>()

    //const { getMoviesApi } = useMovies();
    useEffect ( () => {
        if(!movies){
            getMovies().then(response=>{ setMovies(response)
                console.log(response)
            })
        }
        
    }, [movies])

    
    const showMovies = async() =>{
        await movies?.map(item=>{
            return(
                <div>Hola</div>
            )
        })
    }

    return (
        <div>
            {/* {showMovies()} */}
        </div>
    )
}

export { MovieList }