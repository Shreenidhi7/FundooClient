// import React, { Component } from 'react';

// import { StyleSheet, View, Image, Text,TouchableOpacity } from 'react-native';

// import ImagePicker from 'react-native-image-picker'
// // import { TouchableOpacity } from 'react-native-gesture-handler';

// const options={
//     title:'Fundoo App',
//     takePhotoButtonTitle:'Take photo with your camera',
//     chooseFromLibraryButtonTitle:'Choose Photo From Library'
// }
// export default class ProfilePic extends Component {
//     constructor(props){
//         super(props);

//             this.state={
//                 avatarSource:null
//             }    
//         }
// boxPopUp=()=>{


//     ImagePicker.showImagePicker(options, (response) => {
//         console.log('Response = ', response);


//   if (response.didCancel) {
//     console.log('User cancelled image picker');
//   }
//    else if (response.error) {
//     console.log('ImagePicker Error: ', response.error);
//   }

//    else {
//      const source = { uri: response.uri };
//      console.log("<><><><><><><><><><><>",source);


//      this.setState({
//          avatarSource:source
//      })
// }

//     })
// }

//     render() {
//         return (
//             <View style={styles.container}>
//         <Text style={styles.welcome}> Welcome to React Native </Text>

//         <TouchableOpacity style={{backgroundColor:'green',margin:10,padding:10}}   
//         Onpress={this.boxPopUp}>
//             <Text style={{color:'#fff'}}> Select Image</Text>
//         </TouchableOpacity>
//             </View>
//         )
//     }

// }

// const styles=StyleSheet.create({
//     container:{
//         flex:1,
//        // alignItems:'center',
//        // justifyContent:'space-between'
//     },
//     welcome:{
//         color:'black',
//         fontSize:20,
//         fontWeight:'bold'
//     }
// })


/******************************************************************************************************************************************************** */
// import React, { Component } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
// import ImagePicker from 'react-native-image-picker';
// import RNFetchBlob from 'rn-fetch-blob';
// // import { AsyncStorage } from "react-native";
// import AsyncStorage from '@react-native-community/async-storage';
// import { UpdateImage } from "../services/noteService";
// import { API } from '../../appconfig';


// const baseUrl = API.BASE_URL;

// const options = {
//     title: 'Fundoo App',
//     takePhotoButtonTitle: 'Take photo with your camera',
//     chooseFromLibraryButtonTitle: 'Choose photo from library',
// }
// export default class profilePic extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             avatarSource: null,
//             userId: '',

//         }
//     }
//     myfun = () => {
//         //alert('clicked');

//         ImagePicker.showImagePicker(options, (response) => {
//             console.log('Response = ', response.path);

//             if (response.didCancel) {
//                 console.log('User cancelled image picker');
//             }
//             else if (response.error) {
//                 console.log('Image Picker Error: ', response.error);
//             }

//             else {
//                 let source = { uri: response.uri };

//                 // You can also display the image using data:
//                 //  let source = { uri: 'data:image/jpeg;base64,' + response.data };
//                 console.log("response------------------------------------------------------------------", source);

//                 this.setState({
//                     avatarSource: source,
//                     profile: {},

//                 });
//                 console.log("in avatar<><><><><>");

//             }
//         });
//     }
//     //will see later on.....method of RNFetchBlob
//     //   UpdateImage = (source) => { 

//     //  console.log("source ------>",source);

//     //     RNFetchBlob.fetch('PUT', baseUrl+'/updateImage', {

//     //       Authorization: "Bearer access-token",
//     //       otherHeader: "foo",
//     //      'Content-Type': 'multipart/form-data',


//     //      }, [

//     //         // element with property `filename` will be transformed into `file` in form data
//     //      { name: 'image', filename: 'avatar.png', data: this.state.pic }

//     //      ]).then((resp) => {
//     //         console.log("response...."+resp);
//     //         alert('your image uploaded successfully');
//     //         this.setState({ avatarSource: resp })
//     //         this.props.navigation.navigate('DashBoard')
//     //       })
//     //   }

//     //   validateinput() {
//     //     if (this.state.pic == '') {
//     //       console.log("image is not null ")
//     //     }

//     //     else {
//     //       return true
//     // //     }
//     //   }



//     submit(source) {
//         console.log("image src", source);

//         var check = this.validateinput();

//         if (check) {

//             var token = AsyncStorage.getItem('token')
//             console.log("Getting Token while creating Note(Take Note)  ", token);


//             AsyncStorage.getItem('token').then(value => {
//                 console.log("Getting token while Creating  profile pic", value);
//                 this.token = value
//                 var data = {
//                     profile: this.state.profilePic,
//                     token: value
//                 }
//                 const profile1 = JSON.stringify(data.profile);
//                 console.log("stringify data ---->" + profile1);

//                 UpdateImage(data)

//                 this.setState({
//                     avatarSource: profile1
//                 })



//                 this.props.navigation.navigate('DashBord')
//             })
//                 .catch((error) => {
//                     console.log("The User Doesnot Exists,Register Now", error)

//                 })
//         }
//         else {
//             console.log("error in validation");

//         }
//     }


//     render() {

//         return (
//             <View style={styles.container}>
//                 <Text style={styles.welcome}>Welcome to React Native!</Text>

//                 <Image source={this.state.avatarSource}
//                     style={{ width: '100%', height: 300, margin: 10 }} />

//                 <TouchableOpacity style={{ backgroundColor: 'green', margin: 10, padding: 10 }}
//                     onPress={this.myfun}>
//                     <Text style={{ color: '#fff' }}>Select Image</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity onPress={this.submit}>
//                     <Text>Upload</Text>
//                 </TouchableOpacity>


//             </View>
//         );
//     }
// }



// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#F5FCFF',
//     },
//     welcome: {
//         fontSize: 20,
//         textAlign: 'center',
//         margin: 10,
//     },
//     instructions: {
//         textAlign: 'center',
//         color: '#333333',
//         marginBottom: 5,
//     },
// });