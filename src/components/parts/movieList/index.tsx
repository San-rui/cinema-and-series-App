import { Dispatch, FC, SetStateAction} from "react";

import { PaginationComponent } from "../Pagination";
import { Item } from "../../../types";
import { CardList } from "../../common";

import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

type Props={
    items:Item[], 
    setPage: Dispatch<SetStateAction<number>>,
    pageNumber: number,
}

const MovieList :FC<Props> = ({items, setPage, pageNumber}) =>{

    return (
        <>
            <CardList items={items} icon1={<DeleteOutlineIcon/>} icon2={<AddIcon  />}/>
            <PaginationComponent setPage={setPage} page={pageNumber}/>
        </>
    )
}

export { MovieList }