import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {

    StyleSheet,
    Text,
    View,

    Image,
    TouchableOpacity,
    TextInput,


} from 'react-native';
import { ToastAndroid } from 'react-native';
import { createNote } from "../services/noteService";

import Menu from '../navigation/Menu'

export default class TakeNote extends Component {
    constructor() {
        super();
        this.state = {
            Title: "",
            Description: "",
            token: '',
            archive: false,
            pin: false,
            trash: false,
            click: false,
            newline: true,
            TakeNote: {},
            archiveNote: {},
            color: '',


        }
        this.onChangeColor = this.onChangeColor.bind(this)
        this.handleTrash = this.handleTrash.bind(this)
    }

    /* getpin(event) {
         this.setState({ clickpin: !this.state.clickpin })
     }  */

    //  setToken() {
    //     AsyncStorage.getItem('token')
    //         .then(value => {
    //             return value;
    //         })
    //         .catch(err => {
    //             console.error("failede to fetch the token");
    //             return null;
    //         })
    // }


    getpin = async event => {
        console.warn(this.state.pin + " before")
        await this.setState({ pin: !this.state.pin })
        console.warn(this.state.pin + " after")
    }


    archive = async event => {
        console.warn(this.state.archive + "1st");
        await this.setState({
            archive: !this.state.archive
        })
        console.warn(this.state.archive + "2nd");
    }

    getmenu() {
        this.setState({
            click: !this.state.click
        })
    }

    async handleTrash(value) {
        console.log("trash", value);
        this.setState({
            trash: value
        })
    }

    async onChangeColor(newColor) {
        console.log("color", newColor);
        this.setState({
            color: newColor
        })
    }

    validateinput() {
        if (this.state.Title == '') {
            ToastAndroid.showWithGravity("Enter Title", ToastAndroid.LONG, ToastAndroid.BOTTOM)
        }
        if (this.state.Description == '') {
            ToastAndroid.showWithGravity("Enter Description", ToastAndroid.LONG, ToastAndroid.BOTTOM)
        }
        else {
            return true
        }
    }






    /*
        _storeData = async () => {
            try {
              await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
            } catch (error) {
              // Error saving data
            }
          };
    
          _retrieveData = async () => {
            try {
              const value = await AsyncStorage.getItem('TASKS');
              if (value !== null) {
                // We have data!!
                console.log(value);
              }
            } catch (error) {
              // Error retrieving data
            }
          };
    
    */


    submit = async event => {
        var check = this.validateinput();

        if (check) {

            //   var token=AsyncStorage.getItem('token')
            // console.log("Getting Token while creating Note(Take Note)  ",token);


            AsyncStorage.getItem('token').then(value => {
                console.log("Getting token while Creating Note", value);
                this.token = value
                var data = {
                    title: this.state.Title,
                    description: this.state.Description,
                    archive: this.state.archive,
                    token: value
                }
                createNote(data)
                    .then((result) => {

                        this.setState({
                            TakeNote: result.data.data
                        })
                        this.props.navigation.navigate('DashBoard')
                    })
                    .catch((err) => {
                        ToastAndroid.showWithGravity("Fill all the sections", err, ToastAndroid.LONG, ToastAndroid.BOTTOM)

                    })
            })

        }
        else {
            console.log("error in validation");

        }
    }







