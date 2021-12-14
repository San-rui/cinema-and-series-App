import { FC } from "react";
import { useUsers } from "../../../hooks";
import { User } from "../../../types";

const UsersTable: FC = () => {

    const { users } = useUsers();

    return (
        <table>
        <thead>
            <th>Email</th>
            <th>Password</th>
            <th>Nombre</th>
        </thead>
        <tbody>
            {users?.items?.map((user: User) => (
            <tr>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.name}</td>
            </tr>
            ))}
            {users.loading && (
            <tr>
                <td colSpan={4}>Cargando usuario</td>
            </tr>
            )}
        </tbody>
        </table>
    );
};

export { UsersTable };