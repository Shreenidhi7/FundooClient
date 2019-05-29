import React, { Component } from "react";
import styles from "../StyleSheet";
import { ToastAndroid } from "react-native";
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import { DrawerActions } from "react-navigation";
import CardComponent from '../navigation/CardCompo'
import { getNotes } from "../services/noteService";

import DraggableFlatList from 'react-native-draggable-flatlist'

export default class Archive extends Component {
  //static navigationOptions={headers:null}
  static navigationOptions = {
    header: null,
    drawerLabel: 'Archive',
    backgroundColor: 'yellow',
    drawerIcon:
      <Image style={{ width: 24, height: 30 }} source={require('../assets/images/archive.png')} />
  }
  constructor() {
    super();

    this.state = {

      click: false,
      archiveNote: [],
      columns: 2,  //this is for flatlist
      key: 1,     //this is for flatlist

      data: [...Array(20)].map((d, index) => ({
        key: `item-${index}`,
        label: index,
        backgroundColor: `rgb(${Math.floor(Math.random() * 255)},${index * 5}, ${132})`,
      }))

    }


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
          trash: this.state.trash,
          token: value,
        }
        getNotes(data)
          .then((result) => {

            this.setState({
              //  original   //archiveNote: result.result
              archiveNote: result
            })
            console.log("IN Archive Notes==================================================>", result)
          })
          .catch((err) => {
            ToastAndroid.showWithGravity("Error occured while Retriving Notes ", err, ToastAndroid.LONG, ToastAndroid.BOTTOM)

          })
      })
      .catch(err => {
        console.log("error has got its time to show off:", err);
      })
  }



  // grid(event) {
  //   this.setState({ click: !(this.state.click) })
  // }

  //card component
  // render() {

  //   var arr1 = []
  //   var key;
  //   arr1 = Object.keys(this.state.archiveNote).map((notes) => {
  //     key = notes;
  //     var data = this.state.archiveNote[key]

  //     if (data.archive === true && data.trash!==true) {
  //       return (
  //         <CardComponent Display={data}
  //           notekey={key}
  //           view={this.state.click}
  //           navigation={this.props.navigation} />
  //       )
  //     }
  //   })




  //this is for FlatList
  grid(event) {
    this.setState({ click: !(this.state.click) })
    let { columns, key } = this.state
    columns = columns === 2 ? 1 : 2
    this.setState({
      columns: columns,
      key: key + 1
      // this.setState({ click: !(this.state.click) }) not included
    })
  }





  /***this is for flatlist */
  renderItem = ({ item, index, move, moveEnd, isActive }) => {

    if (item.archive === true)
      return (
        <ScrollView style={{ backgroundColor: "white", borderRadius: 10, borderWidth: 1, marginBottom: 10, marginLeft: 10 }}>
          <TouchableOpacity onLongPress={move} onPressOut={moveEnd}>
            <View style={{ padding: 15/*5*/ }}>
              <Text style={{ color: "black", fontWeight: '600' }}>
                {item.title}
              </Text>
            </View>

            <View style={{ padding: 15/*5,*/ }}>
              <Text style={{ color: "black" }}>
                {item.description}
              </Text>.
            </View>

            <View style={{ padding: 15/*5,*/ }}>
            <Text style={{ color: "black" }}>
                {item.reminder}
                </Text>
            </View>
            
          </TouchableOpacity>
        </ScrollView>
      )

  }


  render() {
    const { columns, key } = this.state







    return (
      // <View style={{flex:1,flexDirection:'column'}}>                   used for nothing
      // <View style={{ flex: 1, flexDirection: "row", marginTop: 10 }}>   used for nothing

      <View style={{ flex: 1 }}>
        <View style={{ height: 80, backgroundColor: '#ffffff', width: 500, justifyContent: 'center', paddingHorizontal: 5, }}>
          <View style={styles.topboxArchive}>




            <TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
              <Image style={styles.ArchiveTopIcon} source={require('../assets/images/drawericon.png')} />
            </TouchableOpacity>
            {/* </View> */}

            
            <TouchableOpacity onPress={() => this.componentDidMount()}>
              <Image style={styles.ArchiveTopIcon} source={require('../assets/images/refresh.png')}></Image>
            </TouchableOpacity>
            {/* </View> */}

          
            <Text style={styles.text}>
              Archive
            </Text>
            {/* </View> */}

        
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Search")}>
              <Image style={styles.ArchiveTopIcon} source={require('../assets/images/searchicon.png')} />
            </TouchableOpacity>
            {/* </View> */}


            {
              this.state.click ?
                (<View >
                  <TouchableOpacity onPress={(event) => this.grid(event)}>
                    <Image style={styles.ArchiveTopIcon} source={require('../assets/images/gridicon1.png')}></Image>
                  </TouchableOpacity>
                </View>)
                :
                (<View >
                  <TouchableOpacity onPress={(event) => this.grid(event)}>
                    <Image style={styles.ArchiveTopIcon} source={require('../assets/images/list1.png')}></Image>
                  </TouchableOpacity>
                </View>)
            }
          </View>



        </View>


        <ScrollView>
            <View style={{flexGrow:1}}>
          {/* <FlatList */}
          <DraggableFlatList
            key={key}
            data={this.state.archiveNote}
            renderItem={this.renderItem}
            numColumns={columns}
            keyExtractor={(item, index) => `draggable-item-${item.key}`}                      /* { index }}  */
            scrollPercent={5}
            onMoveEnd={({ data }) => this.setState({ data })}/>

          {/* /> */}
          </View>
        </ScrollView>

        {/* 
        <ScrollView>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {arr1}
          </View>

        </ScrollView>  */}

      </View>

    )
  }
}


