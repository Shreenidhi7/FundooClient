import React,{ Component } from "react";

import { StyleSheet,View,Text,Image,TouchableOpacity } from "react-native";

import { DrawerActions } from "react-navigation";

export default class Trash extends Component {
    render(){
        return(
        <View style={{felx:1,flexDirection:"row",marginTop:10}}>
            <TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
               <Image style={styles.drawericon} source={require('../assets/images/drawericon.png')} />
            </TouchableOpacity>

            <Text style={styles.text}>
                Trash
            </Text>

            <TouchableOpacity>
                <Image style={styles.dots} source={require('../assets/images/dots.png')}></Image>
            </TouchableOpacity>


            </View>
        )
    }
}

const styles=StyleSheet.create({
    drawericon:{
    
        width: 38, //30,
        height: 38,  //40,
        justifyContent: 'space-between',
        alignItems: "center",       //'flex-start',
        marginLeft: 10,   //10,
        paddingLeft: 30
    },
    text:{
        marginLeft:30,
        fontSize:25,
        color:"black",
        
    },

    dots : {
        marginTop:4,
        width: 40,
        height: 40,
        justifyContent: 'space-between',
        alignItems: "center",
       //paddingLeft:70,
       paddingRight:70,
       marginHorizontal:210
       
        // marginRight:300,
       // marginLeft: 290,
       // paddingLeft: 85,
       // marginTop: -5
    }
})