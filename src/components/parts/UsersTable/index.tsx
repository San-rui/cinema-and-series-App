import { FC } from "react";
import { useUsers } from "../../../hooks";
import { User } from "../../../types";

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import { Box } from "@mui/material";
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import './styles.scss'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#ff0054',
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        backgroundColor: '#041738',
        color: theme.palette.common.white,
        borderColor: '#ff0054',
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const UsersTable: FC = () => {

    const { users, removeUserfromList } = useUsers();

    const deleteUser =(id:string)=>{

        removeUserfromList(id)
    }

    return (
        <Box className="container">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="right">Apellido</StyledTableCell>
                            <StyledTableCell align="right">	Email</StyledTableCell>
                            <StyledTableCell align="right">Fecha de nacimiento</StyledTableCell>
                            <StyledTableCell align="right">Role</StyledTableCell>
                            <StyledTableCell align="right"></StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {users?.items?.map((user: User) => (
                        <StyledTableRow key={user.name}>
                            <StyledTableCell component="th" scope="row">{user.name}</StyledTableCell>
                            <StyledTableCell align="right">{user.lastName}</StyledTableCell>
                            <StyledTableCell align="right">{user.email}</StyledTableCell>
                            <StyledTableCell align="right">{user.birthday}</StyledTableCell>
                            <StyledTableCell align="right">{user.role}</StyledTableCell>
                            <StyledTableCell align="right">
                                <IconButton aria-label="delete" size="large" onClick={()=>deleteUser(user.idDB)}>
                                    <DeleteIcon fontSize="inherit" sx={{ color: '#ff0054' }} />
                                </IconButton>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
        
    );
};

export { UsersTable };