import React, { Component } from "react";

import { StyleSheet,View,Text,TouchableOpacity,Image,TextInput} from "react-native";

export default class NewLabel extends Component {
    render() {
        return(
            <View>
            <View style={{flexGrow:1,flexDirection:"row",marginTop:10}}>
            
                <TouchableOpacity onPress={() => this.props.navigation.navigate('DashBoard')}>
                    <Image style={styles.arrow} source={require('../assets/images/leftarrow.png')} >
                    </Image>
                </TouchableOpacity> 
           
           
            <Text style={styles.text}>
                Edit labels
            </Text>
            </View>


        <View style={{flexGrow:1,flexDirection:"row",marginTop:15}}>         

            <TextInput style={styles.label} 
            placeholder="Create New Label"
            
            fontWeight="normal"
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholderTextColor='gray' >

            </TextInput>

            
     </View>


       </View> 
        )
    }
}

const styles=StyleSheet.create({
    
        text:{
            fontSize:25,
            color:"black",
            paddingLeft: 35  //35
            
        },
        arrow: {
            marginLeft: 10,
            width: 30,
            height: 40,
    },
    label:{
       // flexDirection:"row",
        borderWidth:1.5,
       // borderRadius:5,
       // flexWrap: 'wrap',
        width:415,
        fontSize:19,
        fontWeight:'bold',
        paddingLeft:40
    }
    
}
)
    