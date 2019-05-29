import { createDrawerNavigator, createAppContainer } from 'react-navigation'
import DashBoard from '../screens/dashboard'


import Reminder from '../screens/reminder';
import NewLabel from '../screens/createNewLabel';
import Archive from '../screens/archive';
import Trash from '../screens/trash';

import Search from '../screens/search'
import Signout from '../screens/signout';
import Createlabel from '../screens/labelCreation';

import ProfilePic from './ProfilePic';
import ProfilePicture from './ProfilePicture';
import NewLabelPage from '../screens/NewLabelPage';



//import CardComponent from './CardComponent';


navigationOptions = { header: null };
const MyDrawer = createDrawerNavigator(
  {


    Notes: { screen: DashBoard, navigationOptions: { header: null } },
    // Notes: { screen: Register, navigationOptions: { header: null } },
    // Notes: { screen: DashBoard, navigationOptions: { header: null } },
    Reminders: { screen: Reminder },
    // CreateLabel: { screen: NewLabel  },
CreateLabel:{screen:Createlabel},
    Archive: { screen: Archive },
    Trash: { screen: Trash },
   
  //  Search: { screen: Search },
    SignOut: { screen: Signout },
  //  Edit: { screen: Edit },
    DashBoard: { screen: DashBoard },
    ProfilePic:{screen:ProfilePicture},
    // Login:{screen:LoginNew}

    NewLabelPage:{screen:NewLabelPage}
  },

  {
    navigationOptions: {

      gesturesEnabled: false,
      header: null,
    },
     initialRouteName: 'Notes', //'Notes',//'Notes',//"DashBoard",    //"Login",      //"Notes",
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