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
//     height: 30,

// })
/************************************************************************************************************************************************* */

// import React, { Component } from 'react'
// import { View, Text, Button, TouchableOpacity, StyleSheet, Image, Modal } from 'react-native'
// import ImagePicker from 'react-native-image-picker';
// //import { logout, getemail1 } from '../Service/UserService';
// import storageRef from '../Config/Firebase'
// //import { AsyncStorage } from 'react-native'
// import { Avatar } from 'react-native-elements'

// const options = {
//     title: 'Select Avatar',
//     takePhotoButtonTitle: 'take photo',
//     chooseFromLibraryButtonTitle: 'choose photo from library'

// }
// export default class Profile extends Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             avatarSource: null,
//             email: '',
//             open: false,
//             firstname: '',
//             lastname: '',

//         }
//         this.ImageDisplay = this.ImageDisplay.bind(this)

//     }
//     openlink(event) {
//         event.preventDefault();
//         this.setState({ open: true })

//     }
//     closeModal(event) {
//         event.preventDefault();
//         this.setState({ open: false })

//     }
//     async componentDidMount() {
//         var email1 = getemail1()
//         this.setState({ email: email1 })
//         var url = await storageRef.storageRef.child('/profile/' + this.state.email).getDownloadURL().then(function (url) {


//         }, function (error) {
//             console.log("error" + error);

//         });
//         this.setState({
//             firstName: fName,
//             lastName: lName,
//             email: email,
//             avatarSource: url

//         })
//     }

//     ImageDisplay() {

//         ImagePicker.showImagePicker(options, (response) => {
//             console.log('Response = ', response);

//             if (response.didCancel) {
//                 console.log('User cancelled image picker');
//             } else if (response.error) {
//                 console.log('ImagePicker Error: ', response.error);
//             } else if (response.customButton) {
//                 console.log('User tapped custom button: ', response.customButton);
//             } else {
//                 const source = { uri: response.uri };

//                 // You can also display the image using data:
//                 // const source = { uri: 'data:image/jpeg;base64,' + response.data };

//                 this.setState({
//                     avatarSource: source,
//                 });
//                 //this.props.profile(this.state.avatarSource)
//                 var blob = new Blob([this.state.avatarSource], { type: "image/jpeg" });
//                 var storageUrl = '/profile' + this.state.firstName;
//                 var ref = storageRef.storageRef.child('/profile/' + this.state.email).put(blob);


//             }
//         });

//     }

//     static navigationOptions = { header: null };
//     render() {
//         return (
//             <View >
//                 <TouchableOpacity onPress={(event) => this.openlink(event)}>
//                     <Avatar
//                         source={this.state.avatarSource}
//                         rounded
//                     />
//                 </TouchableOpacity>

//                 <Modal style={{ height: 40, marginLeft: 10 }}
//                     visible={this.state.open}>
//                     <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', padding: 20 }}>

//                         <View style={{ flexDirection: 'row' }}>
//                             <View style={{ flexDirection: 'column', padding: 20 }}>
//                                 <View>

//                                     <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
//                                         <Text>{this.state.email}</Text>
//                                     </View>
//                                 </View>

//                                 {/* <View style={{ marginTop: 50 }}>
//  <Button title="Change profile picture" onPress={() => this.image43()}></Button>
//  </View> */}
//                                 <View>
//                                     <TouchableOpacity onPress={() => this.ImageDisplay()}>
//                                         <Avatar size="large"
//                                             source={this.state.avatarSource}
//                                             rounded
//                                         />
//                                     </TouchableOpacity>
//                                 </View>
//                                 <View style={{ marginTop: 10 }}>
//                                     <Button title="Close"
//                                         onPress={(event) => this.closeModal(event)}>

//                                     </Button>
//                                 </View>

//                             </View>

//                         </View>

//                     </View>

//                 </Modal>



//             </View>

//         );
//     }

// }
// const style = StyleSheet.create({
//     data1: {
//          justifyContent: "center", 
//          alignItems: "center", 
//          flex: 1 },
//     data: {
//         justifyContent: "center", alignItems: "center",
//         height: 200,
//         width: 300, backgroundColor: '#c7d3cd',
//     },
//     data2: { justifyContent: "center", alignItems: "center", flexDirection: 'row', },
//     image2: {
//         width: 100,
//         height: 100,
//         justifyContent: 'flex-start',
//         alignItems: 'flex-start',
//         marginHorizontal: 10,
//     },
//     text: { fontSize: 16 },
//     text1: {
//         fontSize: 18, marginVertical: 30
//     },
//     container: { flexDirection: 'row', marginHorizontal: 20 },
//     view1: { height: 100, marginLeft: 10, justifyContent: 'center' },
//     view2: { height: 0, justifyContent: 'center' }



// })