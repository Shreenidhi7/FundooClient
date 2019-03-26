import React,{ Component } from "react";
import { StyleSheet,Text,TextInput,View,TouchableOpacity } from "react-native";
import { ToastAndroid } from "react-native";

export default class ResetPassword extends Component {

constructor(){
    super()
    this.state={
        Password:'',
        ConfirmPassword:'',
       
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
    if(this.state.Password==false) {
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

    render(){
        return(
            <View style={styles.forgotpasswordform}>
            <Text style={styles.header}>ResetPassword</Text>

            <Text style={styles.heading}>
                Enter Password</Text>

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


            </View>
        )
    }
}

const styles = StyleSheet.create({

    forgotpasswordform: {
        flex:1,
        paddingVertical:60,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:  "#206bad"          //    '#07081c',     //"rgb(45, 54, 58)"        //'#455a64'

    },

    header: {
        fontWeight:'bold',
        fontSize: 25,
        color: 'white',  //  'black',
        paddingBottom: 10,
        marginBottom: 40,  //40,
        borderBottomColor: 'rgb(23, 28, 27)',
        borderBottomWidth: 1,
        //paddingLeft:10,
    },

    heading:{
        paddingLeft:10,
        color:'black',
        fontSize:20,
        fontWeight:'800'
    },

    inputbox: {
        // alignSelf: 'stretch',
        // height: 40,
        // marginBottom: 30,
        // fontWeight: 'bold',
        // color: "black",
        // borderBottomColor: 'rgb(7, 7, 7)',
         //borderBottomWidth: 1,
         fontSize:18,
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
    }

})