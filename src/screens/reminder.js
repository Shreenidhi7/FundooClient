import React, { Component } from "react";

import { ToastAndroid } from "react-native";
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import { DrawerActions } from "react-navigation";
import CardComponent from '../navigation/CardCompo'
import { getNotes } from "../services/noteService";
export default class Reminder extends Component {
  //static navigationOptions={headers:null}
  static navigationOptions = {
    header: null,
    drawerLabel:'Reminder',
    backgroundColor:'yellow',
    drawerIcon:
      <Image style={{width:24,height:30}}source={require('../assets/images/archivebox.png')} />
  }
  constructor() {
    super();

    this.state = {

      click: false,
      reminderNote: [],
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
          reminder:this.state.reminder,
          color:this.state.color,
          token: value
        }
        getNotes(data)
          .then((result) => {

            this.setState({
         //  original   //archiveNote: result.result
         reminderNote:result.result
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
    arr1 = Object.keys(this.state.reminderNote).map((notes) => {
      key = notes;
      var data = this.state.reminderNote[key]

     // if ((data.trash === false && data.archive === true && data.pinned !== true)) {
       if(data.reminder===true){
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
        <View style={{ height: 80, backgroundColor:     /*'#1c313a'*/ /*"#206bad"*/ '#ffffff', width: 500, justifyContent: 'center', paddingHorizontal: 5, }}>
          <View style={{ height: 50, backgroundColor: '#ffffff', flexDirection: "row", paddingLeft: 10, alignItems: 'center', width: /*350*/ 390, marginLeft: 7, borderRadius: 9, borderColor: "#C1C1C1", borderWidth: 2, marginRight: 60 }}>



            <TouchableOpacity onPress={() =>   this.props.navigation.dispatch(DrawerActions.openDrawer())}>
              <Image style={styles.drawericon} source={require('../assets/images/drawericon.png')} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.componentDidMount()}>
              <Image style={styles.image} source={require('../assets/images/refresh.png')}></Image>
            </TouchableOpacity>

            <Text style={styles.text}>Reminder
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
    alignItems: "center",      
    marginRight: 30,
    marginLeft:20,
    marginVertical:10

  },

  image: {
    width: 30, //30,
    height: 30,  //40,
    justifyContent: 'space-between',
    alignItems: "center",       //'flex-start',
    marginLeft: 15,   //10,
    paddingLeft: 30,
  },
  gridicon: {
   
    width: 24,
    height: 24,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },

  listicon: {

    width: 42,
    height: 42,
    alignItems: "flex-end",
    justifyContent: 'flex-end'
  }

})






 

















/************************************************************************************************************************************************** */
// import React, { Component } from 'react';

// import { StyleSheet,View,Text,TouchableOpacity,Image } from "react-native";

// import DateTimePicker from 'react-native-modal-datetime-picker'

// import Dialog from 'react-native-dialog'



// export default class Reminder extends Component {
//   static navigationOptions = {
//     header: null,
//     drawerLabel: 'Reminders',
//     drawerIcon:
//       <Image style={{width:24,height:30}}source={require('../assets/images/remaindericon.png')} />
//   }
//   constructor(){
//     super()

//     this.state={
//       dialogVisible:false,
//       isDatePickerVisible:false,
//       isTimePickerVisible:false,
//       time:'',
//       date:''
//     };
//   }
  
//   showDialog=()=>{
    
//   }

//   handleCancel(){
//     this.setState({dialogVisible:false})
//   }

//   handleDelete=()=>{

//   }

//   hideDateTimePicker=()=>{
//     this.setState({
//        isDateTimePickerVisible :false
//     })
//   }

//   showDateTimePiker=()=>{
//     this.setState({
//       isDatePickerVisible:true
//     })
//   }

//   TimePicker=()=>{
//     this.setState({
//       isTimePickerVisible:true
//     })
//   }

//   handleDatePicker=(date)=>{
//     console.log(date+'data of datepicker');
//     var d=''+date;
//     var da=d.slice(4,10)
//     console.log('date--',da);
//     this.setState({
//       date:da
//     })
//   }
//     handleTimePicker=(time)=>{
//       console.log(time+'time of timepicker');
//       var t=''+time;
//       var ta=t.slice(16,21)
//       console.log('time--',ta);
//       this.setState({
//         time:ta
//       })
//       this.hideDateTimePicker();
//     }
//     handleSave(){
//       console.log("Bartidya");
//       var date1=this.state.date+','+this.state.time;
//       console.log("time and date"+date1);
           
//     }
  
//   render(){
//   // const newLocal = <DateTimePicker isVisible={this.state.isVisible} onConfirm={this.handlePicker} onCancel={this.hidePicker} />;
//   const{selectedHours,selectedMinutes}=this.state  
   
//    return(
//       <View>
//       <TouchableOpacity onPress={this.showDialog}>
//         <Text>Show Dialog </Text>
//       </TouchableOpacity>
//       <Dialog.Container visible={true}>
     
//       <Dialog.Title>
//         Set Date and Time
//       </Dialog.Title>
      
//       <Dialog.Description>
//         Do you want to set time?
//       </Dialog.Description>
      

//       <TouchableOpacity onPress={this.showDateTimePiker}>
//         {
//           this.state.date ?
//           (<Text>
//             {this.state.date}
//           </Text>)
//           :
//           (<Text>
//             Select a Date
//           </Text>)
//         }
//       </TouchableOpacity>

//       <DateTimePicker
//           mode='date'
//           isVisible={this.state.isDatePickerVisible}
//           onConfirm={this.handleDatePicker}
//           onCancel={this.hideDateTimePicker}/>

//           <TouchableOpacity onPress={this.TimePicker}>
//           {
//             this.state.time ? 
//             (<Text>
//                 {this.state.time}
//             </Text>)        :
//             (<Text>
//               Select a Time
//             </Text>)
//           }
//           </TouchableOpacity>

//           <DateTimePicker
//             mode='time'
//             isVisible={this.state.isTimePickerVisible}
//             onConfirm={this.handleTimePicker}
//             onCancel={this.hideDateTimePicker}/>

//             <Dialog.Button label="Cancel" onPress={()=>this.handleCancel()}/>
//             <Dialog.Button label="Save" onPress={()=>this.handleSave()}/>
//       </Dialog.Container>
//       </View>
//     )
//         }
// }




// const styles=StyleSheet.create({
//   container:{
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center',
//     backgroundColor:'#F5FcFF',
    
//   }
// })




























































































































// /*************************************************************************************************************** */



// import React,{ Component } from 'react';

// import {StyleSheet, View ,Text,TouchableOpacity,Image } from 'react-native';
// //import { TouchableOpacity } from 'react-native-gesture-handler';
// //import { Image } from 'react-native-elements';
// import { DrawerActions } from 'react-navigation';

// export default class Reminder extends Component {
//   constructor() {
//     super();

//     this.state = {
//       click: false,

//     }
//   }




//   static navigationOptions = { header: null }


//   grid(event) {

//     this.setState({ click: !(this.state.click) })
//   }



//   render() {
//     return(

//  <View style={{flex:1,flexDirection:"column"}}>

//       <View style={{ flex: 1 }}>
//       <View style={{ height: 80, backgroundColor: /*'#1c313a'*/ /*"#206bad"*/ '#ffffff', width: 500, justifyContent: 'center', paddingHorizontal: 5, }}>
//         <View style={{ height: 50, backgroundColor: '#ffffff', flexDirection: "row", paddingLeft: 10, alignItems: 'center', width: /*350*/ 390,marginLeft:7, borderRadius:9,/*borderColor:"#C1C1C1",borderWidth:2 */ }}>
         
//           <TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
//             <Image style={styles.drawericon} source={require('../assets/images/drawericon.png')} />
//           </TouchableOpacity>
      
//           <Text style={styles.text}>
//                   Reminders
//           </Text>

//           <TouchableOpacity onPress={()=>this.props.navigation.navigate("Search")}>    
//              <Image style={styles.searchicon} source={require('../assets/images/searchicon.png')}/>
//           </TouchableOpacity>

// {
//   this.state.click ?
//     (<View>
//       <TouchableOpacity onPress={(event) => this.grid(event)}>
//         <Image style={styles.gridicon} source={require('../assets/images/gridicon1.png')}></Image>
//       </TouchableOpacity>
//     </View>)
//     : 
//     (<View>
//       <TouchableOpacity onPress={(event) => this.grid(event)}>
//         <Image style={styles.listicon} source={require('../assets/images/list1.png')}></Image>
//       </TouchableOpacity>
//     </View>)
// }

//     </View>
//     </View>
//     </View>



// <View style={{ flex: 1, backgroundColor: /*"#009688"*/ "white",  }}></View>
// <View style={styles.last}>
//   <View style={styles.data1}>
//     <View style={styles.data}>

  

//   <TouchableOpacity   onPress={()=>this.props.navigation.navigate('TakeNote')}>
//       <Text style={styles.text1}>Take a note...</Text>
//   </TouchableOpacity>


//       <View>
//         <TouchableOpacity>
//           <Image style={styles.checkbox} source={require('../assets/images/checkbox.png')} >
//           </Image>
//         </TouchableOpacity>
//       </View>

//       <View>
//         <TouchableOpacity>
//           <Image style={styles.pen} source={require('../assets/images/paintbrush.png')}>
//           </Image>
//         </TouchableOpacity>
//       </View>

//       <View>
//         <TouchableOpacity>
//           <Image style={styles.microphone} source={require('../assets/images/microphone.png')}>
//           </Image>
//         </TouchableOpacity>
//       </View>

//       <View>
//         <TouchableOpacity>
//           <Image style={styles.photo} source={require('../assets/images/image.png')}>
//           </Image>
//         </TouchableOpacity>
//       </View>

//     </View>
//   </View>
// </View>





// </View>




//     )
//   }
// }

// const styles=StyleSheet.create({
//   container:{
//     flex:1,
//   },
//   drawericon: {
//     width: 38, //30,
//     height: 38,  //40,
//     justifyContent: 'space-between',
//     alignItems: "center",       //'flex-start',
//     marginLeft: 10,   //10,
//     paddingLeft: 30
//   },
//     text:{
//     flexDirection:"row",
//     justifyContent:"space-between",
//     alignItems:"center",
//    // fontWeight:'bold',
//     fontSize:25,
//     color:"black",
//     paddingHorizontal:20

//     },
//     searchicon: {
//       width: 36, //30,
//       height: 36,  //40,
//       justifyContent: 'space-between',
//       alignItems: "center",       //'flex-start',
//       //marginLeft: 60,   //10,
//      // paddingLeft: 30,
//       marginHorizontal:60,
//       marginRight:30
     
  
//     },
//     gridicon: {
//       width: 28, //30,
//       height: 28,  //40,
//       justifyContent: 'space-between',
//       alignItems: "flex-end",       //'flex-start',
//      // marginLeft: 20,  //15,   //10,
//      // paddingLeft: 30,
//      // marginHorizontal:60
//     },
//     listicon: {
//       width: 40, //30,
//       height: 45,  //40,
//       justifyContent: 'space-between',
//       alignItems: "flex-end",       //'flex-start',
//      // marginLeft: 20,   //15,   //10,
//      // paddingLeft: 30,
//      // marginHorizontal:60
//     },

//     data1: {

//       justifyContent: 'center',
//       backgroundColor: "#ffffff",   //"#206bad",    /*   '#1c313a', */
//       alignItems: 'center',
  
//     },
  
//     text: {
//       justifyContent: 'center',
//       alignItems: 'center',
//       fontSize: 20,
//       fontWeight:"bold",
//       padding: 20
//     },
//     data: {
//       height: 70,
//       width: 340,
//       backgroundColor: '#ffffff',
//       flexDirection: 'row',
//       flexWrap: 'wrap',
//       marginTop: 17,
//       alignItems: 'center',
//      // padding: 25,
//       //borderRadius: 15,
//     },
//     last: {
//      // position: 'relative',
//      // bottom: 0,
//       height: 50, 
//       backgroundColor:  '#ffffff',
//       flexDirection: "row",
//       paddingLeft: 25,  //10,
//       alignItems: 'center',
//       width: /*350*/ 390,
//       marginLeft: 10,  //7,
//       marginVertical:10,
//      // borderRadius: 1, //9,
//       borderColor:"#C1C1C1",
//      // borderWidth:1
//     },

//     text1: { 
//       justifyContent: 'center',
//       alignItems: 'center',
//       fontSize: 22,
//       fontWeight:"bold",
//       paddingRight:15
//       //marginHorizontal: 3, //3,  //0.5,
//       //marginRight:70,
//       //marginLeft:-45,
//      // marginLeft:-30
  
//     },
//     image1: {
//       flexDirection:"row",
//       width: 20,
//       height: 20,
//       justifyContent: 'flex-start',
//       alignItems: 'flex-start',
//       marginHorizontal: 10,
//       paddingHorizontal: 0.5,
//       paddingBottom:60,
  
//     },
//     checkbox: {
//       width: 25,  //20,
//       height: 25,
//       justifyContent: 'center',
//       alignItems: 'center',
//       marginHorizontal: 20,
//       paddingHorizontal: 10,
//       marginRight: 1, //10,
//     },
//     pen: {
//       width: 25,
//       height: 25,
//       justifyContent: 'flex-start',
//       alignItems: 'flex-start',
//       marginHorizontal: 10,
//       paddingHorizontal: 0.5
//     },
//     microphone: {
//       width: 35,
//       height: 35,
//       justifyContent: 'flex-start',
//       alignItems: 'flex-start',
//       marginHorizontal: 10,
//       paddingHorizontal: 0.5
//     },
//     photo: {
//       width: 25,
//       height: 25,
//       justifyContent: 'flex-start',
//       alignItems: 'flex-start',
//       marginHorizontal: 10,
//       paddingHorizontal: 0.5
//     }
  
  
// })


// /*************************************************************************************************************************************** */