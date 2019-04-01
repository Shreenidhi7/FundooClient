import React,{ Component } from "react";

import { StyleSheet,View,Text,Image,TouchableOpacity } from "react-native";
//import { TouchableOpacity } from "react-native-gesture-handler";
import { DrawerActions } from "react-navigation";

export default class Archive extends Component {
    constructor() {
        super();
    
        this.state = {
          click: false,
    
        }
      }
     
      static navigationOptions = { header: null }
    
    
      grid(event) {
    
        this.setState({ click: !(this.state.click) })
      }
    
    
    render() {
        return(
        <View style={{flex:1,flexDirection:"row",marginTop:10}}>
            <TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
                <Image style={styles.drawericon} source={require('../assets/images/drawericon.png')} />
            </TouchableOpacity>

            <Text style={styles.text}>
                Archive
            </Text>


            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Search")}>    
             <Image style={styles.searchicon} source={require('../assets/images/searchicon.png')}/>
          </TouchableOpacity>

{
  this.state.click ?
    (<View>
      <TouchableOpacity onPress={(event) => this.grid(event)}>
        <Image style={styles.gridicon} source={require('../assets/images/gridicon1.png')}></Image>
      </TouchableOpacity>
    </View>)
    : 
    (<View>
      <TouchableOpacity onPress={(event) => this.grid(event)}>
        <Image style={styles.listicon} source={require('../assets/images/list1.png')}></Image>
      </TouchableOpacity>
    </View>)
}


            </View>
        )
    }
}

const styles=StyleSheet.create({
    drawericon:{
    
        width: 38, //30,
        height: 38,  //40,
        justifyContent: 'space-between',
        alignItems: "center",       //'flex-start',
        marginLeft: 10,   //10,
        paddingLeft: 30
    },
    text:{
        marginLeft:30,
        fontSize:25,
        color:"black",
        
    },
    searchicon: {
        width: 35, //30,
        height: 35,  //40,
        justifyContent: 'space-between',
        alignItems: "center",       //'flex-start',
        //marginLeft: 60,   //10,
       // paddingLeft: 30,
        marginHorizontal:130,
        marginRight:30
       
    
      },
      gridicon: {
          marginRight:10,
          marginTop:5,
        width: 24, //30,
        height: 24,  //40,
        justifyContent: 'space-between',
        alignItems: "flex-end",       //'flex-start',
       // marginLeft: 20,  //15,   //10,
       // paddingLeft: 30,
       // marginHorizontal:60
      },
      listicon: {
        marginLeft:-11,
          marginTop:-1,
        width: 42, //30,
        height: 42,  //40,
        justifyContent: 'space-between',
        alignItems: "flex-end",       //'flex-start',
       // marginLeft: 20,   //15,   //10,
       // paddingLeft: 30,
       // marginHorizontal:60
      },
})