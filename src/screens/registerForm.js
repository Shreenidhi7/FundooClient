import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";

import { ToastAndroid } from "react-native";


import {userRegister} from "../services/userService";





export default class Register extends Component {
    constructor() {
        super();
        this.state={
          
            FirstName:'',
            LastName:'',
            Email:'',
            Password:'',
            ConfirmPassword:'',
            regform:{}
           
        }
    }
  /*  validate(text,type)
    {
        alph=/^[a-zA-Z]+$/
        num=/^[0-9]+$/
        if(type=='FirstName')
        {
            if(alph.test(text))
            {
                this.setState({
                    FirstNameValidate:true,
                })
            }
            else
            {
            this.setState({
                FirstNameValidate:false,
            })
            }
        }
        else if(type=='password')
        {
            if(num.test(text))
            {
                this.setState({
                    FirstNameValidate:true,
                })
            }
            else
            {
            this.setState({
                FirstNameValidate:false,
            })
            }
        }
        }
    }
*/

validateFirstName(text) {
    testFirstName=/^[a-zA-Z]*$/
     {
        if(testFirstName.test(text)){
            this.setState({
                FirstName:text
            })
        }
    else {
        this.setState({
            FirstName:false
        })
    }
}
}

validateLastName(text) {
    testLastName=/^[a-zA-Z]*$/
     {
        if(testLastName.test(text)){
            this.setState({
                LastName:text
            })
        }
    else {
        this.setState({
            LastName:false
        })
    }
}
}

validateEmail(text) {
    testEmail=  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    //   /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
     {
        if(testEmail.test(text)){
            this.setState({
                Email:text
            })
        }
    else {
        this.setState({
            Email:false
        })
    }
}
}

validatePassword(text) {
    testPassword= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/
    //        /^[a-zA-Z]\w{3,14}$/    
     {
        if(testPassword.test(text)){
            this.setState({
                Password:text
            })
        }
    else {
        this.setState({
            Password:false
        })
    }
}
}

validateConfirmPassword(text) {
    testConfirmPassword=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/
    //    /^[a-zA-Z]\w{3,14}$/    
     {
        if(testConfirmPassword.test(text)){
            this.setState({
                ConfirmPassword:text
            })
        }
    else {
        this.setState({
            ConfirmPassword:false
        })
    }
}
}

submit() {
    if(this.state.FirstName==false) {
        //alert("FirstName cannot be empty!");
        ToastAndroid.showWithGravity("Enter Valid FirstName",ToastAndroid.LONG,ToastAndroid.BOTTOM)
    }
    else if(this.state.LastName==false){
        ToastAndroid.showWithGravity("Enter Valid LastName",ToastAndroid.LONG,ToastAndroid.BOTTOM)
    }
    else if(this.state.Email==false) {
       // alert("Email cannot be empty!");
        ToastAndroid.showWithGravity("Enter Valid Email",ToastAndroid.LONG,ToastAndroid.BOTTOM)
    }
    else if(this.state.Password==false) {
        //alert("Password cannot be empty!");
        ToastAndroid.showWithGravity("Must contain at least one number and one uppercase and lowercase letter,and at least 6 or more characters",ToastAndroid.LONG,ToastAndroid.BOTTOM)
    }
    else if(this.state.Password!=this.state.ConfirmPassword) {
       // alert("Password should match");
       ToastAndroid.showWithGravity("Password should be same as above",ToastAndroid.LONG,ToastAndroid.BOTTOM)
    }
    else{
      
      /*      fetch("http://localhost:3000/registration", {
            
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
        body: JSON.stringify({
            "firstName":this.state.FirstName,
              "lastName":this.state.LastName,
              "email":this.state.Email,
              "password":this.state.Password,
              "confirmpassword":this.state.ConfirmPassword
        
        
        }),
        }).then((response) => response.json())
        .then((responseJson) => {
        return responseJson.movies;
        })
        .catch((error) => {
      console.error(error);
    });

    */



      /*    let collection={}
              collection.firstName=this.state.FirstName,
              collection.lastName=this.state.LastName,
              collection.email=this.state.Email,
              collection.password=this.state.Password,
              collection.confirmpassword=this.state.ConfirmPassword
           // console.warn(collection);
            
            var url = 'http://localhost:4000/registration';
       
            
            fetch(url, {
              method: 'POST', // or 'PUT'
              body: JSON.stringify(collection), // data can be `string` or {object}!
              headers:{
                'Content-Type': 'application/json'
              }
            }).then(res => res.json())
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error));
        */     
            
                var data={
                    firstName:this.state.FirstName,
                    lastName:this.state.LastName,
                    email:this.state.Email,
                    password:this.state.Password,
                    confirmpassword:this.state.ConfirmPassword
                    
            }
            userRegister(data)
                .then((result) => {
                    this.setState({
                        
                        regform:result.data.data
                    })
                    this.props.navigation.navigate('Login')
                })
                .catch((error) => {
                    ToastAndroid.showWithGravity("The User Already Exits",ToastAndroid.LONG,ToastAndroid.BOTTOM,error)
                    //alert(error);
                })

              
            
        
        
  
        
     }
   /*  
try{
userRegister(this.state.FirstName,this.state.LastName,this.state.Email,this.state.Password)
.then((res)=>{
    console.log("reg page");
    this.props.props.history.push('Login')
    })
.catch((err)=>{
    this.setState({open:true,errormsg:"Registration UNsuccessfull"})
});
}
    

catch(err){
    console.log(err,"error in handle submit in registration");
    
}
    }

    registrationclick=e=>{
        try{
            this.props.props.history.push('Login');
        }
        catch(err){
            console.log(err,"errror in registration click in registration");
            
        }
        }
    


}
*/
}
    static navigationOptions={header:null}
    render() {
        return (

            <View style={styles.regform}>
                <Text style={styles.header}>Registration Form</Text>

              <TextInput style={[styles.inputbox,
                 !this.state.FirstName? styles.error:null]}
                onChangeText={(text)=>this.validateFirstName(text)}
                placeholder="FirstName"
                fontWeight='bold'
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholderTextColor='#ffffff'  /> 

              <TextInput style={[styles.inputbox,
                    !this.state.LastName? styles.error:null]}
                onChangeText={(text)=>this.validateLastName(text)}
                placeholder="LastName"
                fontWeight='bold'
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholderTextColor='#ffffff'  />


              <TextInput style={[styles.inputbox,
                    !this.state.Email? styles.error:null]}
                onChangeText={(text)=>this.validateEmail(text)}
                placeholder="Email"
                fontWeight='bold'
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholderTextColor='#ffffff'/>

              <TextInput style={[styles.inputbox,
                   !this.state.Password? styles.error:null]}
                onChangeText={(text)=>this.validatePassword(text)} 
                placeholder="Password"
                fontWeight='bold'
                secureTextEntry={true}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholderTextColor='#ffffff'/>


              <TextInput style={[styles.inputbox,
              !this.state.ConfirmPassword? styles.error:null]}
              onChangeText={(text)=>this.validateConfirmPassword(text)}  
                placeholder="Confirm Password "
                fontWeight='bold'
                secureTextEntry={true}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholderTextColor='#ffffff'/>

              <TouchableOpacity style={styles.button}
             // onPress ={() =>this.props.navigation.navigate('loginFormNew')}> 
                   onPress={()=>this.submit()}>
                <Text style={styles.buttontext}>Submit</Text>
              </TouchableOpacity>

          {/*      <View>
                    <Text style={styles.bottomline}>Already a User? </Text>

                    <TouchableOpacity>
                            <Text style={styles.buttontext1}>Login</Text>
                        </TouchableOpacity>
                   
                </View>
          */}
        

            <View style={styles.loginTextCont}>
                <Text style={styles.loginText}>Already a User!?</Text>
            
            <TouchableOpacity
            onPress ={() =>this.props.navigation.navigate('Login')}> 
                <Text style={styles.loginButton}> Login</Text> 
            </TouchableOpacity>               
            </View>
        
    </View>
        )
    }
}

