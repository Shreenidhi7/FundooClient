import React,{ Component } from "react";

import { StyleSheet,View,Image,TouchableOpacity } from "react-native";
//import { TouchableOpacity } from "react-native-gesture-handler";


export default class Search extends Component {
    render() {
        return(
            <View style={styles.container}>
        
       
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Reminders")}>
            <Image style={styles.arrow} source={require('../assets/images/leftarrow.png')} />
          </TouchableOpacity>

            
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
    },

    arrow: {
        marginLeft: 10,
        width: 30,
        height: 40,
    }
})