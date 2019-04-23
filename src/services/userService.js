

/************************************************************************************************************************************************* */

import axios from "axios" ;
//import { toast } from "react-toastify";

import { ToastAndroid } from "react-native";

const baseUrl = "http://192.168.0.91:3000";

/*
function userRegister(firstName,lastName,email,password)
{
    return axios.post('/registration',{
        firstName:firstName,
        lastName:lastName,
        email:email,
        password:password
    })
}
*/



function userRegister(data) {

    
    return axios(baseUrl + '/registration', {
        method: "POST",
        
        data:data
    })
}

// function userRegister(data) 
// {
//    return axios.post(baseUrl + '/registration',data)
//     .then(function(response){
//         console.log("inside Registration response is--",response.data);
       
//        // this.props.navigation.navigate('Login')
//     })
//     .catch(function(err){
//         console.log("error in Registration",err);
//        // this.props.navigation.navigate('DashBoard')
     
//     })
// }




function userLogin(data) {

    return axios(baseUrl+ '/login',{
        method:"POST",
        data:data
    })
}


// function userLogin(data){
//     axios.post(baseUrl+'/login',data)
//     .then(function(response){
//         localStorage.setItem('token',response.data.token)
//        // localStorage.setItem('firstName',response.data.firstName)
//         ToastAndroid.showWithGravity("Login Successfull!!",ToastAndroid.LONG,ToastAndroid.BOTTOM)
//         localStorage.setItem('token1',true)
//         this.props.props.navigation.navigate('DashBoard')
//       // windows.location.href('DashBoard')
   
//     })
//     .catch(function(err){
//         console.log(err);
//         ToastAndroid.showWithGravity("Enter Valid Email or Password",ToastAndroid.LONG,ToastAndroid.BOTTOM)
        
//     }) 
// }





/*
function userLogin(Email,Password){
     axios.post('/login',
    {
        'email':Email,
        'password':Password
    })
    .then(function(response){
        console.log("inside login response is--",response.data);
        const token1=response.data;
        const token2=token1.substring(34)
        localStorage.setItem('verifyUserToken',token2);
        this.props.navigation.navigate('DashBoard')
    })
    .catch(function(err){
        console.log("error in login",err);
     
    })
}
*/
function forgot(data) {
     return axios(baseUrl+'/verifyUser',{
         method:'POST',
        data:data
    })
    .then(function(response){
        console.log("inside forgetPassword response is--",response.data);
        const token1=response.data;
        const token2=token1.substring(34)
        localStorage.setItem('verifyUserToken',token2);
       // toast('plz check your email..')
       ToastAndroid.showWithGravity("Enter Valid Email",ToastAndroid.LONG,ToastAndroid.BOTTOM)
    })
    .catch(function(err){
        console.log(err);
     //   toast("user not found..")
     ToastAndroid.showWithGravity("User Not Found",ToastAndroid.LONG,ToastAndroid.BOTTOM)
    })
}


/*function forgot(email) {
    axios.post(baseUrl+'/verifyUser',{
        email:email
    })
    .then(function(response){
        console.log("inside forgetPassword response is--",response.data);
        const token1=response.data;
        const token2=token1.substring(34)
        localStorage.setItem('verifyUserToken',token2);
       // toast('plz check your email..')
       ToastAndroid.showWithGravity("Enter Valid Email",ToastAndroid.LONG,ToastAndroid.BOTTOM)
    })
    .catch(function(err){
        console.log(err);
     //   toast("user not found..")
     ToastAndroid.showWithGravity("User Not Found",ToastAndroid.LONG,ToastAndroid.BOTTOM)
    })
}
*/

function reset(password,token)
{
    return axios(baseUrl+`/resetpassword/${token}`,{'password':password},{
        method:"POST",
        }
    )
}










/*
function reset(password,token) {
    return axios.post(baseUrl +`/resetpassword/${token}`,{'password':password},{
        headers:{
            'token':token
        }
    })
}
*/

export{
    userRegister,
    userLogin,
    forgot,
    reset
}



/***************************************************************************************************************************************** */


