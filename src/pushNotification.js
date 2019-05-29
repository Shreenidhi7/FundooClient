// import firebase from 'react-native-firebase'
// import AsyncStorage from '@react-native-community/async-storage';
// import { pushNotification } from './services/noteService';

// export const initializeFirebase = () => {
//     firebase.initializeApp({
//       messagingSenderId: "1077153355843"
//     })
// }

// export const askForPermissioToReceiveNotifications = async () => {
//     try {
//       const messaging = firebase.messaging();
  
//       await messaging.requestPermission();
  
//       const token = await messaging.getToken();
//       console.log("FireBase token is:", token);
//       AsyncStorage.setItem("pushToken", token);
//       var data = {
//         pushToken: token,
//         userId: AsyncStorage.getItem("userId")
//       };
     
//      pushNotification(data);
//       messaging.onMessage(function(payload) {
//         getNotif(payload);
//         console.log("Message received. ", payload);
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   };