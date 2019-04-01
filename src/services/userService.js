import axios from 'axios';
//import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
function userRegister(firstName,lastName,email,password) 
{

    return axios.post('/registration',{
        firstName:firstName,
        lastName:lastName,
        email:email,
        password:password
    })
}


function userLogin(email,password){
    return axios.post('/login',
    {
        email:email,
        password:password
    })
}

function forgot(email) {
    axios.post('/verifyUser',{
        email:email
    })
    .then(function(response){
        console.log("inside forgetPassword response is--",response.data);
        const token1=response.data;
        const token2=token1.substring(34)
        localStorage.setItem('verifyUserToken',token2);
        toast('plz check your email..')
    })
    .catch(function(err){
        console.log(err);
        toast("user not found..")
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