import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, } from "react-native";
import { ToastAndroid } from "react-native";
import { userLogin } from "../services/userService";
import AsyncStorage from '@react-native-community/async-storage';

//import {userLogin} from '../services/userService'
//var jwt= require('jsonwebtoken');
//const jwt=require('jsonwebtoken')



class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = { isShowingText: true };

        setInterval(() => (
            this.setState(previousState => (
                { isShowingText: !previousState.isShowingText }
            ))
        ), 1000);
    }

    render() {
        if (!this.state.isShowingText) {
            return null;
        }

        return (
            <Text>
                {this.props.text}
            </Text>
        );
    }
}

export default class LoginNew extends Component {

    static navigationOptions = { header: null }
    constructor() {        //(props)
        super()            //(props)
        this.state = {
            Email: '',
            Password: '',
            // open: false,
            // errormsg: "",
            logform: {},
            token: ''

        }
    }




    validateEmail(text) {
        testEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        //        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        {
            if (testEmail.test(text)) {
                this.setState({
                    Email: text
                })
            }
            else {
                this.setState({
                    Email: false
                })
            }
        }
    }

    validatePassword(text) {
        testPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        ///^[a-zA-Z]\w{3,14}$/
        {
            if (testPassword.test(text)) {
                this.setState({
                    Password: text
                })
            }
            else {
                this.setState({
                    Password: false
                })
            }
        }
    }

    handleSubmit() {
        if (this.state.Email == '') {
            ToastAndroid.showWithGravity("Enter Valid Email", ToastAndroid.LONG, ToastAndroid.BOTTOM)
        }

        else if (this.state.Password == '') {
            ToastAndroid.showWithGravity("Must contain at least one number and one uppercase and lowercase letter,and at least 6 or more characters", ToastAndroid.LONG, ToastAndroid.BOTTOM)
        }

        else {


            var data = {

                email: this.state.Email,
                password: this.state.Password,
            }

            userLogin(data)

                .then((result) => {
                    const token1 = result.data.token
                    console.log("Token Generated at Login Time===>\n", token1,"\n");

                    AsyncStorage.setItem('token', token1);

                    AsyncStorage.getItem('token').then(value => {
                        console.log("In Login(@getitem)====>\n", value,"\n");

                    })

                    this.setState({

                        logform: result.data.data,

                    })


                    this.props.navigation.navigate('DashBoard')
                })
                .catch((error) => {
                    ToastAndroid.showWithGravity("The User Doesnot Exists,Register Now", ToastAndroid.LONG, ToastAndroid.BOTTOM, error)

                })


















        }
    }
    // static navigationOptions = { header: null }
    render() {
        return (

            <View style={styles.loginform}>

                <Image style={{ borderRadius: 120, width: 150, height: 150 }}
                    source={require('../assets/images/sample.jpg')} />

                <Text style={styles.logoWriteUp}>
                    <Blink text="Welcome to Fundoo" />
                </Text>


                <Text style={styles.header}>Login Form</Text>
                <TextInput style={[styles.inputbox,
                !this.state.Email ? styles.error : null]}
                    onChangeText={(text) => this.validateEmail(text)}
                    placeholder="Email"
                    fontWeight='bold'
                    // onChangeText={(email)=>this.setState({email})}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholderTextColor='#ffffff' />


                <TextInput style={[styles.inputbox,
                !this.state.Password ? styles.error : null]}
                    onChangeText={(text) => this.validatePassword(text)}
                    placeholder="Password"
                    fontWeight='bold'
                    // onChangeText={(password)=>this.setState({password})}
                    secureTextEntry={true}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholderTextColor='#ffffff' />


                <TouchableOpacity style={styles.button}
                    onPress={() => this.handleSubmit()}>
                    {/* onPress={() => this.props.navigation.navigate('dashboard')}>  */}
                    <Text style={styles.buttontext}>Submit</Text>
                </TouchableOpacity>



                <View style={styles.signUpTextCont}>
                    <Text style={styles.signUpText}>Don't have an Account yet!?</Text>


                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Register')}>
                        <Text style={styles.signUpButton}> Sign Up</Text>
                    </TouchableOpacity>
                </View>


                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Forgot')}>
                    <Text style={styles.forgotButton}>Forgot Password!?</Text>
                </TouchableOpacity>



            </View>





        )
    }


}
//export {userLogin}

const styles = StyleSheet.create({
    loginform: {
        flex: 1,
        paddingVertical: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#206bad",
    },

    logoWriteUp: {
        padding: 10,
        fontWeight: 'bold',
        fontSize: 22,
        color: "white"
    },

    header: {
        fontWeight: 'bold',
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
        // borderBottomWidth: 1,
        fontSize: 18,
        width: 300,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 25,
        paddingHorizontal: 10,
        marginVertical: 10,
    },

    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'black',      //'rgb(28, 27, 27)',
        marginTop: 30,
        borderRadius: 40,
        marginLeft: 80,
        marginRight: 80,
    },

    buttontext: {
        fontSize: 26,
        // backgroundColor: "white",
        color: '#ffffff',
        fontWeight: "900",
        paddingRight: 0,
    },


    signUpTextCont: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        paddingVertical: 25,
        flexDirection: 'row',
    },

    signUpText: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 20,
    },


    signUpButton: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: "bold"
    },



    forgotButton: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: "bold"


    },
    error: {
        //borderBottomColor
        borderBottomColor: 'red',
        borderColor: 'red'
    }


})
