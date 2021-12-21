import { FC, useEffect, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import ToggleButton from '@mui/material/ToggleButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


import './styles.scss'
import { Item } from "../../../types";
import { useDispatch } from "react-redux";
import { AddItemMovieAction } from "../../../redux/actions/dbCinema";
import { useMovies } from "../../../hooks";

type Props={
    item:Item,
}

const ButtonToggle :FC<Props> = ({ item }) => {

    const role=  localStorage.getItem('role')

    const {deleteItem, dataMovieFb } = useMovies()

    const itemToDelete=dataMovieFb.items?.find(element => element.id=== item.id)

    const value = itemToDelete? true : false

    const [selected, setSelected] = useState<boolean>(value);
    const [watched, setWatched] = useState(false);

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

    const renderButtonAdmin =()=>{
        if(role==='admin'){
            return (
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
        } else{
            return (
                <ToggleButton
                    value="check"
                    selected={watched}
                    onChange={() => {
                        setWatched(!watched);
                
                    }}
                    >
                    {itemToDelete? <VisibilityIcon/>: <VisibilityOffIcon   />}
                    {itemToDelete? 'NOT WATCHED':'WATCHED'}
                </ToggleButton>
            )

        }

    }
    
    return(
        <>
            {(role==='admin')? <ToggleButton
                    value="check"
                    selected={selected}
                    onChange={() => {
                        setSelected(!selected);
                        console.log(selected)
                    }}
                    >
                    {itemToDelete? <DeleteOutlineIcon/>: <AddIcon  />}
                    {itemToDelete? 'DELETE':'ADD'}
                </ToggleButton> : <ToggleButton
                    value="check"
                    selected={watched}
                    onChange={() => {
                        setWatched(!watched);
                
                    }}
                    >
                    {itemToDelete? <VisibilityIcon/>: <VisibilityOffIcon   />}
                    {itemToDelete? 'NOT WATCHED':'WATCHED'}
                </ToggleButton>
            }
        </>
    )
}

export { ButtonToggle }