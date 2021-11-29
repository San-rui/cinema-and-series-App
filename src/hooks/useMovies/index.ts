import { getMovies } from "../../api/cinema"
import { Item } from "../../types";


const useMovies = () =>{

    const getMoviesApi = async () =>{
        try {
            await getMovies();
            
        } catch (err) {
            console.log(err);
            }
        
    }

    return { getMoviesApi }

}

export { useMovies }