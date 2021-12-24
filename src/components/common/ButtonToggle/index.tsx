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
import { useDispatch} from "react-redux";
import { AddItemMovieAction, patchMovieListItem } from "../../../redux/actions/dbCinema";
import { useMovies, useUsers } from "../../../hooks";
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
    const { currentUser } = useUsers()
    const dispatch = useDispatch()

    const role=  localStorage.getItem('role')

    const {deleteItem, dataMovieFb } = useMovies()
    const itemSelected=dataMovieFb.items.find(element => element.id=== item.id)
    const value = itemSelected? true : false

    const [selected, setSelected] = useState<boolean>(value);
    const [watched, setWatched] = useState(false);
    const [open, setOpen] = useState(false);
    const [text, setText]= useState<string>()
    
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
            
            if(!itemSelected){
                const data= (item.media_type)?item : {...item, media_type: 'movie'}

                dispatch(AddItemMovieAction(data))
                setText('The item was succeeded saved')
            }
            
        } else if(selected===false){

            if(itemSelected){
                deleteItem(itemSelected.idDB)
                setText('The item was succeeded deleted')
            }
        }

        if(watched===true){

            const array = itemSelected?.watched;

            //aca hay un error porque lo que quiero guardar es el idDB pero no me lo reconoce 

            if(array?.includes(currentUser.email) === false){
                array?.push(currentUser.email);

                const data= (watched) && {...item, watched: array}
                dispatch(patchMovieListItem (data, itemSelected?.idDB))
                setText('The item was succeeded saved as WATCHED')
            }
            

        } else if(watched===false){

            console.log("el array:", itemSelected?.watched )
            
            const arr =itemSelected?.watched
            console.log("arr inicial ", arr)
            var i = arr?.indexOf( currentUser.email );

            if(i && i!==-1){
                arr?.splice( i, 1 );
                console.log("arr final ", arr, i)
                
                //const data= (watched) && {...item, watched: arr}
                if(watched){
                    const data = {...item, watched: arr}
                    dispatch(patchMovieListItem (data, itemSelected?.idDB))
                }
                
                setText('The item was succeeded removed from WATCHED')
            }

        }

    }, [selected, watched])

    return(
        <>
            {(role==='admin')? 
                <Button
                    value="check"
                    onClick={() => {
                        setSelected(!selected);
                        handleClick()
                    }}
                    className={classes.button}
                    >
                    {itemSelected? <DeleteOutlineIcon/>: <AddIcon  />}
                    {itemSelected? 'DELETE':'ADD'}
                </Button> : 
                <Button
                    value="check"
                    onClick={() => {
                        setWatched(!watched);
                        handleClick()
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