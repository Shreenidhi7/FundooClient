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