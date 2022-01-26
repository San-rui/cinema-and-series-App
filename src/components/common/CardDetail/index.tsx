import { FC } from "react";

import { Item, Video } from "../../../types";


type Props={
    videos:Video[], 
}

const CardDetail :FC<Props> = ({videos}) =>{


    return (
        <>
            <div className="details">
                <div >
                {(videos.length >0) && videos?.map((video) => (
                    <div>
                        <iframe
                            width="100%"
                            height={videos.length === 1 ? 320 : 215}
                            src={`https://www.youtube.com/embed/${video.key}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                ))}
                </div>
            </div>
        </>
    )
}

export { CardDetail }