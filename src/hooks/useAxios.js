import Axios from 'axios';
import { v4 as uuid} from 'uuid'; 
import { useState } from 'react'; 

const useAxios = (url) => {
    const [state, setState] = useState([]); 

    const addItems = async (parameter) => {
        if(parameter) {
            url = `${url}${parameter}`; 
        }


        const res = await Axios.get(url);

        setState(state => [...state, {...res.data, id: uuid()}])
    }

    return [state, addItems]; 
}

export default useAxios; 