/*import React,{ Component } from "react";

import {StyleSheet, Button,Image } from 'react-native';





export default class Notes extends Component {
    static navigationOptions = {
      drawerLabel: 'Notes',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../assets/images/notesicon.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    };
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.navigate('Remainder')}
          title="Remainder"
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


/*********************************************************************************************************** */

import React from "react";
import { View, Text } from "react-native";
import MyHeader from "../navigation/MyHeader";

const HomeScreen = props => {
  return (
    <View>
      <MyHeader navigation={props.navigation} title="Home" />
      <Text>This is Home Screen</Text>
    </View>
  );
};

export default HomeScreen;