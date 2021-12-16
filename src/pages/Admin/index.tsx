import { FC } from "react";
import { Layout } from "../../components/layout";
import { MovieList} from "../../components/parts"
import { WithAuth } from "../../hoc/WithAuth";
import { useMovies } from "../../hooks";

const Admin :FC= () =>{

    const { items, setPage} = useMovies();

    return(
        <Layout>
            <div className="home">
                <MovieList items={items} setPage={setPage}/>
            </div>
        </Layout>
    )
    
}

export default WithAuth (Admin)