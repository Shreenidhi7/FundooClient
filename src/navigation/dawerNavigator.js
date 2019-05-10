import { createDrawerNavigator, createAppContainer } from 'react-navigation'
import DashBoard from '../screens/dashboard'
// import LoginNew from '../screens/loginFormNew';
// import Register from '../screens/registerForm';
// import ForgotPassword from '../screens/forgotPasswordForm';
// import ResetPassword from '../screens/resetPasswordForm';
// import TakeNote from '../screens/TakeNote'

// import Notes from '../screens/notes'
import Reminder from '../screens/reminder';
//import Search from "../screens/search";
import NewLabel from '../screens/createNewLabel';
import Archive from '../screens/archive';
import Trash from '../screens/trash';
import LoginNew from '../screens/loginFormNew';
import Search from '../screens/search'
import Register from '../screens/registerForm';
import Profile from './Profile';
import Signout from '../screens/signout';
//import CardComponent from './CardComponent';

navigationOptions = { header: null };
const MyDrawer = createDrawerNavigator(
  {

   
    Notes: { screen:DashBoard, navigationOptions: { header: null } },
   // Notes: { screen: Register, navigationOptions: { header: null } },
   // Notes: { screen: DashBoard, navigationOptions: { header: null } },
    Reminders: { screen: Reminder },
    Createlabel: { screen: NewLabel },
    Archive: { screen: Archive },
    Trash: { screen: Trash },
    Settings: { screen: DashBoard },
    Search:{screen:Search},
    SignOut :{screen:Signout},
    
    DashBoard: { screen:DashBoard, navigationOptions: { header: null } },
    /*  CardComponent:{screen:CardComponent},
      
    Search:{screen:Search},
  
  
      Login :{screen:LoginNew}, 
      Register : { screen : Register},
      Forgot : {screen : ForgotPassword},
      ResetPassword : {screen:ResetPassword  },
      DashBoard : {screen : DashBoard,navigationOptions:{header:null}},
      TakeNote:{screen : TakeNote,navigationOptions:{header:null}}
  */

  },

  {
    navigationOptions: {
      
      gesturesEnabled: false,
      header: null,
    },
    initialRouteName: "DashBoard",    //"Login",      //"Notes",
    contentOptions: {
      activeTintColor: 'black',
      activeBackgroundColor:'#ffe082'
    },
    drawerPosition: 'left',
   //drawerWidth:300

  }
);
const Drawer = createAppContainer(MyDrawer);
export default Drawer; 