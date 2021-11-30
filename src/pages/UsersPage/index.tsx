import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Layout } from "../../components/layout";
import { processUsersList} from "../../redux/actions/usersList";

import { User } from "../../types";

type Store={
    usersList:{ 
        data: User[]
    }
}

const UsersPage :FC= () =>{

    const dispatch = useDispatch()

    dispatch(processUsersList())

    // const { data } = useSelector((state: Store) => state.usersList)
    // console.log(data)

    return(
        <Layout>
            <div className="User-table">
                TABLA CON LOS USUARIOS
            </div>
        </Layout>
    )
}

export default UsersPage