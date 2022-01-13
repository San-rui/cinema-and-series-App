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

    const { page } = useParams<ParamsType>();
    const pageNumber= Number(page) 

    const [search, setSearch] = useState('')
    const dispatch = useDispatch()

    const  { items }  = useSelector((state: CinemaStore) => state.cinema)
    const dataMovieFb = useSelector((state: Store<Item>) => state.cinemaFb);

    useEffect(() => {
        dispatch(getMovieAction());
    }, []);

    useEffect ( () => {

        dispatch(processCinemaList(pageNumber, search))
        console.log(typeof page, pageNumber)

    },[dispatch, page, search])

    return { items,  
            setSearch, 
            dataMovieFb
    }

}

export { useMovies }