export {userRegister};


const styles = StyleSheet.create({

    regform: {
        flex:1,
        paddingVertical:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:  "#206bad"          //    '#07081c',     //"rgb(45, 54, 58)"        //'#455a64'

    },

    header: {
        fontWeight:'bold',
        fontSize: 25,
        color: 'white',  //  'black',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: 'rgb(23, 28, 27)',
        borderBottomWidth: 1
    },

    inputbox: {
       // alignSelf: 'stretch',
       // height: 40,
       // marginBottom: 30,
       // fontWeight: 'bold',
       // color: "black",
       // borderBottomColor: 'rgb(7, 7, 7)',
        //borderBottomWidth: 1,
        fontSize:16,
        width:300,
        backgroundColor:'rgba(255,255,255,0.3)',
        borderRadius:25,
        paddingHorizontal:10,
        marginVertical:10,


    },

    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'black',      //'rgb(28, 27, 27)',
        marginTop: 30,
        borderRadius:40,
        marginLeft:80,
        marginRight:80,
    },

    buttontext: {
        fontSize:26,
       // backgroundColor: "white",
       color:'#ffffff',
        fontWeight: "900",
        paddingRight:0,
    },

    bottomline: {
        fontWeight: 'bold',
        color: "white",      // "rgba(255,255,255,0.3)",        //    "white", 
        fontSize:25,    // "black",
        alignItems: 'center',
        paddingTop: 20,
        paddingLeft: 10,

    },

    buttontext1: {
        color: "black",
        fontWeight: "bold",
        fontSize: 26,
        paddingTop: -10,
        paddingLeft: 60,
        alignItems:'flex-end',
        flexDirection:'row'
        //justifyContent:'center',
        //alignItems:'center',
    },

    loginTextCont:{
        flexGrow:1,
        alignItems:'flex-end',
        justifyContent:'flex-end',
        paddingVertical:25,
        flexDirection:'row',
    },

    loginText:{
        color:'rgba(255,255,255,0.7)',
        fontSize:20,
    },
    
    loginButton:{
        color:'#ffffff',
        fontSize:20,
        fontWeight:"bold"


    }
})