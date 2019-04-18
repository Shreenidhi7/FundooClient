// import React,{ Component } from "react";

// import {View,Text,Picker} from 'react-native'

// import { createNote } from "../services/noteService";

// import Reminder from '../screens/reminder'

// import DashBoard from '../screens/dashboard'

// import menu from "../navigation/Menu";

// import { Dialog } from "react-native-dialog";

// import { DateTimePicker } from "react-native-modal-datetime-picker";

// export default class TakeNote extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//             Title:'',
//             Notes:'',
//             reminder:'',
//             click:false,
//             dialogVisible:false,
//             PickerValue:'',
//             isDateTimePickerVisible:false,
//             TimePickerVisible:false,
//             color:'',
//             trash:false,
//             archive:false,
//             logo:false,
//             pin:false,
//             newline:false

//         }

//     }
// }


/****************************************************************************************************************************************** */
//xccx

import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, Button, Image, TouchableOpacity, Picker } from 'react-native'
import { createnote } from '../Service/UserService';
import Reminder from './Reminder';
import DashBoard from '../Page/DashBoard'
import Menu from '../Component/Menu';
import Dialog from "react-native-dialog";
import DateTimePicker from 'react-native-modal-datetime-picker';


export default class TakeNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Title: '',
            Notes: '',
            reminder: '',
            click: false,
            dialogVisible: false,
            PickerValue: '',
            isDateTimePickerVisible: false,
            TimePickerVisible: false,
            color: '',
            trash: false,
            archive: false,
            logo: false,
            pin: false,
            newline: true,


        }
        this.onChangeColor = this.onChangeColor.bind(this)
        this.handleTrash = this.handleTrash.bind(this)


    }
    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true, date: '' });
    _showTimePicker = () => this.setState({ TimePickerVisible: true, time: '' });


    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
    _hideTimePicker = () => this.setState({ TimePickerVisible: false });
    static navigationOptions = { header: null };
    validatedinput() {
        if (this.state.Title == '') {
            alert('enter Title')
        }
        if (this.state.Notes == '') {
            alert('enter description')
        }
        else {
            return true;
        }   
    }
   /* submit = async event => {
        var bol = this.validatedinput();

        if (bol) {
            await createnote(this.state.Title, this.state.Notes, this.state.reminder, this.state.color, this.state.trash, this.state.archive, this.state.pin)
            this.props.navigation.navigate('Note')
        }
        else {
            this.props.navigation.navigate('Note')
        }
    }
    */
    getmenu() {
        this.setState({ click: !this.state.click })
    }
    showDialog = () => {
        this.setState({ dialogVisible: true });
    };
    handleCancel = () => {
        this.setState({ dialogVisible: false });
    };
    _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
        var d = '' + date
        var a = d.slice(4, 10)
        this.setState({
            date: a
        })
        this._hideDateTimePicker();
    };
    getpin = async event => {
        console.warn(this.state.pin + " before")
        await this.setState({ pin: !this.state.pin })
        console.warn(this.state.pin + " after")

    }
    getArchive = async event => {
        console.warn(this.state.archive + " ist")
        await this.setState({ archive: !this.state.archive })
        console.warn(this.state.archive + " 2nd")

    };

    _handleTimePicked = (time) => {
        console.log('A date has been picked: ', time);
        var d = '' + time
        var a = d.slice(16, 21)
        this.setState({
            time: a
        })
        this._hideTimePicker();
    };
    async handleTrash(value) {
        console.warn('trash in create got--' + value)

        this.setState({
            trash: value
        })
    }
    async  onChangeColor(newcolor) {
        console.warn('color in create got--' + newcolor)
        await this.setState({
            color: newcolor
        })
    }


    handleView(event) {
        this.setState(
            {
                logo: !this.state.logo
            }
        )
        //  alert('inhabdlleele')

    }

    handleSave = () => {
        var date = this.state.date + '  ' + this.state.time
        console.warn(date + " in take date")
        if (date !== '') {
            this.setState({
                reminder: date,
                dialogVisible: false
            });
        };
    }
    datenotifiction(){
        
    }
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

            <View style={{ backgroundColor: this.state.color, flex: 1 }}>
                <View style={styles.data1}>
                    <View style={styles.data}>
                        <View style={styles.distance}>

                            <TouchableOpacity onPress={() => { this.submit() }}>
                                <Image style={styles.image2} source={require('../Images/arow.png')} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity  >
                            <Text >               </Text>
                        </TouchableOpacity>
                        {
                            this.state.pin ?
                                (<View>
                                    <TouchableOpacity onPress={(event) => this.getpin(event)}>
                                    <Image style={styles.image} source={require('../Images/pin.png')}></Image>
                                </TouchableOpacity>
                                </View>)

                                :(<View>
                                    <TouchableOpacity onPress={(event) => this.getpin(event)}>
                                    <Image style={styles.image} source={require('../Images/unpin copy.png')}></Image>
                                </TouchableOpacity>
                                </View>)
                        }
                        <TouchableOpacity onPress={(event) => this.showDialog(event)}>
                            <Image style={styles.image} source={require('../Images/reminder.png')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={(event) => this.getArchive(event)}>
                            <Image style={styles.image} source={require('../Images/archive.png')}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginLeft: 30 }}>
                    <TextInput
                        style={{ fontSize: 25 }}
                        placeholder="Title"
                        placeholderTextColor="#a1a5a3"
                        onChangeText={(Title) => this.setState({ Title })}
                        value={this.state.Title}
                        onSubmitEditing={() => this.Notes.focus()}
                    />
                    <TextInput placeholder="Note"
                        style={{ fontSize: 15 }}
                        placeholderTextColor="#a1a5a3"
                        onChangeText={(Notes) => this.setState({ Notes })}
                        value={this.state.Notes}
                        multiline={this.state.newline}
                        ref={(input) => this.Notes = input}
                    />
                    <Text>{this.state.reminder}</Text>


                </View>
                <Menu
                    view={this.state.click}
                    color={this.onChangeColor}
                    trash={this.handleTrash}
                    navigation={this.props.navigation} />
                <View style={{ flex: 1 }}></View>

                <View style={styles.last}>

                    <View style={styles.distance1}>
                        <TouchableOpacity>
                            <Image style={styles.image} source={require('../Images/plus.png')}></Image>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => { this.getmenu() }}>
                        <Image style={styles.image} source={require('../Images/dmenu.png')}></Image>

                    </TouchableOpacity>
                    <Dialog.Container visible={this.state.dialogVisible}>
                        <Dialog.Title> Add reminder</Dialog.Title>
                        <View>

                        </View>
                        <View>
                            <Picker
                                style={{ width: '100%' }}
                                selectedValue={this.state.PickerValue}
                                onValueChange={(itemValue, itemIndex) => this.handlerem(itemValue)}
                            >
                                <Picker.Item label="Select Predefined" value="" />
                                <Picker.Item label='Today 8pm' value='Today 8pm' />
                                <Picker.Item label="Tommorow 8am" value="Tommorow 8am" />
                                <Picker.Item label="Next Monday" value="Next Monday" />


                            </Picker>
                            <Text>{this.state.PickerValue}</Text>
                        </View>
                        <Text>---OR---</Text>
                        <View >
                            <TouchableOpacity onPress={this._showDateTimePicker}>
                                <Text >Select a  date</Text>

                            </TouchableOpacity>
                            <Text>{this.state.date}</Text>
                            <DateTimePicker
                                mode='date'


                                isVisible={this.state.isDateTimePickerVisible}
                                onConfirm={this._handleDatePicked}
                                onCancel={this._hideDateTimePicker}
                            />
                        </View>

                        <View >

                            <TouchableOpacity onPress={this._showTimePicker}>
                                <Text >Select Time</Text>

                            </TouchableOpacity>
                            <Text>{this.state.time}</Text>
                            <DateTimePicker
                                mode='time'


                                isVisible={this.state.TimePickerVisible}
                                onConfirm={this._handleTimePicked}
                                onCancel={this._hideTimePicker}
                            />

                        </View>


                        <Dialog.Button label="Cancel" onPress={this.handleCancel} />
                        <Dialog.Button label="save" onPress={this.handleSave} />

                    </Dialog.Container>

                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        padding: 20,

    },
    data: {
        height: 70,
        width: 340,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 10,
        alignItems: 'center',
        padding: 20,
        borderRadius: 15,
    },
    data1: {

        justifyContent: 'center',
        alignItems: 'center',
    },
    first: {
        flex: 1
    },
    image: {
        marginHorizontal: 15,
        width: 22,
        height: 22,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    image2: {
        paddingRight: 20,
        width: 24,
        height: 24,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    distance: {
        paddingRight: 70
    }, last: {
        position: 'relative',
        bottom: 0,
        flexDirection: 'row',

    },
    distance1: {
        paddingRight: 200
    },
})