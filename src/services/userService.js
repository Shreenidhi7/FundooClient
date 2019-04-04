import axios from "axios" ;
//import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { ToastAndroid } from "react-native";


function userRegister(data) 
{
   return axios.post('/registration',data)
    .then(function(response){
        console.log("inside Registration response is--",response.data);
       
        this.props.navigation.navigate('Login')
    })
    .catch(function(err){
        console.log("error in Registration",err);
       // this.props.navigation.navigate('DashBoard')
     
    })
}
function userLogin(email,password){
    return axios.post('/login',
    {
        email:email,
        password:password,
    })
}

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
function forgot(email) {
    axios.post('/verifyUser',{
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



function reset(password,token) {
    return axios.post(`/resetpassword/${token}`,{'password':password},{
        headers:{
            'token':token
        }
    })
}


export{
    userRegister,
    userLogin,
    forgot,
    reset
}