/*************************************************************************************************************************************************** */

// import React, { Component } from 'react';
// import {
//   View,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   Text,
//   FlatList,
//   ScrollView
// } from 'react-native';
// //import { ScrollView, FlatList } from 'react-native-gesture-handler';
// import DraggableFlatList from 'react-native-draggable-flatlist';
// import AsyncStorage from '@react-native-community/async-storage';
// import { DrawerActions } from 'react-navigation'
// import { getNotes } from '../services/noteService'


// export default class DashBoard1 extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       archiveNote: [],
//       isLoading: true,
//       columns: 2,
//       click: false,
//       // userEmail: this.props.navigation.state.params.userEmail,
//       data: [...Array(20)].map((d, index) => ({
//         key: `item-${index}`,
//         label: index,
//         backgroundColor: `rgb(${Math.floor(Math.random() * 255)}, ${index * 5}, ${132})`,
//       }))
//     }

//   };

//   grid(event) {
//     this.setState({ click: !(this.state.click) })
//     let { columns, key } = this.state
//     columns = columns === 2 ? 1 : 2
//     this.setState({
//       columns: columns,
//       key: key + 1
//     })
//   }

//   componentDidMount() {

//     AsyncStorage.getItem('token')
//       .then(value => {
//         console.log("Getting token while ReCreating Note", value);
//         this.token = value
//         var data = {
//           title: this.state.Title,
//           description: this.state.Description,
//           archive: this.state.archive,
//           trash: this.state.trash,
//           token: value,
//         }
//         getNotes(data)
//           .then((result) => {

//             this.setState({
//               //  original   //archiveNote: result.result
//               archiveNote: result
//             })
//             console.log("IN Archive Notes==================================================>", result)
//           })
//           .catch((err) => {
//             ToastAndroid.showWithGravity("Error occured while Retriving Notes ", err, ToastAndroid.LONG, ToastAndroid.BOTTOM)

//           })
//       })
//       .catch(err => {
//         console.log("error has got its time to show off:", err);
//       })
//   }




//   renderItem = ({ item, index, move, moveEnd, isActive }) => {
//     return (
//       <ScrollView style={{ backgroundColor: '#E6E6E6', borderRadius: 10, marginLeft: 5, marginTop: 5, marginRight: 5 }}>
//         <TouchableOpacity onLongPress={move} onPressOut={moveEnd}>
//           <View style={{ padding: 5 }}>
//             <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}>{item.title}</Text>
//           </View>
//           <View style={{ padding: 5 }}>
//             <Text style={{ color: 'black' }}>{item.description}</Text>
//           </View>
//         </TouchableOpacity>
//       </ScrollView>
//     )
//   }

