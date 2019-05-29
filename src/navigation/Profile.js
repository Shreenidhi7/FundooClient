
// import React, { Component } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
// import ImagePicker from 'react-native-image-picker';
// //import RNFetchBlob from 'rn-fetch-blob';
// //import { AsyncStorage } from "react-native";
// import AsyncStorage from '@react-native-community/async-storage';
// import { setprofile } from "../services/userServices";
// import { upload } from '../services/NoteServices';

// const options = {
//   title: 'Fundoo App',
//   takePhotoButtonTitle: 'Take photo with your camera',
//   chooseFromLibraryButtonTitle: 'Choose photo from library',
// }
// export default class Profile extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       avatarSource:null,
//       userId : '',
//       uploadNote:{}

//     }
//   }
//   myfun = () => {
//     //alert('clicked');

//     ImagePicker.showImagePicker(options, (response) => {
//       console.log('Response = ', response);

//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       }
//       else if (response.error) {
//         console.log('Image Picker Error: ', response.error);
//       }

//       else {
//         let source = { uri: response.uri };

//         // You can also display the image using data:
//         //  let source = { uri: 'data:image/jpeg;base64,' + response.data };
//          console.log("response------------------------------------------------------------------",source);

//         this.setState({
//           avatarSource: source,
//           uploadNote: {},

//         });
//       }
//     });
//   }
// //   uploadPic = (source) => {

// //  console.log("source ------>",source);
 
// //     RNFetchBlob.fetch('PUT', 'http:10.0.2.2:8000/setProfilePic', {

// //       Authorization: "Bearer access-token",
// //       otherHeader: "foo",
// //      'Content-Type': 'multipart/form-data',
      

// //      }, [
      
// //         // element with property `filename` will be transformed into `file` in form data
// //      { name: 'image', filename: 'avatar.png', data: this.state.pic }
        
// //      ]).then((resp) => {
// //         console.log("response...."+resp);
// //         alert('your image uploaded successfully');
// //         this.setState({ avatarSource: resp })
// //         this.props.navigation.navigate('DashBord')
// //       })
// //   }

//   // validateinput() {
//   //   if (this.state.pic == '') {
//   //     console.log("image is not null ")
//   //   }
   
//   //   else {
//   //     return true
//   //   }
//   // }

  

//   // submit (source){
//   //   console.log("image src",source);
    
//   //   var check = this.validateinput();

//   //   if (check) {

//   //       var token=AsyncStorage.getItem('token')
//   //     console.log("Getting Token while creating Note(Take Note)  ",token);


//   //     AsyncStorage.getItem('token').then(value => {
//   //       console.log("Getting token while Creating  profile pic", value);
//   //       this.token = value
//   //       var data = {
//   //         // title: this.state.Title,
//   //         // description: this.state.Description,
//   //         // reminder: this.state.reminder,
//   //         // color: this.state.color,
//   //         // trash: this.state.trash,
//   //         // archive: this.state.archive,
//   //         // pin: this.state.pin,
//   //         profile:this.state.profilePic,
//   //          token: value
//   //       }
//   //       const profile1 =JSON.stringify(data.profile);
//   //       console.log("stringify data ---->"+profile1);
       
//   //       upload(data)
        
//   //                this.setState({ avatarSource: profile1 })



//   //       this.props.navigation.navigate('DashBord')
//   //     })
//   //     .catch((error) => {
//   //       console.log("The User Doesnot Exists,Register Now", error)

//   //     })
          

      
  

//   //  }
//   //   else {
//   //     console.log("error in validation");

//   //   }
//   //  }




//   submit = async event => {


//    AsyncStorage.getItem('token')
//    .then(value => {
//      console.log("Getting token while ReCreating Note", value);
//      this.token = value
//      var data = {

//        profilePic:this.props.navigation.state.params.Display.avatarSource,
//       // profilePic:this.state.avatarSource,

//        token: value
//      }
//      upload(data)
//        .then((result) => {

//          this.setState({
//            uploadNote: result.result
//          })
//          console.log("Result in Datasoure Frontend===>\n")
//          console.log(uploadNote)

//        })
//        .catch((err) => {
//          console.log("Error occured while Retriving  archiveNotes ", err)

//        })
//    })
//    .catch(err => {
//      console.log("error has got its time to show off:", err);
//    })
// }


//   render() {
    
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>

//         <Image source={this.state.avatarSource}
//           style={{ width: '100%', height: 300, margin: 10 }} />

//         <TouchableOpacity style={{ backgroundColor: 'green', margin: 10, padding: 10 }}
//           onPress={this.myfun}>
//           <Text style={{ color: '#fff' }}>Select Image</Text>
//         </TouchableOpacity>
        
//         <TouchableOpacity onPress={this.submit}>
//           <Text>Upload</Text>
//         </TouchableOpacity>


//       </View>
//     );
//   }
// }



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });





/******************************************************************************************************************************************************* */
// import React, { Component } from "react";

// import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

// import ImagePicker from 'react-native-image-picker'
// //import { TouchableOpacity } from "react-native-gesture-handler";

// const options = {
//     title: "FunddoApp",
//     takePhotoButtonTitle: 'Take Photo with camera',
//     chooseFromLibraryButtonTitle: 'choose photo from library'
// }

// export default class Profile extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             avatarSource: null
//         }
//     }
//         myfun = () => { 
//             ImagePicker.showImagePicker(options, (response) => {
//                 console.log('Response = ', response);

//                 if (response.didCancel) {
//                     console.log('User cancelled image picker');
//                 } else if (response.error) {
//                     console.log('ImagePicker Error: ', response.error);
//                 } else {
//                     const source = { uri: response.uri };

//                     // You can also display the image using data:
//                     // const source = { uri: 'data:image/jpeg;base64,' + response.data };

//                     this.setState({
//                         avatarSource: source,
//                     });
//                 }
//             });
//         }

//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text> hello </Text>
//                 <TouchableOpacity style={{ backgroundColor: 'green', margin: 10, padding: 10 }}
//                     onPress={this.myfun}>
//                     <Text style={{ color: '#fff' }} Select Image></Text>
//                 </TouchableOpacity>

//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     width: 20,
// //     height: 30,

// })
/************************************************************************************************************************************************* */
