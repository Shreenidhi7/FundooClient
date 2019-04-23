import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';


const baseUrl = "http://192.168.0.91:3000";


export function getNotes() {

    return axios.get(baseUrl + '/getNotes', {
        headers: {
            'token': AsyncStorage.getItem('token')
        }
    })
}

/*
function createNote(data)
{
    return axios(baseUrl+'/createNote',{
        method:'POST',
        data:data,
     
    })
} */

export function createNote(data) {
    console.log("create note call", data);
    return axios(baseUrl+'/createNote', {
        method: "POST",
        headers: {
            "token": AsyncStorage.getItem("token")
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


















function getTitle(data) {
    return axios(baseUrl + '/getTitle', {
        method: 'GET',
        data: data,

    })



}

export {
    //  createNote,
    //  getNotes,
    getTitle
}