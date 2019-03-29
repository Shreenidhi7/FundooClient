/*
import React,{ Component } from "react";

import {StyleSheet, Button,Image } from "react-native";




export default class Remainder extends Component {
    static navigationOptions = {
      drawerLabel: 'Remainder',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../assets/images/remaindericon.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    };
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.navigate('Notes')}                         //.goBack()}
          title="Notes"
        />
      );
    }
  }
  
  const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });

  */

/************************************************************************************************************** */


/*

import React from "react";
import { View, Text } from "react-native";

import MyHeader from "../navigation/MyHeader";

const SettingsScreen = props => {
  return (
    <View>
      <MyHeader navigation={props.navigation} title="Settings" />
      <Text>This is Settings Screen</Text>
    </View>
  );
};
export default SettingsScreen


*/

/*************************************************************************************************************** */



import React,{ Component } from 'react';

import {StyleSheet, View ,Text,TouchableOpacity,Image } from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';
//import { Image } from 'react-native-elements';
import { DrawerActions } from 'react-navigation';

export default class Reminder extends Component {
  constructor() {
    super();

    this.state = {
      click: false,

    }
  }




  static navigationOptions = { header: null }


  grid(event) {

    this.setState({ click: !(this.state.click) })
  }



  render() {
    return(
      <View style={{ flex: 1 }}>
      <View style={{ height: 80, backgroundColor: /*'#1c313a'*/ /*"#206bad"*/ '#ffffff', width: 500, justifyContent: 'center', paddingHorizontal: 5, }}>
        <View style={{ height: 50, backgroundColor: '#ffffff', flexDirection: "row", paddingLeft: 10, alignItems: 'center', width: /*350*/ 390,marginLeft:7, borderRadius:9,/*borderColor:"#C1C1C1",borderWidth:2 */ }}>
         
          <TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
            <Image style={styles.drawericon} source={require('../assets/images/drawericon.png')} />
          </TouchableOpacity>
      
          <Text style={styles.text}>
                  Reminders
          </Text>

          <TouchableOpacity onPress={()=>this.props.navigation.navigate("Search")}>    
             <Image style={styles.searchicon} source={require('../assets/images/searchicon.png')}/>
          </TouchableOpacity>

{
  this.state.click ?
    (<View>
      <TouchableOpacity onPress={(event) => this.grid(event)}>
        <Image style={styles.gridicon} source={require('../assets/images/gridnew.png')}></Image>
      </TouchableOpacity>
    </View>)
    : 
    (<View>
      <TouchableOpacity onPress={(event) => this.grid(event)}>
        <Image style={styles.listicon} source={require('../assets/images/listicon.png')}></Image>
      </TouchableOpacity>
    </View>)
}





    </View>
    </View>
    </View>
    )
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
  },
  drawericon: {
    width: 38, //30,
    height: 38,  //40,
    justifyContent: 'space-between',
    alignItems: "center",       //'flex-start',
    marginLeft: 10,   //10,
    paddingLeft: 30
  },
    text:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
   // fontWeight:'bold',
    fontSize:25,
    color:"black",
    paddingHorizontal:20

    },
    searchicon: {
      width: 38, //30,
      height: 38,  //40,
      justifyContent: 'space-between',
      alignItems: "center",       //'flex-start',
      marginLeft: 60,   //10,
      paddingLeft: 30
  
    },
    gridicon: {
      width: 35, //30,
      height: 35,  //40,
      justifyContent: 'space-between',
      alignItems: "center",       //'flex-start',
      marginLeft: 20,  //15,   //10,
      paddingLeft: 30
    },
    listicon: {
      width: 27, //30,
      height: 24,  //40,
      justifyContent: 'space-between',
      alignItems: "center",       //'flex-start',
      marginLeft: 20,   //15,   //10,
      paddingLeft: 30
    },
  
})