/*

import Notes from "../screens/notes";
import Remainder from "../screens/remainder";

import { createAppContainer,createDrawerNavigator } from "react-navigation";






  const MyDrawerNavigator = createDrawerNavigator({
    Notes: {
      screen: Notes,
    },
    Remainder: {
      screen: Remainder,
    },
  });
  
  const MyApp = createAppContainer(MyDrawerNavigator);

  export default MyApp;


  */


  /********************************************************************************************************* */


  import { createDrawerNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "../screens/notes";
import SettingsScreen from "../screens/remainder";

const AppNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  Settings: {
    screen: SettingsScreen
  }
});

//export default createAppContainer(AppNavigator);
const MyApp=createAppContainer(AppNavigator)

export default MyApp;
