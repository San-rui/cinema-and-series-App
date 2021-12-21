import { FC, useEffect, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import ToggleButton from '@mui/material/ToggleButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import './styles.scss'
import { Item } from "../../../types";
import { useDispatch } from "react-redux";
import { AddItemMovieAction } from "../../../redux/actions/dbCinema";
import { useMovies } from "../../../hooks";

type Props={
    item:Item,
    icon1: FC,
    icon2: FC,
}

const ButtonToggle :FC<Props> = ({item, icon1, icon2}) => {

    const {deleteItem, dataMovieFb } = useMovies()

    const itemToDelete=dataMovieFb.items?.find(element => element.id=== item.id)

    const value = itemToDelete? true : false

    const [selected, setSelected] = useState<boolean>(value);

    const dispatch = useDispatch()

    useEffect(() => {

        if(selected===true){
            
            if(!itemToDelete){
                const data= (item.media_type)?item : {...item, media_type: 'movie'}

                dispatch(AddItemMovieAction(data))
            }
            
        } else if(selected===false){

            if(itemToDelete){
                deleteItem(itemToDelete.idDB)
            }
        } 

    }, [selected])
    
    return(

        <ToggleButton
            value="check"
            selected={selected}
            onChange={() => {
                setSelected(!selected);
                console.log(selected)
            }}
            >
            {itemToDelete? icon1: icon2}
            {itemToDelete? 'DELETE':'ADD'}
        </ToggleButton>
    )
}

export { ButtonToggle }