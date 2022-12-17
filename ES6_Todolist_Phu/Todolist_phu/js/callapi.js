const URL = "https://6388cedaa4bb27a7f7924897.mockapi.io/api";

class CallApi {  
    callApiAll(uri, method, data){
        return axios({
            url:`${URL}/${uri}`,
            method,
            data,
        })
    }
}
export default CallApi