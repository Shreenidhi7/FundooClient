import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';



const baseUrl = "http://192.168.0.13:3000";

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



export function getNotes(data) {
    console.log("came into this pit hole");
    return axios(baseUrl + '/getNotes', {
        method: "GET",
        headers: {
            "token": data.token
        },

    }).then(function (response) {
        const result = response.data;
       // console.log("===================================>",response.data);

        return result;
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