import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { DrawerActions } from 'react-navigation';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import { ToastAndroid } from "react-native";

import { getNotes } from "../services/noteService";
//import { Card } from 'react-native-elements';
import CardComponent from "../navigation/CardCompo";

//var dateFormat = require('dateformat');
//var dataArray = new Date();



export default class DashBoard extends Component {


  static navigationOptions = {
    header: null,
    drawerLabel: 'Notes',
    inactiveTintColor:'black',
    backgroundColor:'yellow',
    drawerIcon:
      <Image style={{width:24,height:30}}source={require('../assets/images/notesicon.png')} />
  }
  
  constructor() {
    super();

    this.state = {
      Title: '',
      Description: '',
      dataArray: [],
      archive: false,
      click: false,

      // profile:''

      //columns: 2,
      //key: 1
    }
    // this.onChangeProfile=this.onChangeProfile.bind(this)
  }

 // https://aboutreact.com/react-native-image-icon-inside-navigation-bar/


  grid(event) {
    this.setState({
      click: !(this.state.click)
    })
  }

  SearchNote(event) {
    this.props.navigation.navigate('Search')
  }





  componentDidMount() {



    AsyncStorage.getItem('token')
      .then(value => {
        console.log("Getting token while ReCreating Note", value);
        this.token = value
        var data = {
          title: this.state.Title,
          description: this.state.Description,
          archive: this.state.archive,
          pinned: this.state.pinned,
          reminder: this.state.reminder,
          token: value
        }
        getNotes(data)
          .then((result) => {

            this.setState({
              dataArray:
                result.result
            })
            console.log("Result in Datasoure Frontend===>\n")
            console.log(result.result)
            //   console.log(
            //   dateFormat("mediumDate"),
            // dateFormat("shortTime"))
            //  console.log("state in dash ->",this.state.dataSoure);

          })
          .catch((err) => {
            ToastAndroid.showWithGravity("Error occured while Retriving Notes ", err, ToastAndroid.LONG, ToastAndroid.BOTTOM)

          })
      })
      .catch(err => {
        console.log("error has got its time to show off:", err);
      })
  }




