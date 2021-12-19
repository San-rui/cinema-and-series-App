import { FC, useEffect, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import ToggleButton from '@mui/material/ToggleButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import './styles.scss'
import { Item } from "../../../types";
import { useDispatch } from "react-redux";
import { AddItemMovieAction } from "../../../redux/actions/dbCinema";

type Props={
    item:Item, 
}

const ButtonToggle :FC<Props> = ({item}) => {

    const [selected, setSelected] = useState(false);

    const dispatch = useDispatch()

    useEffect(() => {

        if(selected===true){
            dispatch(AddItemMovieAction(item))
        } 
        
    }, [selected])
    
    return(

        <ToggleButton
            value="check"
            selected={selected}
            onChange={() => {
                setSelected(!selected);
                
            }}
            >
            {selected? <DeleteOutlineIcon/>: <AddIcon  />}
            {selected? 'DELETE':'ADD'}
        </ToggleButton>
    )
}

export { ButtonToggle }