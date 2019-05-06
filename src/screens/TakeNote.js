import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {

    StyleSheet,
    Text,
    View,

    Image,
    TouchableOpacity,
    TextInput,
    Picker

} from 'react-native';
import { ToastAndroid } from 'react-native';
import { createNote } from "../services/noteService";
import Reminder from '../screens/reminder';
import DashBoard from '../screens/dashboard'
import Menu from '../navigation/Menu'
import DateTimePicker from 'react-native-modal-datetime-picker'

import Dialog from 'react-native-dialog'

import dateFormat from 'dateformat'
//var dateFormat = require('dateformat');




export default class TakeNote extends Component {

    
    constructor() {
        super();
        this.state = {
            Title: "",
            Description: "",
            token: '',
            archive: false,
            pinned: false,
            reminder: '',
            trash: false,
            click: false,
            newline: true,
            TakeNote: {},
            archiveNote: {},
            color: '',
            dialogVisible: false,
            PickerValue: '',
            isDateTimePickerVisible: false,
            isTimePickerVisible: false,


        }
        this.onChangeColor = this.onChangeColor.bind(this)
        this.handleTrash = this.handleTrash.bind(this)
    }

    showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true, date: '' })
    showTimePicker = () => this.setState({ isTimePickerVisible: true, time: '' })

    hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false })
    hideTimePicker = () => this.setState({ isTimePickerVisible: false })



    

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
                    pinned: this.state.pinned,
                    reminder:this.state.reminder,
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


    getmenu() {
        this.setState({
            click: !this.state.click
        })
    }

    showDialog = () => {
        this.setState({ dialogVisible: true })
    }

    handleCancel = () => {
        this.setState({ dialogVisible: false })
    }

    handleDatePicker = (date) => {
        console.log('A date have been picked', date);
        var d = '' + date;
        var da = d.slice(4, 10)
        console.log('date--', da);
        this.setState({
            date: da
        })
        this.hideDateTimePicker();
    }

    getpin = async event => {
        console.warn(this.state.pinned + " before")
        await this.setState({ pinned: !this.state.pinned })
        console.warn(this.state.pinned + " after")
    }


    archive = async event => {
        console.warn(this.state.archive + "1st");
        await this.setState({
            archive: !this.state.archive
        })
        console.warn(this.state.archive + "2nd");
    }

    handleTimePicker = (date,time) => {
        console.log('A Time has been picked',date+ time);
        var t = '' + time;
        var ta = t.slice(16, 21)
        console.log('time--', ta);
        this.setState({
            time: date+ta
        })
        this.hideTimePicker();
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

    handleSave = () => {
      //  var date = this.state.date + ' ' + this.state.time
      var date=this.state.date
      var time=this.state.time
        console.log("Given Date Input"+date);
        console.log("GIven Time Input"+time);
        
        if (date!=='' && time!== '') {
            this.setState({
                reminder: date,
                reminder:time,
                dialogVisible: false
            });
        };

        //extra madirodu
        // if(time!==''){
        //     this.setState({
        //         reminder:time,
        //         dialogVisible:false
        //     })
        // }
    }
    dateNotification() { }

    handlerem(value) {
        if (value !== '') {
            this.setState({
                reminder: value,
                dialogVisible: false
            })
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

                    <TouchableOpacity onPress={(event)=>this.showDialog(event)}>
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



                <View style={{ flex: 1, backgroundColor: /*"#009688"*/ "#ffffff", justifyContent: 'flex-end', bottom: -500,  /*-555,*/ }}></View>


                <Menu
                    view={this.state.click}
                    color={this.onChangeColor}
                    trash={this.handleTrash}
                    navigation={this.props.navigation}>
                </Menu>


                <View style={styles.last}>





                    <TouchableOpacity>
                        <Image style={styles.plusicon} source={require('../assets/images/plusnew.png')}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.getmenu() }}>
                        <Image style={styles.dots} source={require('../assets/images/dots.png')}></Image>

                    </TouchableOpacity>
                </View>


                <Dialog.Container visible={this.state.dialogVisible}>

                    <Dialog.Title> Add Reminder </Dialog.Title>
                    <View>

                    </View>

                    <View>
                        <Picker
                            style={{ width: '100%' }}
                            selectedValue={this.state.PickerValue}
                            onValueChange={(itemValue, itemIndex) => this.handlerem(itemValue)}>

                            <Picker.Item label="Select Predefined" value="" />
                            <Picker.Item label="Today 8pm" value='Today *pm' />
                            <Picker.Item label="Tomorrow 8am" value="Tomorrow 8am" />
                            <Picker.Item label="Next Monday" value="Next Monday" />
                        </Picker>
                        <Text>{this.state.PickerValue}</Text>
                    </View>

                    <Text>---OR----</Text>
                    <View>

                        <TouchableOpacity onPress={this.showDateTimePicker}>
                            <Text> Select a Date</Text>
                        </TouchableOpacity>

                        <Text>{this.state.date}</Text>
                        <DateTimePicker
                            mode='date'
                            isVisible={this.state.isDateTimePickerVisible}
                            onConfirm={this.handleDatePicker}
                            onCancel={this.hideDateTimePicker} />
                    </View>


                    <View>

                        <TouchableOpacity onPress={this.showTimePicker}>
                            <Text> Select a Time</Text>
                        </TouchableOpacity>

                        <Text>{this.state.time}</Text>
                        <DateTimePicker
                            mode='time'
                            isVisible={this.state.isTimePickerVisible}
                            onConfirm={this.handleTimePicker}
                            onCancel={this.hideDateTimePicker} />
                    </View>

                    <Dialog.Button label="Cancel" onPress={() => this.props.navigation.handleCancel()/*goBack()*/} />
                    <Dialog.Button label="Save" onPress={() => this.handleSave()} />
                </Dialog.Container>



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
        marginLeft: 290,
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