  render() {


    var arr = []
    var key;
    var data;
    arr = Object.keys(this.state.dataArray).map((notes) => {
      key = notes;
      data = this.state.dataArray[key]

      if (data.trash === false && data.archive !== true && data.pinned !== true) {
        return (
          <CardComponent Display={data}
            notekey={key}
            view={this.state.click}
            navigation={this.props.navigation} />
        )
      }
    })

    var pinarr = [];
    var key;
    var data;

    pinarr = Object.keys(this.state.dataArray).map((notes) => {
      key = notes;
      data = this.state.dataArray[key]
      if (data.pinned === true && data.trash !== true) {
        return (
          <CardComponent Display={data}
            notekey={key}
            view={this.state.click}
            navigation={this.props.navigation} />


        )
      }
    })


    return (

      <View style={{ flex: 1 }}>
        <View style={{ height: 80, backgroundColor: /*'#1c313a'*/ /*"#206bad"*/ '#ffffff', width: 500, justifyContent: 'center', paddingHorizontal: 5, }}>
          <View style={{ height: 50, bakgroundColor: '#ffffff', flexDirection: "row", paddingLeft: 10, alignItems: 'center', width: /*350*/ 390, marginLeft: 7, borderRadius: 9, borderColor: "#C1C1C1", borderWidth: 2 }}>


            {/* onpress with drawericon */}
            <TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
              <Image style={styles.drawericon} source={require('../assets/images/drawericon.png')} />
            </TouchableOpacity>

            {/* keep icon */}
            <TouchableOpacity onPress={() => this.componentDidMount()}>
              <Image style={styles.refresh} source={require('../assets/images/refresh.png')}></Image>
            </TouchableOpacity>

            {/* search onpress navigation */}
            <TouchableOpacity onPress={(event) => this.SearchNote(event)}>
              <Text style={styles.text}>Search your Notes</Text>
            </TouchableOpacity>


            {
              this.state.click ?
                (
                  <TouchableOpacity onPress={(event) => this.grid(event)}>
                    <Image style={styles.gridicon} source={require('../assets/images/gridicon1.png')}></Image>
                  </TouchableOpacity>
                )
                :
                (
                  <TouchableOpacity onPress={(event) => this.grid(event)}>
                    <Image style={styles.listicon} source={require('../assets/images/list1.png')}></Image>
                  </TouchableOpacity>
                )
            }

            <TouchableOpacity >
              <Image style={styles.profile} source={require('../assets/images/user.png')}></Image>
            </TouchableOpacity>

            {/* <Profile
              view={this.state.profile}
              profile={this.onChangeProfile}
              navigation={this.props.navigation} /> */}
          </View>

        </View>


        <ScrollView>
          <View><Text style={styles.margin}> Pinned </Text></View>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {pinarr}
          </View>

          <View><Text style={styles.margin}> Others </Text></View>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {arr}
          </View>

        </ScrollView>






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
                <TouchableOpacity /*onPress={this.imagePopUp()}*/>
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
//}





const styles = StyleSheet.create({
  data: {
    height: 70,
    width: 300,
   // backgroundColor: "#ffffff", //"#206bad",   /* '#1c313a' */
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
    alignItems: 'center',
    padding: 50,
    borderRadius: 35,
  },

  drawericon: {
    width: 30,
    height: 40,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginRight: 10
  },

  refresh: {
    width: 30,
    height: 30,
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 50,
    marginLeft: 10
  },
  text: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    fontSize: 20,
    fontWeight: "bold",
    padding: 2,
    marginLeft: -35,

  },
  gridicon: {
    width: 27,
    height: 28,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 10,
    paddingLeft: 30
  },

  listicon: {
    width: 30,
    height: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 10,
    paddingLeft: 30
  },

  profile: {
    width: 35,
    height: 35,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 10,

  },



  // drawericon: {
  //   width: 38, //30,
  //   height: 38,  //40,
  //   justifyContent: 'space-between',
  //   alignItems: "center",       //'flex-start',
  //   marginLeft: 10,   //10,
  //   paddingLeft: 30
  // },
  // refresh: {
  //   width: 30, //30,
  //   height: 30,  //40,
  //   justifyContent: 'space-between',
  //   alignItems: "center",       //'flex-start',
  //   marginLeft: 15,   //10,
  //  marginRight:50,

  // },
  // gridicon: {
  //   width: 27.5, //30,
  //   height: 28.5,  //40,
  //   justifyContent: 'space-between',
  //   alignItems: "center",       //'flex-start',
  //  // marginLeft: 15,   //10, not present
  //  marginRight:100,
  //  marginLeft:10,
  //   paddingLeft: 30
  // },
  // listicon: {
  //   width: 45, //30,
  //   height: 40,  //40,
  //   justifyContent: 'space-between',
  //   alignItems: "center",       //'flex-start',
  //   //marginLeft: 15,   //10, not present
  //   marginRight:100,
  //   paddingLeft: 30
  // },
  // profile: {
  //   width: 45, //30,
  //   height: 40,  //40,
  //   justifyContent: 'space-between',
  //   alignItems: "center",       //'flex-start',
  // //  marginRight: 50,   //10, not present
  //  //  paddingLeft: 30   not present
  //   },

  data1: {

    justifyContent: 'center',
    backgroundColor: "#ffffff",   //"#206bad",    /*   '#1c313a', */
    alignItems: 'center',

  },

  // text: {
  //   justifyContent: 'center',
  //   alignItems: 'flex-start',
  //   fontSize: 20,
  //   fontWeight: "bold",
  //   padding: 2,
  //   marginLeft:-35,

  // },
  data: {
    height: 70,
    width: 340,
 //   backgroundColor: '#ffffff',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
    alignItems: 'center',
    // padding: 25,  not present
    //borderRadius: 15,  not present
  },
  last: {
    // position: 'relative',  not present
    // bottom: 0,  not present
    height: 50,
   // backgroundColor: '#ffffff',
    flexDirection: "row",
    paddingLeft: 25,  //10,
    alignItems: 'center',
    width: /*350*/ 390,
    marginLeft: 10,  //7,
    marginVertical: 10,
    // borderRadius: 1, //9, not present
    borderColor: "#C1C1C1",
    // borderWidth:1  not present

  },

  text1: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 22,
    fontWeight: "bold",
    // marginHorizontal:  3,  //0.5, not
    // marginRight:5, not
    // marginLeft:-55, not 
    // marginLeft:-30 not

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
  margin: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  view1:
  {
    width: 100/*160*/
  },

  view2:
  {
    width: 200 /*320*/
  }

})



// grid(event) {

  //   this.setState({ click: !(this.state.click) })
  //   let { columns, key } = this.state
  //   columns = columns === 2 ? 1 : 2
  //   this.setState({
  //     columns: columns,
  //     key: key + 1
  //   })
  // }
  //required for flatlist
