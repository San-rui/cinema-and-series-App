import React, { Dispatch, FC, SetStateAction } from 'react'
import  Pagination  from '@material-ui/lab/Pagination'

import './styles.scss'

type Props={
    page:number, 
    setPage: Dispatch<SetStateAction<number>>,
    
}

const PaginationComponent: FC <Props> = ({setPage, page}) => {

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    return (
        <div className="pagination">
            <Pagination 
                onChange={handleChange}
                count={page} 
                variant="outlined" 
                color="primary"
            />
        </div>
    )
}

export { PaginationComponent }
