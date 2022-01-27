import { Box } from "@mui/material";
import { FC } from "react";
import { useMovies } from "../../../hooks";

import { Video } from "../../../types";

import image from '../../../assets/images/image.png'
import './styles.scss'


type Props={
    videos:Video[], 
}

const CardDetail :FC<Props> = ({videos}) =>{

    const { itemId } = useMovies()
    const srcImage = (!itemId?.poster_path)? `${image}`: `http://image.tmdb.org/t/p/w500${itemId.poster_path}`

    console.log(itemId?.original_title? itemId.original_title : itemId?.original_name)

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
                    <h2 className="text-title">{itemId?.original_title? itemId.original_title : itemId?.original_name}</h2>
                    <p className="text-overview">{itemId?.overview}</p>
                    <div className="container-videos">
                        {(videos.length >0) && videos?.map((video) => (
                            <Box className="video" sx={{ 
                                width: ['100%','100%','100%', '45%'],
                                //maxWidth: '25rem',
                                minWidth: '10rem'
                                }}>
                                <iframe
                                    width='100%'
                                    height={videos.length === 1 ? 330 : 200}
                                    src={`https://www.youtube.com/embed/${video.key}`}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </Box>
                        ))}
                    </div>

                </Box>
                <Box sx={{ 
                    width: ['100%', '100%', '50%', '50%'], 
                    }}>
                    <img
                        src={srcImage}
                        alt={itemId?.original_title? itemId.original_title : itemId?.original_name}
                        loading="lazy"
                        className="image"
                    />
                </Box>
        </Box>
    )
}

export { CardDetail }