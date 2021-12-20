import { Dispatch, FC, SetStateAction} from "react";

import { PaginationComponent } from "../Pagination";
import { Item } from "../../../types";
import { CardList } from "../../common";

type Props={
    items:Item[], 
    setPage: Dispatch<SetStateAction<number>>,
    pageNumber: number,
}

const MovieList :FC<Props> = ({items, setPage, pageNumber}) =>{

    return (
        <>
            <CardList items={items}/>
            <PaginationComponent setPage={setPage} page={pageNumber}/>
        </>
    )
}

export { MovieList }