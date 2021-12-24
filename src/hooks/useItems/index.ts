import { useState } from "react"
import { useDispatch } from "react-redux"
import { AddItemMovieAction, deleteMovieListItem, patchMovieListItem } from "../../redux/actions/dbCinema"
import { Item } from "../../types"
import { useAuth } from "../useAuth"

const useItems = () =>{

    const [text, setText]= useState<string>()
    const dispatch = useDispatch()
    const { currentUser } = useAuth()

    //--------ADMIN AGREGA ELEMENTOS -------
    const addItem = async(itemSelected: Item | undefined, item: Item) => {
        
        if(!itemSelected){

            setText('The item was succeeded saved')
            const data= (item.media_type)?item : {...item, media_type: 'movie'}
            await dispatch(AddItemMovieAction(data))
            
        }
    }

    //--------ADMIN ELIMINA ELEMENTOS -------
    const removeItem= async(itemSelected: Item | undefined) => {

        if(itemSelected){
            
            setText('The item was succeeded deleted')
            await  dispatch(deleteMovieListItem (itemSelected.idDB))

        }
    }

    //--------USER AGREGA ELEMENTOS -------
    const watchedItem = async (itemSelected: Item | undefined, item: Item) => {

        setText('The item was succeeded saved as WATCHED')
        const array = itemSelected?.watched? itemSelected?.watched: [];

            if(array?.includes(currentUser.email) === false){

                array?.push(currentUser.email);
                console.log("el array final", array, currentUser)

                const data={...item, watched: array}
                await dispatch(patchMovieListItem (data, itemSelected?.idDB))
                
            }
    }

    //--------USER ELIMINA ELEMENTOS -------
    const notWatchedItem = async (itemSelected: Item | undefined, item: Item) => {
        
        const array =itemSelected?.watched? itemSelected?.watched: [];

        if(array?.includes(currentUser.email) === true){

            setText('The item was succeeded removed from WATCHED')

            const i = array?.indexOf( currentUser.email);
            array?.splice( i, 1 );
            const data = {...item, watched: array}
            await dispatch(patchMovieListItem (data, itemSelected?.idDB))
        }
    }

    return{ 
        addItem,
        removeItem,
        watchedItem, 
        notWatchedItem, 
        text
    }

}

export { useItems }