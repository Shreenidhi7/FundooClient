import React, { Component } from "react";
import { View, TouchableOpacity, StyleSheet, Image,Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Dialog from 'react-native-dialog'



export default class Signout extends Component {
    static navigationOptions = {
        header: null,
        drawerLabel: 'SignOut',
        backgroundColor: 'yellow',
        drawerIcon:
            <Image style={{ width: 24, height: 30 }} source={require('../assets/images/signout.png')}></Image>
    }
    constructor() {
        super()

        this.state = {
            dialogVisible: false,
            dataArray:[],
        }
    }
    // _handleLogOut = () =&gt; {
    //     AsyncStorage.removeItem('jwt');
    //     alert('You have been logged out.');
    // }


  componentDidMount() {}



//     AsyncStorage.getItem('token')
//       .then(value => {
//         console.log("Getting token while ReCreating Note", value);
//         this.token = value
//         var data = {
//           title: this.state.Title,
//           description: this.state.Description,
//           archive: this.state.archive,
//           pinned: this.state.pinned,
//           reminder: this.state.reminder,
//           token: value
//         }
//         getNotes(data)
//           .then((result) => {

//             this.setState({
//               dataArray:
//                 result.result
//             })
//             console.log("Result in Datasoure Frontend===>\n")
//             console.log(result.result)
            

//           })
//           .catch((err) => {
//             ToastAndroid.showWithGravity("Error occured while Retriving Notes ", err, ToastAndroid.LONG, ToastAndroid.BOTTOM)

//           })

//           handleLogOut = (dataArray) => {

//             AsyncStorage.getItem('token')
//                 token=dataArray.token
//                 AsyncStorage.removeItem('token',token);
//                 console.log("You have been Logged Out");
//                 alert('You have been logged out.');
              
                
//                 this.props.navigation.navigate('Login')
//                 this.setState({ dialogVisible: !this.state.dialogVisible })
//             }


//       })
//       .catch(err => {
//         console.log("error has got its time to show off:", err);
//       })
//   }

    handleLogOut = () => {

        AsyncStorage.removeItem('token',(err,result)=>{
            if(err){
                console.error("Error in logging you out");
                this.props.navigation.navigate('Dashboard');
            }else{
                console.log("signout works ");
                alert('You have been logged out.');
                this.props.navigation.navigate('Login');
                this.setState({ dialogVisible: !this.state.dialogVisible })
            }
        });
    }
    showDialog = () => {
        this.setState({ dialogVisible: !this.state.dialogVisible })
    }

    handleCancel = () => {
        this.setState({ dialogVisible: false })
    }
    render() {
        return (
            <View>
                <TouchableOpacity onPress={(event) => this.showDialog(event)}>
                    <Image style={styles.sample} source={require('../assets/images/sample.jpg')}></Image>
                </TouchableOpacity>


                <Dialog.Container visible={this.state.dialogVisible}>

                    <TouchableOpacity >
                        <Image style={{ width: 30, height: 40 }} source={require('../assets/images/sample.jpg')}></Image>
                        <Text style={styles.text}> You are in Middle of ur work!!!
                            Do You Really Want to SignOut
                        </Text>
                    </TouchableOpacity>

                    <Dialog.Title> Do You want to Signout </Dialog.Title>
                    <View>

                    </View>


                    <Dialog.Button label= "Cancel" onPress={() => this.handleCancel()} />
                    <Dialog.Button label="SignOut/Logout" onPress={() => this.handleLogOut()} />
                </Dialog.Container>


            </View>
        )
    }
}

const styles=StyleSheet.create({
    sample:{
        borderRadius: 120,
         width: 150,
          height: 150
    },
    text:{
        fontSize:20,
        fontWeight:'bold'
    }
})


/**************************************************************************************************************************************** */
