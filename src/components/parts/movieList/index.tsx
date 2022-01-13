import { Dispatch, FC, SetStateAction} from "react";

import { PaginationComponent } from "../Pagination";
import { Item } from "../../../types";
import { CardList } from "../../common";

type Props={
    items:Item[], 
    pageNumber: number,
}


const MovieList :FC<Props> = ({items, pageNumber}) =>{

    return (
        <>
            <CardList items={items} />
            <PaginationComponent page={pageNumber}/>
        </>
    )
}

export { MovieList }