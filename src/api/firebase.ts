import { apiFirebase } from '../utils';
import { User} from "../types";
import { mapToArray } from '../helpers';


const getUsers = async (): Promise<User[]>  =>{
    const response =  await apiFirebase.get('/users.json');
    return mapToArray(response.data)
};

type Payload =Omit<User, 'id'>

const signup = async (data: Payload) =>{

    await apiFirebase.post('/users.json', data);
}


export { signup, getUsers }; 
