import axios from "axios";

const myState = {
    name : 'Albin',
    age : 21,
    contact : '8994170473'
}

export const sendEmail = async (data) =>{
    try{
        const result = axios.get("http://albin23.infinityfreeapp.com/mailapi.php")

        return result.data
    }
    catch(ex){
        return ex
    }
}

export const getMyState = () =>{

    return myState
}
