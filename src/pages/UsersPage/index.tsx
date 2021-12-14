import { FC } from "react";

import { Layout } from "../../components/layout";
import { UsersTable } from "../../components/parts";

const UsersPage :FC= () =>{

    return(
        <Layout>
            <UsersTable/>
        </Layout>
    )
}

export default UsersPage