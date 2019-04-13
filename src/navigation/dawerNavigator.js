import {createDrawerNavigator,createAppContainer} from 'react-navigation' 
import DashBoard from '../screens/dashboard'
import LoginNew from '../screens/loginFormNew';
import Register from '../screens/registerForm';
import ForgotPassword from '../screens/forgotPasswordForm';
import ResetPassword from '../screens/resetPasswordForm';
import TakeNote from '../screens/TakeNote'

import Notes from '../screens/notes'
import Reminder from '../screens/reminder';
import Search from "../screens/search";
import NewLabel from '../screens/createNewLabel';
import Archive from '../screens/archive';
import Trash from '../screens/trash';
import CardComponent from './CardComponent';

navigationOptions = { header: null };
const MyDrawer=createDrawerNavigator(
    {
   
    Notes:{screen: Notes},
    Reminders : {screen : Reminder},
    Createlabel : {screen : NewLabel},
    Archive:{screen:Archive}, 
    Trash:{screen:Trash},
    Settings:{screen:DashBoard},
    CardComponent:{screen:CardComponent},
    
  Search:{screen:Search},


    Login :{screen:LoginNew}, 
    Register : { screen : Register},
    Forgot : {screen : ForgotPassword},
    ResetPassword : {screen:ResetPassword  },
    DashBoard : {screen : DashBoard,navigationOptions:{header:null}},
    TakeNote:{screen : TakeNote,navigationOptions:{header:null}}

 
},
{
  initialRouteName:'DashBoard'
},                                
{
  navigationOptions: {
    gesturesEnabled: false
  },
initialRouteName: "Notes",
  contentOptions: {
    activeTintColor: "#e91e63"
  },
  drawerPosition:'left',
  
}
); 
const Drawer = createAppContainer(MyDrawer);
export default Drawer; 