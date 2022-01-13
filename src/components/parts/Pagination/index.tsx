import React, { Dispatch, FC, SetStateAction } from 'react'
import  Pagination  from '@material-ui/lab/Pagination'

import './styles.scss'
import { Link, useHistory } from 'react-router-dom'

type Props={
    page:number, 
}

const PaginationComponent: FC <Props> = ({ page }) => {

    const { push } = useHistory();

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        push(`/admin/${value}`)
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
