import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { DrawerActions } from 'react-navigation';
import styles from "../StyleSheet";
import { View, TouchableOpacity, Image, Text, ScrollView, } from 'react-native';
import { ToastAndroid } from "react-native";

import { getNotes } from "../services/noteService";

import CardComponent from "../navigation/CardCompo";




export default class DashBoard extends Component {


  static navigationOptions = {

    header: null,
    drawerLabel: 'Notes',
    inactiveTintColor: 'black',
    backgroundColor: 'yellow',
    drawerIcon:
      <Image style={{ width: 24, height: 30, borderRadius: 20 }} source={require('../assets/images/noteicon.png')} />



  }

  constructor(props) {
    super(props);

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

ProfilePic(event){
  this.props.navigation.navigate('ProfilePic')
}



  componentDidMount() {



    AsyncStorage.getItem('token')
      .then(value => {
        // console.log("Getting token while ReCreating Note", value);
        this.token = value
        var data = {
          title: this.state.Title,
          description: this.state.Description,
          archive: this.state.archive,
          pinned: this.state.pinned,
          reminder: this.state.reminder,
          color: this.state.color,
          trash: this.state.trash,
          token: value
        }
        getNotes(data)
          .then((result) => {

            this.setState({
              dataArray: result

            })
            // console.log("Result in Datasoure Frontend===>\n")
            // console.log(result.result)
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
      var data = this.state.dataArray[key]

      if (data.trash !== true && data.pinned === false)
        return (
          <CardComponent Display={data}
            notekey={key}
            view={this.state.click}
            navigation={this.props.navigation} />
        )
    })

    var pinarr = [];
    var key;
    var data;

    pinarr = Object.keys(this.state.dataArray).map((notes) => {
      key = notes;
      data = this.state.dataArray[key]
      if (data.pinned === true  && data.trash !== true) {
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
          <View style={styles.topboxDashboard}>


            {/* onpress with drawericon */}

            <TouchableOpacity onPress={() => { this.props.navigation.dispatch(DrawerActions.openDrawer()) }}>
              <Image style={styles.dashboardTopIcon} source={require('../assets/images/drawericon.png')} />
            </TouchableOpacity>

            {/* keep icon */}
            <TouchableOpacity onPress={() => this.componentDidMount()}>
              <Image style={styles.dashboardTopIcon} source={require('../assets/images/refresh.png')}></Image>
            </TouchableOpacity>

            {/* search onpress navigation */}
            <TouchableOpacity onPress={(event) => this.SearchNote(event)}>
              <Text style={styles.textSearchNotes}>Search your Notes</Text>
            </TouchableOpacity>


            {
              this.state.click ?
                (
                  <TouchableOpacity onPress={(event) => this.grid(event)}>
                    <Image style={styles.dashboardTopIcon} source={require('../assets/images/gridicon1.png')}></Image>
                  </TouchableOpacity>
                )
                :
                (
                  <TouchableOpacity onPress={(event) => this.grid(event)}>
                    <Image style={styles.dashboardTopIcon} source={require('../assets/images/list1.png')}></Image>
                  </TouchableOpacity>
                )
            }

            <TouchableOpacity onPress={(event) => this.ProfilePic(event)}  >
              <Image style={styles.dashboardTopIcon} source={require('../assets/images/user.png')}></Image>
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




        {/* <View style={styles.last}> */}
        {/* <View style={styles.data1}> */}
        <View style={styles.databottomDashboard}>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('TakeNote')}>
            <Text style={styles.textTakeaNote}>Take a note...</Text>
          </TouchableOpacity>

          <View style={styles.bottomicons}>
            <View>
              <TouchableOpacity>
                <Image style={styles.dashbordbottomicon} source={require('../assets/images/checkbox.png')} >
                </Image>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity>
                <Image style={styles.dashbordbottomicon} source={require('../assets/images/paintbrush.png')}>
                </Image>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity>
                <Image style={styles.dashbordbottomicon} source={require('../assets/images/microphone.png')}>
                </Image>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity /*onPress={this.imagePopUp()}*/>
                <Image style={styles.dashbordbottomicon} source={require('../assets/images/image.png')}>
                </Image>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* </View> */}
        {/* </View> */}
      </View>



    );
  }
}
