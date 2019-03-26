import {createDrawerNavigator,createAppContainer} from 'react-navigation' 
import DashBoard from '../screens/dashboard'
navigationOptions = { header: null };
const MyDrawer=createDrawerNavigator(
    {
    Notes:{screen: DashBoard},
    Reminders : {screen : DashBoard},
    CreateLabel : {screen : DashBoard}


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