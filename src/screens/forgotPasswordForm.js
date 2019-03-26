import React,{ Component } from "react";
import { StyleSheet,Text,TextInput,View,TouchableOpacity } from "react-native";
import { ToastAndroid } from "react-native";

export default class ForgotPassword extends Component {

constructor(){
    super()
    this.state={
        Email:'',
       
    }
}


validateEmail(text) {
    testEmail= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    //    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
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

submit() {
    if(this.state.Email==false) {
        //alert("Invalid Email")
        ToastAndroid.showWithGravity("Enter Valid Email",ToastAndroid.LONG,ToastAndroid.BOTTOM)
    }
    else{
        this.props.navigation.navigate('Login')
    }
}
    
  static navigationOptions={header:null}

    render(){
        return(
            <View style={styles.forgotpasswordform}>
            <Text style={styles.header}>ForgotPassword</Text>

            <Text style={styles.heading}>
                Enter Email</Text>


            <TextInput style={[styles.inputbox,
             !this.state.Email? styles.error:null]}
             onChangeText={(text)=>this.validateEmail(text)}
                placeholder="Email"
                fontWeight='bold'
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