import { FC } from "react";

import { Layout } from "../../components/layout";
import { UsersTable } from "../../components/parts";
import { WithAuth } from "../../hoc";

import './styles.scss'

const UsersPage :FC= () =>{

    return(
        <Layout>
            <div className="users-table">
                <UsersTable/>
            </div>
        </Layout>
    )
}

export default WithAuth(UsersPage) 