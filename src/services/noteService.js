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
        console.log("===================================>", response.data)
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

    console.log(",..,.,.,.", reminData);

    let data = {
        reminder: reminData,
        noteId: labelInfo._id
    }
    console.log("labelInfo==>",labelInfo);
    console.log("Edit reminder==>\n",reminData);
    console.log("token>", token);
    return axios(baseUrl + '/editReminder', {
        method: 'PUT',
        headers: {
            'token': token
        },
        data: data
    })

}

export function isTrashed(trashData, labelInfo, token) {

    let data = {
        trash: trashData,
        noteId: labelInfo._id
    }

    console.log(" In Trash labelInfo===>", labelInfo);
    console.log("Update isTrashed==>\n", trashData);
    console.log("token==>", token);


    return axios(baseUrl + '/isTrashed', {
        method: 'PUT',
        headers: {
            'token':token
        },
        data: data
    })
}




export function createLabel(labelArray,token) {

    var data={
        label:labelArray,
        token:token
   }
    console.log("AddLabel Method===>\n", data.label);
    console.log("token+_+_+_+_+",data.token);
    
    return axios(baseUrl + '/addLabel', {
        method: "POST",
        headers: {
            'token': token
        },
        data: data
    })
}


export function getLabels(data) {
    // console.log("Getting Notes Yet to Achieve\n Yet to hit the api");
    return axios(baseUrl + '/getLabels', {
        method: "GET",
        headers: {
            "token": data.token
        },

    }).then(function (response) {
        const result = response.data;
        // console.log("========label label label label========>", response.data)
        console.log("========label label label label========>", response.data)
        return result;
    })
        .catch((err) => {
            console.log("ERROR IN SERVICES", err);
        })
}

//real one with normal 
// export function setProfilePic(Image,Token){

//     var data={
//         image:Image,
//         token:Token
//     }
//     console.log("in noteservices image><><><>",data.image);
//     console.log("in noteservices token<><><><>",data.token);

   
//         return axios(baseUrl +'/setProfilePic',{
//             method:'PUT',
//             headers:{
//                 'token':Token
//             },  
//             data: data
//         })

//     .then(function(response) {
//         const result=response.data
//         console.log("image data  coming back to update===>",response.data);
//         return result
//     }).catch((err)=>{
//         console.log("Error in services",err);
//     })

// }




export function setProfilePic(formdata){
    // var data={
    //     image:Image,
    //     token:Token
    // }
    // console.log("in noteservices image><><><>",data.image);
    // console.log("in noteservices token<><><><>",data.token);  

console.log("11111111111111111111111111111111111111111111111111111111111111",formdata);


// return axios(baseUrl+'/setProfilePic',{
//     method:"PUT",
//     data:formdata,
//     headers:{
//         Accept:'application/json',
//         'Content-Type':'multipart/form-data'
//     }
// })
// }

return axios({
    url: baseUrl+'/setProfilePic',
    method: 'PUT',
    data: formdata.formData,
    headers: {
   
      'token':formdata.token
    }
  })


}



// fetch('http://192.168.1.101:3000/products',{
//   method: 'post',
//   headers: {
//     'Content-Type': 'multipart/form-data',
//   },
//   body: formdata
//   }).then(response => {
//     console.log("image uploaded")
//   }).catch(err => {
//     console.log(err)
//   })  
// });


export function pushNotification(data) {
    console.log("Data from front to back ===>", data);
    var headers = {
      token: AsyncStorage.getItem("token")
    };
    return axios.post("/pushNotification", data, {
      headers: headers
    });
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

















