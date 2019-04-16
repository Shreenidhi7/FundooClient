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

 <View style={{flex:1,flexDirection:"column"}}>

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
        <Image style={styles.gridicon} source={require('../assets/images/gridicon1.png')}></Image>
      </TouchableOpacity>
    </View>)
    : 
    (<View>
      <TouchableOpacity onPress={(event) => this.grid(event)}>
        <Image style={styles.listicon} source={require('../assets/images/list1.png')}></Image>
      </TouchableOpacity>
    </View>)
}

    </View>
    </View>
    </View>



<View style={{ flex: 1, backgroundColor: /*"#009688"*/ "white",  }}></View>
<View style={styles.last}>
  <View style={styles.data1}>
    <View style={styles.data}>

  

  <TouchableOpacity   onPress={()=>this.props.navigation.navigate('TakeNote')}>
      <Text style={styles.text1}>Take a note...</Text>
  </TouchableOpacity>


      <View>
        <TouchableOpacity>
          <Image style={styles.checkbox} source={require('../assets/images/checkbox.png')} >
          </Image>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity>
          <Image style={styles.pen} source={require('../assets/images/paintbrush.png')}>
          </Image>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity>
          <Image style={styles.microphone} source={require('../assets/images/microphone.png')}>
          </Image>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity>
          <Image style={styles.photo} source={require('../assets/images/image.png')}>
          </Image>
        </TouchableOpacity>
      </View>

    </View>
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
      width: 36, //30,
      height: 36,  //40,
      justifyContent: 'space-between',
      alignItems: "center",       //'flex-start',
      //marginLeft: 60,   //10,
     // paddingLeft: 30,
      marginHorizontal:60,
      marginRight:30
     
  
    },
    gridicon: {
      width: 28, //30,
      height: 28,  //40,
      justifyContent: 'space-between',
      alignItems: "flex-end",       //'flex-start',
     // marginLeft: 20,  //15,   //10,
     // paddingLeft: 30,
     // marginHorizontal:60
    },
    listicon: {
      width: 40, //30,
      height: 45,  //40,
      justifyContent: 'space-between',
      alignItems: "flex-end",       //'flex-start',
     // marginLeft: 20,   //15,   //10,
     // paddingLeft: 30,
     // marginHorizontal:60
    },

    data1: {

      justifyContent: 'center',
      backgroundColor: "#ffffff",   //"#206bad",    /*   '#1c313a', */
      alignItems: 'center',
  
    },
  
    text: {
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 20,
      fontWeight:"bold",
      padding: 20
    },
    data: {
      height: 70,
      width: 340,
      backgroundColor: '#ffffff',
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 17,
      alignItems: 'center',
     // padding: 25,
      //borderRadius: 15,
    },
    last: {
     // position: 'relative',
     // bottom: 0,
      height: 50, 
      backgroundColor:  '#ffffff',
      flexDirection: "row",
      paddingLeft: 25,  //10,
      alignItems: 'center',
      width: /*350*/ 390,
      marginLeft: 10,  //7,
      marginVertical:10,
     // borderRadius: 1, //9,
      borderColor:"#C1C1C1",
     // borderWidth:1
    },

    text1: { 
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 22,
      fontWeight:"bold",
      paddingRight:15
      //marginHorizontal: 3, //3,  //0.5,
      //marginRight:70,
      //marginLeft:-45,
     // marginLeft:-30
  
    },
    image1: {
      flexDirection:"row",
      width: 20,
      height: 20,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      marginHorizontal: 10,
      paddingHorizontal: 0.5,
      paddingBottom:60,
  
    },
    checkbox: {
      width: 25,  //20,
      height: 25,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 20,
      paddingHorizontal: 10,
      marginRight: 1, //10,
    },
    pen: {
      width: 25,
      height: 25,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      marginHorizontal: 10,
      paddingHorizontal: 0.5
    },
    microphone: {
      width: 35,
      height: 35,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      marginHorizontal: 10,
      paddingHorizontal: 0.5
    },
    photo: {
      width: 25,
      height: 25,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      marginHorizontal: 10,
      paddingHorizontal: 0.5
    }
  
  
})