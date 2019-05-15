import { createDrawerNavigator, createAppContainer } from 'react-navigation'
import DashBoard from '../screens/dashboard'


import Reminder from '../screens/reminder';
import NewLabel from '../screens/createNewLabel';
import Archive from '../screens/archive';
import Trash from '../screens/trash';

import Search from '../screens/search'
import Signout from '../screens/signout';
import Edit from '../screens/Edit';
import LoginNew from '../screens/loginFormNew';
//import CardComponent from './CardComponent';


navigationOptions = { header: null };
const MyDrawer = createDrawerNavigator(
  {

  
    Notes: { screen: DashBoard, navigationOptions: { header: null } },
    // Notes: { screen: Register, navigationOptions: { header: null } },
    // Notes: { screen: DashBoard, navigationOptions: { header: null } },
    Reminders: { screen: Reminder },
    Createlabel: { screen: NewLabel },
    
    Archive: { screen: Archive },
    Trash: { screen: Trash },
    //Settings: { screen: DashBoard },
    // Search: { screen: Search },
    SignOut: { screen: Signout },
    Edit: { screen: Edit },
    DashBoard: { screen: DashBoard },



  },

  {
    navigationOptions: {

      gesturesEnabled: false,
      header: null,
    },
    initialRouteName: "DashBoard",    //"Login",      //"Notes",
    contentOptions: {
      activeTintColor: 'black',
      activeBackgroundColor: '#ffe082'
    },
    drawerPosition: 'left',
    //drawerWidth:300

  }
);
const Drawer = createAppContainer(MyDrawer);
export default Drawer; 