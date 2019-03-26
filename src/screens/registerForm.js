import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
//import { validate } from '@babel/types';
import { ToastAndroid } from "react-native";

export default class Register extends Component {
    constructor() {
        super();
        this.state={
            //nameValidate:true,
            Name:'',
            Email:'',
            //passwordValidate:true,
            Password:'',
            ConfirmPassword:'',
        }
    }
  /*  validate(text,type)
    {
        alph=/^[a-zA-Z]+$/
        num=/^[0-9]+$/
        if(type=='name')
        {
            if(alph.test(text))
            {
                this.setState({
                    nameValidate:true,
                })
            }
            else
            {
            this.setState({
                nameValidate:false,
            })
            }
        }
        else if(type=='password')
        {
            if(num.test(text))
            {
                this.setState({
                    nameValidate:true,
                })
            }
            else
            {
            this.setState({
                nameValidate:false,
            })
            }
        }
        }
    }
*/

validateName(text) {
    testName=/^[a-zA-Z]*$/
     {
        if(testName.test(text)){
            this.setState({
                Name:text
            })
        }
    else {
        this.setState({
            Name:false
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
    if(this.state.Name==false) {
        //alert("Name cannot be empty!");
        ToastAndroid.showWithGravity("Enter Valid Name",ToastAndroid.LONG,ToastAndroid.BOTTOM)
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
        this.props.navigation.navigate('Login')
    }
}

    static navigationOptions={header:null}
    render() {
        return (

            <View style={styles.regform}>
                <Text style={styles.header}>Registration Form</Text>

              <TextInput style={[styles.inputbox,
                 !this.state.Name? styles.error:null]}
                onChangeText={(text)=>this.validateName(text)}
                placeholder="FirstName"
                fontWeight='bold'
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholderTextColor='#ffffff'  /> 

              <TextInput style={[styles.inputbox,
                    !this.state.Name? styles.error:null]}
                onChangeText={(text)=>this.validateName(text)}
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