    render() {
        return (
            <View>
                <View style={styles.container}>

                    <TouchableOpacity onPress={() => this.submit()}>
                        <Image style={styles.arrow} source={require('../assets/images/leftarrow.png')} >
                        </Image>
                    </TouchableOpacity>

                    <Text>                                                     </Text>
                    {
                        this.state.pin ?
                            (<TouchableOpacity onPress={(event) => this.getpin(event)}>
                                <Image style={styles.pinbutton} source={require('../assets/images/pin.png')}>
                                </Image>
                            </TouchableOpacity>)
                            :
                            (<TouchableOpacity onPress={(event) => this.getpin(event)}>
                                <Image style={styles.unpinbutton} source={require('../assets/images/unpin.png')}>
                                </Image>
                            </TouchableOpacity>)
                    }

                    <TouchableOpacity>
                        <Image style={styles.reminderbutton} source={require('../assets/images/remaindericon.png')}></Image>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={(event) => this.archive(event)} >
                        <Image style={styles.archivebutton} source={require('../assets/images/archivebox.png')}>
                        </Image>
                    </TouchableOpacity>
                </View>



                <View style={{ marginLeft: 30 }}>
                    <TextInput
                        style={{ fontSize: 30, fontWeight: "bold" }}
                        placeholder="Title"
                        placeholderTextColor="#a1a5a3"
                        onChangeText={(text) => this.setState({ Title: text })}
                        multiline={this.state.newline}


                    />
                    <TextInput placeholder="Description"
                        style={{ fontSize: 20, fontWeight: "bold" }}
                        placeholderTextColor="#a1a5a3"
                        onChangeText={(text) => this.setState({ Description: text })}
                        multiline={this.state.newline}
                    />
                </View>


                <Menu
                    view={this.state.click}
                    color={this.onChangeColor}
                    trash={this.handleTrash}
                    navigation={this.props.navigation}>
                </Menu>



                <View style={{ flex: 1, backgroundColor: /*"#009688"*/ "#ffffff", justifyContent: 'flex-end', bottom: -500,  /*-555,*/ }}></View>
              



                <View style={styles.last}>



                    <TouchableOpacity>
                        <Image style={styles.plusicon} source={require('../assets/images/plusnew.png')}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.getmenu() }}>
                        <Image style={styles.dots} source={require('../assets/images/dots.png')}></Image>

                    </TouchableOpacity>
                </View>
              
              
               
           
           
           
            </View>




        );
    }
}

const styles = StyleSheet.create({
    container:
    {
        flexDirection: 'row',
    },
    last: {
        position: 'absolute',
        bottom: -500,  //-555,
        flexDirection: "row"

    },

    arrow: {
        marginLeft: 10,
        width: 30,
        height: 40,

    },

    pinbutton: {
        width: 10,  //20,
        height: 20,  //30,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        //marginLeft: 10,  //10,
        marginRight: -15,
        paddingLeft: 50,   // 30,
        marginTop: 20,
        //paddingTop:20

    },
    unpinbutton: {
        width: 10,   //20,
        height: 20,      //30,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        //marginLeft: 10,  //10,
        marginRight: -15,
        paddingLeft: 50,   // 30,
        marginTop: 20,

    },
    reminderbutton: {
        width: 40,
        height: 40,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginLeft: 25,     //10,
        marginRight: 20,
        paddingLeft: 20,  // 30,
        marginTop: 10
    },
    archivebutton: {
        width: 30,
        height: 30,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        //marginLeft:  10,    // 10,
        marginRight: 50,
        paddingLeft: 20,    //  30,
        marginTop: 10
    },

    plusicon: {
        width: 50,
        height: 50,
        justifyContent: 'space-between',
        alignItems: "center",
        marginLeft: 10,
        paddingLeft: 30,
        marginTop: -10
    },


    dots: {
        width: 40,
        height: 40,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        // marginRight:300,
        marginLeft:  290,
        paddingLeft: 85,
        marginTop: -5
    }

});


{/*onPress={(event) => this.archive(event)}>     */ }












 // submit() {
    //     if (this.state.Title == '') {
    //         ToastAndroid.showWithGravity("Enter Title", ToastAndroid.LONG, ToastAndroid.BOTTOM)
    //     }
    //     /* else if (this.state.Description == '') {
    //          ToastAndroid.showWithGravity("Enter Description",ToastAndroid.LONG,ToastAndroid.BOTTOM)
    //      }*/


    //     else {

    //         var data = {

    //             title: this.state.Title,
    //             description: this.state.Description
    //         }
    //         createNote(data)
    //             .then((result) => {
    //                 this.setState({

    //                     TakeNote: result.data.data
    //                 })

    //                 this.props.navigation.navigate('DashBoard')
    //             })
    //             .catch((err) => {
    //                 ToastAndroid.showWithGravity("Fill all the sections", err, ToastAndroid.LONG, ToastAndroid.BOTTOM)

    //             })



    //     }
    // }
