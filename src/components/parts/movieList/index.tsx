import { Dispatch, FC, SetStateAction} from "react";

import { PaginationComponent } from "../Pagination";
import { Item } from "../../../types";
import { CardList } from "../../common";

type Props={
    items:Item[], 
    setPage: Dispatch<SetStateAction<number>>,
}

const MovieList :FC<Props> = ({items, setPage}) =>{

    return (
        <>
            <CardList items={items}/>
            <PaginationComponent setPage={setPage} page={472}/>
        </>
    )
}

export { MovieList }