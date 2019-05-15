import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Picker } from 'react-native';
import { ToastAndroid } from 'react-native';
import { createNote, } from "../services/noteService";
import Reminder from '../screens/reminder';
import DashBoard from '../screens/dashboard'
import Menu from '../navigation/Menu'
import DateTimePicker from 'react-native-modal-datetime-picker'

import Dialog from 'react-native-dialog'
import RBSheet from 'react-native-raw-bottom-sheet'
//import dateFormat from 'dateformat'
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
                    reminder: this.state.reminder,
                    color: this.state.color,
                    trash: this.state.trash,
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
        console.log("1st step t value=====>", d);

        console.log("====================>><<><>", d.slice(4, 15));
        var da = d.slice(4, 15)
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



    handleTimePicker = (time) => {
        console.log("A Time has been picked", time);
        var d = '' + time;
        console.log("1st step t value=====>", d);

        console.log("====================>><<><>", d.slice(16, 21));

        var da = d.slice(16, 21)

        console.log('time picked is--', da);
        this.setState({
            time: da
        })
        this.hideTimePicker();
    }

    async handleTrash(value) {
        console.log("trash", value);
        this.setState({
            trash: !(value)
        })
    }

    async onChangeColor(newColor) {
        console.log("color", newColor);
        this.setState({
            color: newColor
        })
    }

    // handleSave = () => {
    //   //  var date = this.state.date + ' ' + this.state.time
    //   var date=this.state.date
    //   var time=this.state.time
    //     console.log("Given Date Input  "+date);
    //     console.log("GIven Time Input  "+time);

    //     if (date!=='' && time!== '') {
    //         this.setState({
    //             reminder:date,
    //             reminder:time,
    //             dialogVisible: false
    //         });
    //     };

    //extra madirodu
    // if(time!==''){
    //     this.setState({
    //         reminder:time,
    //         dialogVisible:false
    //     })
    // }
    // }

    handleSave = () => {
        var date = this.state.date + "  " + this.state.time
        console.log("date==>", date);
        if (date !== '') {
            this.setState({
                reminder: date,
                dialogVisible: false
            })
        }

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
                        this.state.pinned ?
                            (<TouchableOpacity onPress={(event) => this.getpin(event)}>
                                <Image style={styles.pinbutton} source={require('../assets/images/pin.png')}>
                                </Image>
                            </TouchableOpacity>)
                            :
                            (<TouchableOpacity onPress={(event) => this.getpin(event)}>
                                <Image style={styles.pinbutton} source={require('../assets/images/pin.png')}>
                                </Image>
                            </TouchableOpacity>)
                    }

                    <TouchableOpacity onPress={(event) => this.showDialog(event)}>
                        <Image style={styles.reminderbutton} source={require('../assets/images/reminder.png')}></Image>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={(event) => this.archive(event)} >
                        <Image style={styles.archivebutton} source={require('../assets/images/archive.png')}>
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



                {/* <Menu style={{ bottom: 20 }}
                    view={this.state.click}
                    color={this.onChangeColor}
                    trash={this.handleTrash}
                    navigation={this.props.navigation}>
                </Menu> */}

                <View style={styles.last}>

                    <TouchableOpacity>
                        <Image style={styles.plusicon} source={require('../assets/images/plusnew.png')}></Image>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => this.RBSheet.open()}>
                        <RBSheet
                            ref={ref => {
                                this.RBSheet = ref;
                            }}
                            height={300}
                            duration={250}
                            customStyles={{
                                container: {
                                    // justifyContent: "center",
                                    marginBottom: 50,
                                     backgroundColor:this.state.color

                                }
                            }}>

                            <Menu
                                view={this.state.click}
                                color={this.onChangeColor}
                                trash={this.handleTrash}
                                navigation={this.props.navigation} />
                        </RBSheet>

                        <Image style={styles.dots} source={require('../assets/images/verticaldots.png')}></Image>
                    </TouchableOpacity>


                    {/* <TouchableOpacity onPress={() => this.getmenu()}>
                        <Image style={styles.dots} source={require('../assets/images/dots.png')}></Image>

                    </TouchableOpacity> */}
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
                            <Text style={{ fontWeight: "bold" }}> Select a Date</Text>
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
                            <Text style={{ fontWeight: "bold" }}> Select a Time</Text>
                        </TouchableOpacity>

                        <Text>{this.state.time}</Text>
                        <DateTimePicker
                            mode='time'
                            isVisible={this.state.isTimePickerVisible}
                            onConfirm={this.handleTimePicker}
                            onCancel={this.hideDateTimePicker} />
                    </View>

                    <Dialog.Button label="Cancel" onPress={() => this.handleCancel()/*goBack()*/} />
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
        flexDirection: 'row',
        marginTop: 525
        // position: 'absolute',
        // bottom: -500,  //-555,
        //flexDirection: "row"

    },

    arrow: {
        marginTop: 10,
        marginLeft: 10,
        width: 30,
        height: 40,
        paddingLeft: 10,
        paddingRight: 10

    },

    pinbutton: {
        width: 30,
        height: 50,
        marginTop: 10,

        // width: 20,  //20,
        // height: 20,  //30,
        // justifyContent: 'space-between',
        // alignItems: 'flex-start',

        // marginRight: -25,
        // paddingLeft: 50,   // 30,
        // marginTop: 70,


    },
    pinbutton: {
        width: 30,
        height: 50,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    },
    // unpinbutton: {
    //     width: 30,   //20,
    //     height: 20,      //30,
    //     justifyContent: 'space-between',
    //     alignItems: 'flex-start',
    //     //marginLeft: 10,  //10,
    //     marginRight: -15,
    //     paddingLeft: 50,   // 30,
    //     marginTop: 40,

    // },
    reminderbutton: {
        width: 35,
        height: 35,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginLeft: 25,     //10,
        marginRight: 20,
        paddingLeft: 20,  // 30,
        marginTop: 15
    },
    archivebutton: {
        width: 35,
        height: 35,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginLeft: 10,
        marginTop: 15,
        marginRight: 50,
        // marginRight: 50,
        // paddingLeft: 20,    //  30,
        // marginTop: 10
    },

    plusicon: {
        flexDirection: 'row',
        width: 40,
        height: 40,
        justifyContent: 'space-between',
        alignItems: "center",
        marginLeft: 10,
        paddingLeft: 30,
        marginTop: 10
    },


    dots: {
        flexDirection: "row",
        width: 40,
        height: 45,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginLeft: 320,
        marginTop: 1,
        marginBottom: 10
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