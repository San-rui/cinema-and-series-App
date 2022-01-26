import { FC, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

import './styles.scss'

import { Item } from "../../../types";
import { useAuth, useItems, useMovies } from "../../../hooks";
import React from "react";

type Props={
    item:Item,
}


const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ButtonToggle :FC<Props> = ({ item }) => {

    const {addItem, removeItem, text, watchedItem, notWatchedItem, } = useItems()
    const { currentUser } = useAuth()

    const { dataMovieFb } = useMovies()
    const itemSelected=dataMovieFb.items.find(element => element.id=== item.id)
    const itemWatched= itemSelected?.watched?.includes(currentUser.idDB)

    const value = itemSelected? true : false

    const [selected, setSelected] = useState<boolean>(value);
    const [watched, setWatched] = useState(false);
    const [open, setOpen] = useState(false);
    
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleClick = () => {
        setOpen(true);
    };

    const SnackbarColorWatched= itemWatched? '#e59500' : '#ff0054'
    const SnackbarColorAdded= itemSelected? '#e59500' : '#ff0054'
    
    return(
        <>
            {(currentUser.role==='admin')? 
                <button
                    className="taggle-button"
                    value="check"
                    style={{backgroundColor:SnackbarColorAdded}}
                    onClick={(e) => {
                        e.stopPropagation()
                        setSelected(!selected);
                        handleClick()
                        !selected? addItem(itemSelected, item) : removeItem(itemSelected)
                    }}
                    >
                    {itemSelected? <DeleteOutlineIcon className="taggle-button-icon"/>: <AddIcon  className="taggle-button-icon"/>}
                    {itemSelected? 'DELETE':'ADD'}
                </button> : 
                <button
                    className="taggle-button"
                    style={{backgroundColor:SnackbarColorWatched}}
                    value="check"
                    onClick={(e) => {
                        e.stopPropagation()
                        setWatched(!watched);
                        handleClick()
                        console.log(watched)
                        !itemWatched? watchedItem(itemSelected, item): notWatchedItem(itemSelected, item)
                        
                    }}
                    >
                    {itemWatched? <VisibilityOffIcon className="taggle-button-icon"/> : <VisibilityIcon className="taggle-button-icon"/>}
                    {itemWatched? 'NOT WATCHED':'WATCHED'}
                </button>
            }
            {(currentUser.role==='admin')? 
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} >
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%', backgroundColor:SnackbarColorAdded}}>
                    {text}
                </Alert>
            </Snackbar>: 
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} >
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%', backgroundColor: SnackbarColorWatched}}>
                    {text}
                </Alert>
            </Snackbar>
            }            

        </>
    )
}

export { ButtonToggle }