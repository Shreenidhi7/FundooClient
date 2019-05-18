import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";

import { ToastAndroid } from "react-native";


import { userRegister } from "../services/userService";

import styles from "../StyleSheet";
import { ScrollView } from 'react-native-gesture-handler';



export default class Register extends Component {
    constructor() {
        super();
        this.state = {

            FirstName: '',
            LastName: '',
            Email: '',
            Password: '',
            ConfirmPassword: '',
            regform: {}

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
        testFirstName = /^[a-zA-Z]*$/
        {
            if (testFirstName.test(text)) {
                this.setState({
                    FirstName: text
                })
            }
            else {
                this.setState({
                    FirstName: false
                })
            }
        }
    }

    validateLastName(text) {
        testLastName = /^[a-zA-Z]*$/
        {
            if (testLastName.test(text)) {
                this.setState({
                    LastName: text
                })
            }
            else {
                this.setState({
                    LastName: false
                })
            }
        }
    }

    validateEmail(text) {
        testEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
        {
            if (testEmail.test(text)) {
                this.setState({
                    Email: text
                })
            } else {
                this.setState({
                    Email: false
                })
            }
        }
    }

    validatePassword(text) {
        testPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/
        {
            if (testPassword.test(text)) {
                this.setState({
                    Password: text
                })
            } else {
                this.setState({
                    Password: false
                })
            }
        }
    }

    validateConfirmPassword(text) {
        testConfirmPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/
        {
            if (testConfirmPassword.test(text)) {
                this.setState({
                    ConfirmPassword: text
                })
            } else {
                this.setState({
                    ConfirmPassword: false
                })
            }
        }
    }

    submit() {
        if (this.state.FirstName == false) {
            ToastAndroid.showWithGravity("Enter Valid FirstName", ToastAndroid.LONG, ToastAndroid.BOTTOM)
        }
        else if (this.state.LastName == false) {
            ToastAndroid.showWithGravity("Enter Valid LastName", ToastAndroid.LONG, ToastAndroid.BOTTOM)
        }
        else if (this.state.Email == false) {
            ToastAndroid.showWithGravity("Enter Valid Email", ToastAndroid.LONG, ToastAndroid.BOTTOM)
        }
        else if (this.state.Password == false) {
            ToastAndroid.showWithGravity("Must contain at least one number and one uppercase and lowercase letter,and at least 6 or more characters", ToastAndroid.LONG, ToastAndroid.BOTTOM)
        }
        else if (this.state.Password != this.state.ConfirmPassword) {
            ToastAndroid.showWithGravity("Password should be same as above", ToastAndroid.LONG, ToastAndroid.BOTTOM)
        }
        else {
            var data = {
                firstName: this.state.FirstName,
                lastName: this.state.LastName,
                email: this.state.Email,
                password: this.state.Password,
                confirmpassword: this.state.ConfirmPassword
            }
            userRegister(data)
                .then((result) => {
                    this.setState({

                        regform: result.data.data
                    })
                    this.props.navigation.navigate('Login')
                })
                .catch((error) => {
                    ToastAndroid.showWithGravity("The User Already Exits", ToastAndroid.LONG, ToastAndroid.BOTTOM, error)
                })
        }

    }
    static navigationOptions = { header: null }
    render() {
        return (
            <ScrollView>
            <View style={styles.regform}>
                <Text style={styles.regHeader}>Sign Up</Text>

                <TextInput style={[styles.reginputbox,
                !this.state.FirstName ? styles.error : null]}
                    onChangeText={(text) => this.validateFirstName(text)}
                    placeholder="FirstName"
                    fontWeight='bold'
                    underlineColorAndroid=  'black'    //'rgba(0,0,0,0)'
                    placeholderTextColor='gray' />

                <TextInput style={[styles.reginputbox,
                !this.state.LastName ? styles.error : null]}
                    onChangeText={(text) => this.validateLastName(text)}
                    placeholder="LastName"
                    fontWeight='bold'
                    underlineColorAndroid='black' //'rgba(0,0,0,0)'
                    placeholderTextColor='gray' />


                <TextInput style={[styles.reginputbox,
                !this.state.Email ? styles.error : null]}
                    onChangeText={(text) => this.validateEmail(text)}
                    placeholder="Email"
                    fontWeight='bold'
                    underlineColorAndroid= 'black'     //'rgba(0,0,0,0)'
                    placeholderTextColor='gray' />

                <TextInput style={[styles.reginputbox,
                !this.state.Password ? styles.error : null]}
                    onChangeText={(text) => this.validatePassword(text)}
                    placeholder="Password"
                    fontWeight='bold'
                    secureTextEntry={true}
                    underlineColorAndroid=  'black'    //'rgba(0,0,0,0)'
                    placeholderTextColor='gray' />


                <TextInput style={[styles.reginputbox,
                !this.state.ConfirmPassword ? styles.error : null]}
                    onChangeText={(text) => this.validateConfirmPassword(text)}
                    placeholder="Confirm Password "
                    fontWeight='bold'
                    secureTextEntry={true}
                    underlineColorAndroid= 'black'     //'rgba(0,0,0,0)'
                    placeholderTextColor='gray' />

                <TouchableOpacity style={styles.submitButton}
                    // onPress ={() =>this.props.navigation.navigate('loginFormNew')}> 
                    onPress={() => this.submit()}>
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>


                <View style={styles.regTextCont}>
                    <Text style={styles.regText}>Already a User!?</Text>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={styles.logButton}> Login</Text>
                    </TouchableOpacity>
                </View>

            </View>
            </ScrollView>
        )
    }
}

export { userRegister };


