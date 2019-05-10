import React, { Component } from "react";

import { ToastAndroid } from "react-native";
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import { DrawerActions } from "react-navigation";
import CardComponent from '../navigation/CardCompo'
import { getNotes } from "../services/noteService";
export default class Archive extends Component {
  //static navigationOptions={headers:null}
  static navigationOptions = {
    header: null,
    drawerLabel: 'Archive',
    backgroundColor:'yellow',
    drawerIcon:
      <Image style={{width:24,height:30}}source={require('../assets/images/archivebox.png')} />
  }
  constructor() {
    super();

    this.state = {

      click: false,
      archiveNote: [],
      //  columns: 2,
      //  key: 1
    }
  }
    // static navigationOptions = { 
    //   drawerLabel:'Archive',
    //   inactiveTintcolor:'black',
    //   drawerIcon:()=>{
    //     <Image
    //     source={require('../assets/images/searchicon.png')}
    //     style={[styles.icon]}/>
    //   }
    //  }
  

  componentDidMount() {

    AsyncStorage.getItem('token')
      .then(value => {
        console.log("Getting token while ReCreating Note", value);
        this.token = value
        var data = {
          title: this.state.Title,
          description: this.state.Description,
          archive: this.state.archive,

          token: value
        }
        getNotes(data)
          .then((result) => {

            this.setState({
         //  original   //archiveNote: result.result
         archiveNote:result.result
            })
            console.log("Result in Datasoure Frontend===>\n")
            console.log(result.result)
            //  console.log("state in dash ->",this.state.dataSource);

          })
          .catch((err) => {
            ToastAndroid.showWithGravity("Error occured while Retriving Notes ", err, ToastAndroid.LONG, ToastAndroid.BOTTOM)

          })
      })
      .catch(err => {
        console.log("error has got its time to show off:", err);
      })
  }



  grid(event) {
    this.setState({ click: !(this.state.click) })
  }

  render() {

    var arr1 = []
    var key;
    arr1 = Object.keys(this.state.archiveNote).map((notes) => {
      key = notes;
      var data = this.state.archiveNote[key]

      if ((data.trash === false && data.archive === true && data.pinned !== true)) {
        return (
          <CardComponent Display={data}
            notekey={key}
            view={this.state.click}
            navigation={this.props.navigation} />
        )
      }
    })





    // grid(event) {
    //   this.setState({ click: !(this.state.click) })
    //   let { columns, key } = this.state
    //   columns = columns === 2 ? 1 : 2
    //   this.setState({
    //     columns: columns,
    //     key: key + 1
    //     // this.setState({ click: !(this.state.click) }) not included
    //   })
    // }






    // renderItem = ({ item }) => {
    //   return (
    //     <ScrollView style={{ backgroundColor: "white", borderRadius: 10, borderWidth: 1, marginBottom: 10, marginLeft: 10 }}>
    //       <TouchableOpacity>
    //         <View style={{ padding: 5, }}>
    //           <Text style={{ color: "black"/*"white"*/, fontWeight: '600' }}>
    //             {item.title}
    //           </Text>
    //         </View>

    //         <View style={{ padding: 5, }}>
    //           <Text style={{ color: "black"/*"white"*/ }}>
    //             {item.description}
    //           </Text>
    //         </View>
    //       </TouchableOpacity>
    //     </ScrollView>
    //   )

    // }


    // render() {
    // const { columns, key } = this.state







    return (
      // <View style={{flex:1,flexDirection:'column'}}>
      // <View style={{ flex: 1, flexDirection: "row", marginTop: 10 }}>

      <View style={{ flex: 1 }}>
        <View style={{ height: 80, backgroundColor:     /*'#1c313a'*/ /*"#206bad"*/ '#ffffff', width: 500, justifyContent: 'center', paddingHorizontal: 5, }}>
          <View style={{ height: 50, backgroundColor: '#ffffff', flexDirection: "row", paddingLeft: 10, alignItems: 'center', width: /*350*/ 390, marginLeft: 7, borderRadius: 9, borderColor: "#C1C1C1", borderWidth: 2, marginRight: 60 }}>



            <TouchableOpacity onPress={() =>   this.props.navigation.dispatch(DrawerActions.openDrawer())}>
              <Image style={styles.drawericon} source={require('../assets/images/drawericon.png')} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.componentDidMount()}>
              <Image style={styles.image} source={require('../assets/images/refresh.png')}></Image>
            </TouchableOpacity>

            <Text style={styles.text}>
              Archive
            </Text>


            <TouchableOpacity onPress={() => this.props.navigation.navigate("Search")}>
              <Image style={styles.searchicon} source={require('../assets/images/searchicon.png')} />
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


        {/* <ScrollView>

          <FlatList
            key={key}
            data={this.state.dataSource}
            renderItem={this.renderItem}
            numColumns={columns}
            keyExtractor={(item, index) => { index }}
          />

        </ScrollView> */}


        <ScrollView>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {arr1}
          </View>

        </ScrollView>

      </View>

    )
  }
}





const styles = StyleSheet.create({
  icon:{
    width:20,
    height:20,
  },
  drawericon: {

    width: 38, //30,
    height: 38,  //40,
    justifyContent: 'space-between',
    alignItems: "center",       //'flex-start',
    marginLeft: 5,   //10,
    paddingLeft: 30
  },
  text: {
    marginLeft: 30,
    fontSize: 25,
    color: "black",

  },
  searchicon: {
    width: 35, //30,
    height: 35,  //40,
    justifyContent: 'space-between',
    alignItems: "center",       //'flex-start',
    //marginLeft: 60,   //10,
    // paddingLeft: 30,
    marginHorizontal: 80,
    marginRight: 30


  },

  /* gridicon: {
    // marginRight: 10,
    marginRight:40,
     marginTop: 5,
     width: 24, //30,
     height: 24,  //40,
     justifyContent: 'space-between',
     alignItems: "flex-end",       //'flex-start',
     // marginLeft: 20,  //15,   //10,
     // paddingLeft: 30,
     // marginHorizontal:60
   },
   listicon: {
     marginRight:0,
    //marginLeft: -11,
     marginTop: -1,
     width: 42, //30,
     height: 42,  //40,
     justifyContent: 'space-between',
     alignItems: "flex-end",       //'flex-start',
     // marginLeft: 20,   //15,   //10,
     // paddingLeft: 30,
     // marginHorizontal:60
   },
 
   */
  image: {
    width: 30, //30,
    height: 30,  //40,
    justifyContent: 'space-between',
    alignItems: "center",       //'flex-start',
    marginLeft: 15,   //10,
    paddingLeft: 30,
  },
  gridicon: {
    marginLeft: -10,
    width: 24,
    height: 24,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },

  listicon: {
    marginLeft: -19,
    width: 42,
    height: 42,
    alignItems: "flex-end",
    justifyContent: 'flex-end'
  }

})






 // componentDidMount() {
  //   const url = "http://192.168.0.91:3000/getNotes"

  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       this.setState({
  //         dataSource: responseJson.result,
  //       })
  //     })
  //     .catch((err) => {
  //       console.log("error===>", err);

  //     })

  // }


