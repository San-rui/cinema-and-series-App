import { useEffect, useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { processCinemaList } from "../../redux/actions/cinema";
import { deleteMovieListItem, getMovieAction } from "../../redux/actions/dbCinema";
import { processSearchMulti } from "../../redux/actions/searchMulti";
import { Item, Store} from "../../types";

type CinemaStore={
    cinema:{
        items: Item[],
        error: {errorCode:string }|null,
    }
}

type SearchStore={
    searchMulti:{
        itemsSearch: Item[],
        error: {errorCode:string }|null,
    }
}

type movieDBStore={
        data: Item[],
        error: {errorCode:string }|null,
}

const useMovies = () =>{
    const [page, setPage]= useState(1)
    const [search, setSearch] = useState('')

    const dispatch = useDispatch()

    const  { items }  = useSelector((state: CinemaStore) => state.cinema)
    const  { itemsSearch }  = useSelector((state: SearchStore) => state.searchMulti)
    const dataMovieFb = useSelector((state: Store<Item>) => state.cinemaFb);


    useEffect(() => {
        dispatch(getMovieAction());
    }, []);

    const deleteItem = (idDB:string | undefined) =>{
        dispatch(deleteMovieListItem (idDB))
    }

    useEffect ( () => {

        dispatch(processCinemaList(page))
        dispatch(processSearchMulti(page, search))

    },[dispatch, page, search])

    return { items, page, setPage, itemsSearch, setSearch, search, deleteItem, dataMovieFb}

}

export { useMovies }