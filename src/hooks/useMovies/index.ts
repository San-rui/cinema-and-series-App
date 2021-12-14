import { useEffect } from "react";
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
    const dispatch = useDispatch()

    const  { items }  = useSelector((state: CinemaStore) => state.cinema)

    useEffect ( () => {
        dispatch(processCinemaList())

    },[dispatch])

    return { items }

}

export { useMovies }