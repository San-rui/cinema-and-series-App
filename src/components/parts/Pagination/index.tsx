import React, { FC } from 'react'
import  Pagination  from '@material-ui/lab/Pagination'

import './styles.scss'
import { useHistory } from 'react-router-dom'

type Props={
    page:number, 
}


const PaginationComponent: FC <Props> = ({ page }) => {

    const { push } = useHistory();

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        push(`/admin?page=${value}`)
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
