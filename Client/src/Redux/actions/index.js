import axios from 'axios';



export function editUsers(payload){
    return async function (dispatch){
      const put = await axios.put("http://localhost:3001/disable/", payload);
      return put;
    }
}