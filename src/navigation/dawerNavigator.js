import {createDrawerNavigator,createAppContainer} from 'react-navigation' 
import DashBoard from '../screens/dashboard'
import LoginNew from '../screens/loginFormNew';
import Register from '../screens/registerForm';
import ForgotPassword from '../screens/forgotPasswordForm';
import ResetPassword from '../screens/resetPasswordForm';



navigationOptions = { header: null };
const MyDrawer=createDrawerNavigator(
    {
    Notes:{screen: DashBoard},
    Reminders : {screen : DashBoard},
    CreateLabel : {screen : DashBoard},
     
    Login :{screen:LoginNew}, 
    Register : { screen : Register},
    Forgot : {screen : ForgotPassword},
    ResetPassword : {screen:ResetPassword  },
    DashBoard : {screen : DashBoard,navigationOptions:{header:null}},
   

 
},
/*{
  initialRouteName:'Login'
},  */                              
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