import { useEffect, useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { processCinemaList } from "../../redux/actions/cinema";
import { getMovieAction } from "../../redux/actions/dbCinema";
import { processVideos } from "../../redux/actions/videos";
import { Item, Store, TotalResults, Video} from "../../types";

type CinemaStore={
    cinema:{
        items: TotalResults,
        error: {errorCode:string }|null,
    }
}

type VideosStore={
    videos:{
        videos: Video[],
        error: {errorCode:string }|null,
    }
}

const useMovies = () =>{
    
    const params = new URLSearchParams(window.location.search);
    const pageNumber= parseInt(params.get('page')!) || 1;
    const { id } = useParams<{id:string}>()
    
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()

    const  { items }  = useSelector((state: CinemaStore) => state.cinema)
    const  { videos }  = useSelector((state: VideosStore) => state.videos)
    const dataMovieFb = useSelector((state: Store<Item>) => state.cinemaFb);

    useEffect(() => {
        dispatch(getMovieAction());
    }, []);

    useEffect ( () => {
        
        dispatch(processCinemaList(pageNumber, search))

    },[dispatch, pageNumber, search])

    useEffect ( () => {

        if(id){
            dispatch(processVideos(Number(id)))
        }

    },[id])


    return { items,  
            setSearch, 
            dataMovieFb,
            videos 
    }

}

export { useMovies }