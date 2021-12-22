import { FC, useEffect, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { makeStyles } from "@material-ui/core/styles";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

import './styles.scss'
import { Item, User } from "../../../types";
import { useDispatch, useSelector } from "react-redux";
import { AddItemMovieAction } from "../../../redux/actions/dbCinema";
import { useMovies } from "../../../hooks";
import React from "react";

const useStyle = makeStyles({
    
    button:{ 
        backgroundColor: '#f2cc8f',
        color:"#3d405b",
        borderRadius:'1.5rem',
        boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
        height: '2.5rem',
        '&:hover': {
            backgroundColor: '#faedcd',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#e07a5f',
            borderColor: '#e07a5f',
        },
        '&:focus': {
            boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
        },
    },
    
    
})

type Props={
    item:Item,
}
type Store={
    user:{ 
        currentUser: User
    }
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
    ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

const ButtonToggle :FC<Props> = ({ item }) => {

    const classes = useStyle()

    const userLogged =useSelector((store:Store)=>store.user)

    const role=  localStorage.getItem('role')

    const {deleteItem, dataMovieFb } = useMovies()

    const itemToDelete=dataMovieFb.items?.find(element => element.id=== item.id)

    const value = itemToDelete? true : false

    const [selected, setSelected] = useState<boolean>(value);
    const [watched, setWatched] = useState(false);
    const [open, setOpen] = useState(false);
    const [text, setText]= useState<string>()

    const dispatch = useDispatch()

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
    
        setOpen(false);
    };

    const handleClick = () => {
        setOpen(true);
    };


    useEffect(() => {

        if(selected===true){
            
            if(!itemToDelete){
                const data= (item.media_type)?item : {...item, media_type: 'movie'}

                dispatch(AddItemMovieAction(data))
                setText('The item was succeeded saved')
            }
            
        } else if(selected===false){

            if(itemToDelete){
                deleteItem(itemToDelete.idDB)
                setText('The item was succeeded deleted')
            }
        } 

    }, [selected])

    
    return(
        <>
            {(role==='admin')? 
                <Button
                    value="check"
                    onClick={() => {
                        setSelected(!selected);
                        console.log(selected)
                        handleClick()
                    }}
                    className={classes.button}
                    >
                    {itemToDelete? <DeleteOutlineIcon/>: <AddIcon  />}
                    {itemToDelete? 'DELETE':'ADD'}
                </Button> : 
                <Button
                    value="check"
                    onClick={() => {
                        setWatched(!watched);
                
                    }}
                    className={classes.button}
                    >
                    {watched? <VisibilityOffIcon   /> : <VisibilityIcon/>}
                    {watched? 'NOT WATCHED':'WATCHED'}
                </Button>
            }
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} >
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%', backgroundColor:'#e9c46a' }}>
                    {text}
                </Alert>
            </Snackbar>
        </>
    )
}

export { ButtonToggle }