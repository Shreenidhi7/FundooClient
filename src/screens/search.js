import React,{ Component } from "react";

import { StyleSheet,View,Image,TouchableOpacity,TextInput } from "react-native";
import { Text } from "react-native-elements";
//import { TouchableOpacity } from "react-native-gesture-handler";


export default class Search extends Component {
    render() {
        return(
            <View style={styles.container}>
        
       
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Reminders")}>
            <Image style={styles.arrow} source={require('../assets/images/leftarrow.png')} />
          </TouchableOpacity>

            <TextInput style={styles.text}
            placeholder="Search Your Notes"
            
            fontWeight="normal"
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholderTextColor='gray'>

            </TextInput>

            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        //flexDirection:"row"
  
    },

    arrow: {
        flexDirection:"row",
        marginTop:20,
        marginLeft: 10,
        width: 30,
        height: 40,
        
    },

    text:{
        flexDirection:"row",
        fontSize:20,
        marginTop:-45,
        marginLeft:50

    }
    
  
         
  
})