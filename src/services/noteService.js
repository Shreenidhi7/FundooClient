import axios from "axios";

const baseUrl = "http://192.168.0.16:3000";
/*
export function createNote(data) {
    console.log("Create note data from frontend==>",data);

    var headers={
        "Content-Type":"application/json",
        token:localStorage.getItem("token")
    };
    return axios.post(baseUrl+'/createNote',data,{
        headers:headers
    })
    
}

export function getNotes() {
    console.log("getting notes in frontend");

    return axios.get(baseUrl+'/getNotes',{
        headers={
            token:localStorage.getItem('token')
        }
    });
    
}

*/

function createNote(data)
{
    return axios(baseUrl+'/createNote',{
        method:'POST',
        data:data
    })
}



export{
    createNote
}