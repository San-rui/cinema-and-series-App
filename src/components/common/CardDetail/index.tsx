import { Box } from "@mui/material";
import { FC } from "react";
import { useMovies } from "../../../hooks";

import { Video } from "../../../types";

import image from '../../../assets/images/image.png'
import './styles.scss'
import { useParams } from "react-router-dom";
import { processVideos } from "../../../redux/actions/videos";


type Props={
    videos:Video[], 
}

const CardDetail :FC<Props> = ({videos}) =>{

    const { id } = useParams<{id:string}>();
    const { items, dataMovieFb } = useMovies();

    const itemId= items.results?.find(item => (item.id).toString() === id);
    const itemFromFB= dataMovieFb.items.find(item => (item.id).toString() === id);


    const item = (itemId)? itemId : itemFromFB
    const srcImage = (!item?.poster_path)? `${image}`: `http://image.tmdb.org/t/p/w500${item.poster_path}`

    return (
        <Box className="details" sx={{ 
            width:['95%', '80%'],
            display: 'flex',
            justifyContent: 'center',
            flexDirection: ['column', 'column', 'row', 'row'],
            backgroundColor: '#041738',
            border:'1px solid #ff0054',
            color:'#ffffff'
            }} >

                <Box className="details-videos" sx={{ 
                    width: ['100%', '100%', '50%', '50%'], 
                    }}>
                    <h2 className="text-title">{item?.original_title? item.original_title : item?.original_name}</h2>
                    <p className="text-overview">{item?.overview}</p>
                    <div className="container-text">
                        <p>{
                            item?.release_date? 
                            <span>Release date: {item?.release_date}</span> :
                            <span>First air date: {item?.first_air_date}</span>
                            }
                        </p>
                        <p>Language: { item?.original_language }</p>
                        <h3 className="trailers">Trailers</h3>
                    </div>
                    <div className="container-videos">
                        {(videos.length >0) && videos?.map((video) => (
                            <iframe
                                id={`${video.id}`}
                                className="video"
                                width={videos.length === 1 ? '100%' : '45%'}
                                height={videos.length === 1 ? 330 : 200}
                                src={`https://www.youtube.com/embed/${video.key}`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        ))}
                    </div>
                </Box>
                <Box sx={{ 
                    width: ['100%', '100%', '50%', '50%'], 
                    }}>
                    <img
                        src={srcImage}
                        alt={item?.original_title? item.original_title : item?.original_name}
                        loading="lazy"
                        className="image"
                    />
                </Box>
        </Box>
    )
}

export { CardDetail }

function dispatch(arg0: (dispatch: any) => Promise<void>) {
    throw new Error("Function not implemented.");
}
