import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';
import { API } from '../../appconfig';


const baseUrl = API.BASE_URL;

export function createNote(data) {
    console.log("CreateNote Method===>\n", data);
    return axios(baseUrl + '/createNote', {
        method: "POST",
        headers: {
            'token': data.token
        },
        data: data
    })
}
export function setReminder(data) {
    console.log("Update Remindewr==>\n", data);
    return axios(baseUrl + '/setReminder', {
        method: 'PUT',
        headers: {
            'token': data.token
        },
        data: data
    })
}


export function getNotes(data) {
    // console.log("Getting Notes Yet to Achieve\n Yet to hit the api");
    return axios(baseUrl + '/getNotes', {
        method: "GET",
        headers: {
            "token": data.token
        },

    }).then(function (response) {
        const result = response.data;  
          console.log("===================================>",response.data)
        return result;
    })
        .catch((err) => {
            console.log("ERROR IN SERVICES", err);
        })
}


// export function getTitle(data) {

//     return axios(baseUrl + '/getTitle', {
//         method: 'GET',
//         headers:{
//             'token':data.token
//         },
//     })
//     .then(function(response){
//         const titleResult=response.data
//         console.log("<><><><><><><><><><><><><><><>",response.data.result.title);
        
//         return titleResult;
//     })

//     .catch((err)=>{
//         console.log("error in getting Token",err);  
//     })
// }


export function editTitle(newTitle, token, card) {
    let data = {
        noteId: card._id,
        title: newTitle
    }
    return axios(baseUrl + '/editTitle', {
        method: 'PUT',
        headers: {
            'token': token
        },
        data: data
    })
}
export function editDescription(newDescription, token, card) {
    let data = {
        noteId: card._id,
        description: newDescription
    }
    return axios(baseUrl + '/editDescription', {
        method: 'PUT',
        headers: {
            'token': token
        },
        data: data
    })
}
export function UpdateColor(newColor, token, card) {
    console.log(token);

    let data = {
        noteId: card._id,
        color: newColor,
    }
    return axios(baseUrl + '/UpdateColor', {
        method: 'PUT',
        headers: {
            'token': token
        },
        data: data
    })
}
export function isArchived(newdata, arg2, token) {
    let data = {
        noteId: arg2._id,
        archive: newdata
    }
    console.log("arg2==>", arg2);
    console.log('Updated Archive==>/n', newdata);

    console.log("arg3(token)==>", token);
    return axios(baseUrl + '/isArchived', {
        method: 'PUT',
        headers: {
            'token': token
        },
        data: data
    })
}
export function isPinned(pinnedData, token, labelInfo) {
    let data = {
        noteId: labelInfo._id,
        pinned: pinnedData,
    }
    console.log("labelInfo==>", labelInfo);
    console.log("Update Pinned==>\n", pinnedData);
    console.log("token==>", token);

    return axios(baseUrl + '/isPinned', {
        method: 'PUT',
        headers: {
            'token': token
        },
        data: data
    })
}

export function editReminder(reminData, labelInfo, token) {

    console.log(",..,.,.,.",reminData);
    
    let data = {
        reminder: reminData,
        noteId: labelInfo._id
    }
    console.log("labelInfo==>", labelInfo);
    console.log("Edit reminder==>\n", reminData);
    console.log("token==>", token);
    return axios(baseUrl + '/editReminder', {
        method: 'PUT',
        headers: {
            'token': token
        },
        data: data
    })

}

export function isTrashed(data) {
    console.log("Update isTrashed==>\n", data);
    return axios(baseUrl + '/isTrashed', {
        method: 'PUT',
        headers: {
            'token': data.token
        },
        data: data
    })
}















// export function createNote(data) {
//     return axios.post(baseUrl + '/createNote', data,
//         {
//             headers: {
//                 'token': AsyncStorage.getItem('token')
//             }
//         })
// }
/*
function getNotes(data) {
    return axios(baseUrl+'/getNotes',{
        method:'GET',
       data:data
   })
   .then(function(response){
       console.log("inside getnotes is--",response.data);
       const token1=response.data;
       const token2=token1.substring(34)
       localStorage.setItem('GetNotesToken',token2);
      // toast('plz check your email..')
      ToastAndroid.showWithGravity("no token ",ToastAndroid.LONG,ToastAndroid.BOTTOM)
   })
   .catch(function(err){
       console.log(err);
    //   toast("user not found..")0
    ToastAndroid.showWithGravity("User Not Found",ToastAndroid.LONG,ToastAndroid.BOTTOM)
   })
}
*/


















// export {
    
//     getTitle
// }