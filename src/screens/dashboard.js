import React, { Component } from 'react';
import { DrawerActions } from 'react-navigation';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  ScrollView
} from 'react-native';

import CardComponent from '../navigation/CardComponent';

import { getTitle } from "../services/noteService";



export default class DashBoard extends Component {
  constructor() {
    super();

    this.state = {
      note: [],
      click: false,
      array: []
    }
  }


  static navigationOptions = { header: null }
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };

  componentDidMount() {


    
    getTitle(arr => {
     // console.warn(arr)
      
      if (arr) {
        this.setState({
          note: arr
        })
      }
      else {
        this.setState({
          note: []
        })
      
    }
    alert("data from back====>",arr)
    }
    )

  }

    // })
    // alert("acchha")
  //}




  grid(event) {

    this.setState({ click: !(this.state.click) })
  }


  render() {

    var arrdata = []
    var arr1 = []
    var key;
    var data;

    arr1 = Object.keys(this.state.note).map((notes) => {

      key = notes;
      data = this.state.note[key]


      return (
        <CardComponent Display={data}
          notekey={key}
          view={this.state.click}
          navigation={this.props.navigation}
        />
      )

    })

    /*var pinarr=[]
    var key;
    var data1;
    pinarr=Object.keys(this.state.note).map((notes)=>{
      key=notes;
      data1=this.state.note[key]
      if(data1.pin===true)
    {
      return(
      <CardComponent Display={data1}
      notekey={key}
      view={this.state.click}
      navigation={this.props.navigation}
      />
    )
    }
  })
  */


    return (

      <View style={{ flex: 1 }}>
        <View style={{ height: 80, backgroundColor: /*'#1c313a'*/ /*"#206bad"*/ '#ffffff', width: 500, justifyContent: 'center', paddingHorizontal: 5, }}>
          <View style={{ height: 50, backgroundColor: '#ffffff', flexDirection: "row", paddingLeft: 10, alignItems: 'center', width: /*350*/ 390, marginLeft: 7, borderRadius: 9, borderColor: "#C1C1C1", borderWidth: 2 }}>


            {/* onpress with drawericon */}
            <TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
              <Image style={styles.drawericon} source={require('../assets/images/drawericon.png')} />
            </TouchableOpacity>

            {/* keep icon */}
            <Image style={styles.image} source={require('../assets/images/keep_48dp.png')}></Image>

            {/* search onpress navigation */}
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Search")}>
              <Text style={styles.text}>Search your Notes</Text>
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
          
        </View>

        <CardComponent />

  {/*      <ScrollView>
          <View><Text style={styles.margin1}>Others</Text></View>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {arr1}
          </View>
  </ScrollView>        */}



        <View style={{ flex: 1, backgroundColor: /*"#009688"*/ "white", }}></View>




        <View style={styles.last}>
          <View style={styles.data1}>
            <View style={styles.data}>



              <TouchableOpacity onPress={() => this.props.navigation.navigate('TakeNote')}>
                <Text style={styles.text1}>
                  Take a note...
              </Text>
              </TouchableOpacity>


              <View>
                <TouchableOpacity>
                  <Image style={styles.checkbox} source={require('../assets/images/checkbox.png')} >
                  </Image>
                </TouchableOpacity>
              </View>

              <View>
                <TouchableOpacity>
                  <Image style={styles.pen} source={require('../assets/images/paintbrush.png')}>
                  </Image>
                </TouchableOpacity>
              </View>

              <View>
                <TouchableOpacity>
                  <Image style={styles.microphone} source={require('../assets/images/microphone.png')}>
                  </Image>
                </TouchableOpacity>
              </View>

              <View>
                <TouchableOpacity>
                  <Image style={styles.photo} source={require('../assets/images/image.png')}>
                  </Image>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>



    );

  }
}





