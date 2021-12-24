import { useEffect, useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { processCinemaList } from "../../redux/actions/cinema";
import { getMovieAction } from "../../redux/actions/dbCinema";
import { Item, Store, TotalResults} from "../../types";

type CinemaStore={
    cinema:{
        items: TotalResults,
        error: {errorCode:string }|null,
    }
}

const useMovies = () =>{

    const [page, setPage]= useState(1)
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()

    const  { items }  = useSelector((state: CinemaStore) => state.cinema)
    const dataMovieFb = useSelector((state: Store<Item>) => state.cinemaFb);

    useEffect(() => {
        dispatch(getMovieAction());
    }, []);

    useEffect ( () => {

        dispatch(processCinemaList(page, search))

    },[dispatch, page, search])

    return { items, 
            page, 
            setPage, 
            setSearch, 
            dataMovieFb
    }

}

export { useMovies }