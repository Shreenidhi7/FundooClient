import axios from "axios";


const baseUrl = "http://192.168.0.91:3000";



export function getNotes() {
    console.log("getting notes in frontend");

    return axios.get(baseUrl+'/getNotes',{
        headers={
            token:localStorage.getItem('token')
        }
    });
    
}

export function getNotes()
{
    return axios.get('/getNotes',{
        headers:{
            'access-token':
        }
    }) 
}


function createNote(data)
{
    return axios(baseUrl+'/createNote',{
        method:'POST',
        data:data,
     
    })
}

/*function getAllNotes(data)
{
    return axios(baseUrl+'/getAllNotes',{
        method:'GET',
        data:data
    })
}
*/


function createArchiveNote(data)
{
    return axios(baseUrl+'/createArchiveNote',{
        method:'POST',
        data:data
    })
}




function getTitle(data)
{
    return axios(baseUrl+'/getTitle',{
        method:'GET',
        data:data,
       
    })
    
  
    
}

export{
    createNote,
    createArchiveNote,
  // getAllNotes,
  getNotes,
    getTitle
}