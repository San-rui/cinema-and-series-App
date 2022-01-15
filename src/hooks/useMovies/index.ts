import { useEffect, useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { processCinemaList } from "../../redux/actions/cinema";
import { getMovieAction } from "../../redux/actions/dbCinema";
import { Item, Store, TotalResults} from "../../types";

type CinemaStore={
    cinema:{
        items: TotalResults,
        error: {errorCode:string }|null,
    }
}

type ParamsType = {
    page: string,
};

const useMovies = () =>{
    
    const params = new URLSearchParams(window.location.search)
    const pageNumber= parseInt(params.get('page')!) || 1
    
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()

    const  { items }  = useSelector((state: CinemaStore) => state.cinema)
    const dataMovieFb = useSelector((state: Store<Item>) => state.cinemaFb);

    useEffect(() => {
        dispatch(getMovieAction());
    }, []);

    useEffect ( () => {

        
        dispatch(processCinemaList(pageNumber, search))

    },[dispatch, pageNumber, search])

    return { items,  
            setSearch, 
            dataMovieFb
    }

}

export { useMovies }