const styles = StyleSheet.create({
  data: {
    height: 70,
    width: 300,
    backgroundColor: "#ffffff", //"#206bad",   /* '#1c313a' */
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
    alignItems: 'center',
    padding: 50,
    borderRadius: 35,
  },
  drawericon: {
    width: 38, //30,
    height: 38,  //40,
    justifyContent: 'space-between',
    alignItems: "center",       //'flex-start',
    marginLeft: 10,   //10,
    paddingLeft: 30
  },
  image: {
    width: 30, //30,
    height: 30,  //40,
    justifyContent: 'space-between',
    alignItems: "center",       //'flex-start',
    marginLeft: 15,   //10,
    paddingLeft: 30
  },
  gridicon: {
    width: 27.5, //30,
    height: 28.5,  //40,
    justifyContent: 'space-between',
    alignItems: "center",       //'flex-start',
    marginLeft: 15,   //10,
    paddingLeft: 30
  },
  listicon: {
    width: 45, //30,
    height: 40,  //40,
    justifyContent: 'space-between',
    alignItems: "center",       //'flex-start',
    marginLeft: 15,   //10,
    paddingLeft: 30
  },

  data1: {

    justifyContent: 'center',
    backgroundColor: "#ffffff",   //"#206bad",    /*   '#1c313a', */
    alignItems: 'center',

  },

  text: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: "bold",
    padding: 20
  },
  data: {
    height: 70,
    width: 340,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
    alignItems: 'center',
    // padding: 25,
    //borderRadius: 15,
  },
  last: {
    // position: 'relative',
    // bottom: 0,
    height: 50,
    backgroundColor: '#ffffff',
    flexDirection: "row",
    paddingLeft: 25,  //10,
    alignItems: 'center',
    width: /*350*/ 390,
    marginLeft: 10,  //7,
    marginVertical: 10,
    // borderRadius: 1, //9,
    borderColor: "#C1C1C1",
    // borderWidth:1

  },

  text1: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 22,
    fontWeight: "bold",
    // marginHorizontal:  3,  //0.5,
    // marginRight:5,
    // marginLeft:-55,
    // marginLeft:-30

  },
  image1: {
    width: 20,
    height: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginHorizontal: 10,
    paddingHorizontal: 0.5,

  },
  checkbox: {
    width: 25,  //20,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingHorizontal: 10,
    marginRight: 1,  //10,
  },
  pen: {
    width: 25,
    height: 25,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginHorizontal: 10,
    paddingHorizontal: 0.5
  },
  microphone: {
    width: 35,
    height: 35,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginHorizontal: 10,
    paddingHorizontal: 0.5
  },
  photo: {
    width: 25,
    height: 25,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginHorizontal: 10,
    paddingHorizontal: 0.5
  },

  card: {
    flexDirection: 'row',
    flex: 1
  },

  margin1: {
    marginLeft: 20,
    fontSize: 15,
    marginTop: 15
  },

})




/****************************old dashboard with drawer navigator****************************** */

// import React,{ Component } from "react";

// import {StyleSheet,View,Text,DrawerLayoutAndroid,Image} from 'react-native';
// var navigationView = (
//     <View style={{flex: 1, backgroundColor: '#fff'}}>
//     <Image style={{borderRadius:120,alignSelf:'center',justifyContent:'center',width:80,height:80}}    
//     source={require('../components/images/sample.jpg')}/>
//       <Text style={{margin: 10,
//          fontSize: 25,
//           textAlign: 'left',
//           color:'black',
//           fontWeight:'bold',
//           borderBottomColor:'black',
//           borderBottomWidth:3}}>Drawer Items</Text>
//     </View>);

// export default class Dashboard extends Component {

//     static navigationOptions={header:null}
//     render() {
//         return (
//             <DrawerLayoutAndroid
//               drawerWidth={300}
//               drawerPosition={DrawerLayoutAndroid.positions.Left}
//               renderNavigationView={() => navigationView}>
//               <View style={{flex: 1, alignItems: 'center',backgroundColor:/*'#206bad'*/'white'}}>
//                 <Text style={{margin: 10, fontSize: 25, textAlign: 'right',justifyContent:'center',fontWeight:'bold'}}>Haii</Text>
//                 <Text style={{margin: 10,
//                  fontSize: 25,
//                   textAlign: 'right',
//                   justifyContent:'center',
//                   fontWeight:'bold',
//                    borderBottomColor:'black',
//                     borderBottomWidth:3}}>Welcome to Fundoo Dashboard </Text>
//               </View>





//             </DrawerLayoutAndroid>
//           );
/****************************************************************************************************** */

/***************************************************************************************** */



// import React,{ Component } from "react";

// import { StyleSheet,View,Text } from "react-native";

// import HomeScreen from "../screens/HomeScreen"
// import DrawerNavigator from "../navigation/DrawerNavigator"

// export default class Dashboard extends Component {

// static navigationOptions={header:null}
// render() {       
//         return(
//             <View style={styles.container}>       

//                 <DrawerNavigator/>

//             </View>
//         )
//     }
//  }

// const styles=StyleSheet.create({
//      container:{
//             flex:1,
//            // paddingVertical:30,
//             alignItems:'center',
//             justifyContent:'center',
//            // backgroundColor:  "#206bad",
//            backgroundColor:'#fff'
//      },

//      writeUp:{
//          color:"black",
//          fontSize:30,
//          fontWeight:'bold'
//      }

// })



/********************************************************************************* */