//   // renderItem = ({ item, index, move, moveEnd, isActive }) => {
//   //   return (
//   //     <TouchableOpacity
//   //       style={{ 
//   //         height: 100, 
//   //         backgroundColor: isActive ? 'blue' : item.backgroundColor,
//   //         alignItems: 'center', 
//   //         justifyContent: 'center' 
//   //       }}
//   //       onLongPress={move}
//   //       onPressOut={moveEnd}
//   //     >
//   //       <Text style={{ 
//   //         fontWeight: 'bold', 
//   //         color: 'white',
//   //         fontSize: 32,
//   //       }}>{item.label}</Text>
//   //     </TouchableOpacity>
//   //   )
//   // }


//   // render() {
//   //   return (
//   //     <View style={{ flex: 1 }}>
//   //       <DraggableFlatList
//   //         data={this.state.data}
//   //         renderItem={this.renderItem}
//   //         keyExtractor={(item, index) => `draggable-item-${item.key}`}
//   //         scrollPercent={5}
//   //         onMoveEnd={({ data }) => this.setState({ data })}
//   //       />
//   //     </View>
//   //   )
//   // }

//   render() {
//     const { columns, key } = this.state
//     return (
//       <View style={styles.page}>
//         <View style={styles.topBar}>
//           <TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
//             <Image style={styles.drawericon} source={require('../assets/images/drawericon.png')} ></Image>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <Text style={styles.buttonText}>Search your note</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => this.componentDidMount()} >
//             <Image style={styles.refreshicon} source={require('../assets/images/refresh.png')} ></Image>
//           </TouchableOpacity>
//           {
//             this.state.click ?

//               (<TouchableOpacity onPress={(event) => this.grid(event)}>
//                 <Image style={styles.gridicon} source={require('../assets/images/gridicon1.png')} ></Image>
//               </TouchableOpacity>)
//               :
//               (<TouchableOpacity onPress={(event) => this.grid(event)}>
//                 <Image style={styles.gridicon} source={require('../assets/images/list1.png')} ></Image>
//               </TouchableOpacity>
//               )
//           }
//           <TouchableOpacity>
//             <Text style={styles.usericon}>V</Text>
//           </TouchableOpacity>
//         </View>
//         <ScrollView>
//           <View style={{ flex: 1 }}>
//             <DraggableFlatList
//               key={key}
//               data={this.state.data}
//               renderItem={this.renderItem}
//               numColumns={columns}
//               keyExtractor={(item, index) => `draggable-item-${item.key}`}
//               scrollPercent={5}
//               onMoveEnd={({ data }) => this.setState({ data })}
//             />
//           </View>
//         </ScrollView>


      
//       </View>
//     );
//   }
// }





// const styles = StyleSheet.create({
//   page: {
//     backgroundColor: 'white',
//     flex: 1
//   },

//   drawericon: {
//     height: 23,
//     width: 23,
//     marginLeft: '15%'
//   },

//   refreshicon: {
//     height: 26,
//     width: 26,
//     marginLeft: '20%',
//     marginRight: '2%'
//   },

//   gridicon: {
//     height: 23,
//     width: 23,
//     marginLeft: '2%'
//   },

//   usericon: {
//     color: 'grey',
//     height: 26,
//     width: 26,
//     marginLeft: 18,
//     borderRadius: 60
//   },

//   topBar: {
//     borderColor: '#C1C1C1',
//     borderRadius: 8,
//     borderWidth: 2,
//     flexDirection: 'row',
//     marginLeft: 15,
//     marginTop: 15,
//     marginRight: 15,
//     paddingTop: 8,
//     paddingBottom: 8
//   },

//   textInput: {
//     fontSize: 18,
//     paddingLeft: 15
//   },

//   buttonText: {
//     fontSize: 18,
//     paddingLeft: '1%'
//   },

//   bottomBar: {
//     flexDirection: 'row',
//     borderColor: '#C1C1C1',
//     borderWidth: 1,
//     padding: 12
//   },







// })






