import { FC, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import ToggleButton from '@mui/material/ToggleButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import './styles.scss'

const ButtonToggle :FC = () => {

    const [selected, setSelected] = useState(false);
    
    return(

        <ToggleButton
            value="check"
            selected={selected}
            onChange={() => {
                setSelected(!selected);
            }}
            >
            {selected? <DeleteOutlineIcon/>: <AddIcon  />}
            {selected? 'DELETE':'ADD'}
        </ToggleButton>
    )
}

export { ButtonToggle }