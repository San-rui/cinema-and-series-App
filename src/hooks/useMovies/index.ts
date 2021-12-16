import { useEffect, useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { processCinemaList } from "../../redux/actions/cinema";
import { Item, Store } from "../../types";

type CinemaStore={
    cinema:{
        items: Item[],
        error: {errorCode:string }|null,
    }
}


const useMovies = () =>{
    const [page, setPage]= useState(1)
    const dispatch = useDispatch()

    const  { items }  = useSelector((state: CinemaStore) => state.cinema)

    useEffect ( () => {
        dispatch(processCinemaList(page))

    },[dispatch, page])

    return { items, page, setPage }

}

export { useMovies }