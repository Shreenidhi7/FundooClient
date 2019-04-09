import axios from "axios";

export function createNote(data) {
    console.log("Create note data from frontend==>",data);

    var headers={
        "Content-Type":"application/json",
        token:localStorage.getItem("token")
    };
    return axios.post('/createNote',data,{
        headers:headers
    })
    
}