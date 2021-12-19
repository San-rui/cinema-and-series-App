import { FC } from 'react';
import './style.scss'

type Props ={
    stars: number
}

const StarRating:FC <Props>  = ({ stars } ) =>{

    const maxStars = 5;
    const starPercentage = ((stars/2.09) / maxStars) * 100;
    const starPercentageRounded = Math.round(starPercentage);

    const StarStyles = () => {
        return {
            width: starPercentageRounded + "px"
        };
    };

    return (
        <div className="stars-gray">
            <div className="stars-yellow" style={StarStyles()}></div>
        </div>
    );
}


export default StarRating


