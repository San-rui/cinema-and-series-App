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
}

const ButtonToggle :FC<Props> = ({item}) => {

    const {deleteItem, dataMovieFb } = useMovies()

    const itemToDelete=dataMovieFb.items?.find(element => element.id=== item.id)

    const value = itemToDelete? true : false

    const [selected, setSelected] = useState<boolean>(value);

    const dispatch = useDispatch()

    useEffect(() => {

        if(selected===true){
            
            if(!itemToDelete){
                dispatch(AddItemMovieAction(item))
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
            {itemToDelete? <DeleteOutlineIcon/>: <AddIcon  />}
            {itemToDelete? 'DELETE':'ADD'}
        </ToggleButton>
    )
}

export { ButtonToggle }