import { FC} from "react";
import { Layout } from "../../components/layout";
import { UsersTable } from "../../components/parts/UsersTable";

const UsersPage :FC= () =>{

    return(
        <Layout>
            <UsersTable/>
        </Layout>
    )
}

export default UsersPage