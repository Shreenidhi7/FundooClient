import {createStackNavigator,createAppContainer} from 'react-navigation';
import LoginNew from '../screens/loginFormNew';
import Register from '../screens/registerForm';
import ForgotPassword from '../screens/forgotPasswordForm';
import ResetPassword from '../screens/resetPasswordForm';
import DashBoard from '../screens/dashboard';
import Drawer from '../navigation/dawerNavigator';
import TakeNote from '../screens/TakeNote';
import Edit from '../screens/Edit';


//navigationOptions={header : null}
const MainNavigator=createStackNavigator({
    Login : { screen : LoginNew },
    Register : { screen : Register},
    Forgot : {screen : ForgotPassword},
    ResetPassword : {screen:ResetPassword  },
    DashBoard : {screen : DashBoard,navigationOptions:{header:null}},
    Drawer:{screen:Drawer,navigationOptions:{header:null}},
    TakeNote:{screen : TakeNote,navigationOptions:{header:null}},
    Edit:{screen:Edit,navigationOptions:{header:null}}
},
{
    initialRouteName :    "Drawer"   //////'Drawer'
});

const Container=createAppContainer(MainNavigator);

export default Container;