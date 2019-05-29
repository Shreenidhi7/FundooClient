// import React,{Component} from 'react'

// import { Text,View,StyleSheet } from 'react-native';
// import firebase from 'react-native-firebase';


// export default class RemoteNotification extends Component {

// async componentDidCatch(){   

// this.checkPersmission();
// this.createNotificationListerns()
// }

// componentWillMount(){
//     this.notificationListener;
//     this.notificationOpenedListener;
// }


// async checkPersmission() {
//     const enabled= await firebase.messaging().hasPermission();
//     if(enabled){
//         this.getToken()
//     } else{
//         this.requestPermission();
//     }
// }


// async createNotificationListerns() {

//     this.notificationListener=firebase.notifications().onNotification((notification)=>{
//         const {title,body}=notification;
//         console.log('onNotification:');
//     })


//     this.notificationOpenedListen=firebase.notifications().onNotificationOpened((notificationOpen)=>{
//         const {title,body}=notificationOpen.notification;
//         console.log('onNotificationOpened:');
//        // this.showAlert(title,body)
//     })


//     const notificationOpen=await firebase.notifications().getInitialNotification();
//     if(notificationOpen){
//         const {title,body}=notificationOpen.notification;
//         console.log('getInitialNotification:');
//     }

//     this.messageListener=firebase.messaging().onMessage((message)=>{
//         console.log(JSON.stringify(message)); 
//     });
// }




//     render(){
//         return(
//             <View>

//             </View>
//         )
//     }
// }