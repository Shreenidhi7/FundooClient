import React, { Component } from "react";

import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image, Modal, Button } from "react-native";

import { Card } from 'react-native-elements';

import { ToastAndroid } from 'react-native';

import { createLabel, getLabels } from "../services/noteService";

import CardComponent from '../navigation/CardCompo';
import { ScrollView } from "react-native-gesture-handler";

import { Chip } from 'react-native-paper';

import AsyncStorage from '@react-native-community/async-storage';

export default class NewLabel extends Component {
    static navigationOptions = {
        header: null,
        drawerLabel: 'Create New Label',
        backgroundColor: 'yellow',
        drawerIcon:
            <Image style={{ width: 24, height: 30, borderTopRightRadius: 20 }} source={require('../assets/images/plus.png')} />,
        backgroundColor: "green"
    }

    constructor(props) {
        super(props)
        this.state = {

            // Title: this.props.navigation.state.params.Display.title,
            // Description: this.props.navigation.state.params.Display.description,
            // token: '',
            // archive: this.props.navigation.state.params.Display.archive,
            // pinned: this.props.navigation.state.params.Display.pinned,
            // reminder: this.props.navigation.state.params.Display.reminder,
            // trash: this.props.navigation.state.params.Display.trash,
            // click: false,
            // newline: true,
       
            // color: this.props.navigation.state.params.Display.color,
            // dialogVisible: false,
            // PickerValue: '',
            // isDateTimePickerVisible: false,
            // isTimePickerVisible: false,










          //  ResultLabel:[],
            label: '',
            labelArray:[],
            click: false,
            close: false,
            edit: false,
            visible: false
          
        }
        this.createLabel = this.createLabel.bind(this)
        this.handeleback = this.handeleback.bind(this)
    }


    // data = () => {
    //   //  console.warn("display data" + this.props.Display)
    //     this.props.navigation.navigate('Edit' )
    // }



    handlerLongClick() {
        this.setState({ click: !(this.state.click) })
    }

    // async labelEdit(){

    //    await this.setState({
    //       click:!this.state.click  
    //     })
    //     this.props.navigate.navigation("Edit")

    // }


    // validateinput() {
    //     if (this.state.label == '') {
    //         ToastAndroid.showWithGravity("Enter Label", ToastAndroid.LONG, ToastAndroid.BOTTOM)
    //     }
    //     else {
    //         return true
    //     }
    // }


    async createLabel(event) {
        var array = []
        array = this.state.labelArray,
            array.push(this.state.label)

        await this.setState({
            labelArray: array,
            label: '',
        })

        console.warn('column user--' + this.state.label)
        console.warn('column array--' + this.state.labelArray)

        console.log("log user==>", this.state.label);
        console.log("log array==>", this.state.labelArray);

    }

 
    submit = async event => {
        // var check = this.validateinput();

        // if (check) {

        //   var token=AsyncStorage.getItem('token')
        // console.log("Getting Token while creating Note(Take Note)  ",token);


        AsyncStorage.getItem('token').then(value => {
            console.log("Getting token while Creating Note", value);
            this.token = value

            var data = {
                labelArray: this.state.labelArray,
                token: value
            }

            createLabel(data.labelArray, data.token)
        
           
                getLabels(data)

                .then((result) => {
                    console.log("Result coming from backend ",result);
                    

                    this.setState({
                        labelArray: result
                    })
                    console.log("yipppeee====>");
                    
                    this.props.navigation.navigate('Dashboard')
                })
                .catch((err) => {
                    ToastAndroid.showWithGravity("Fill all the sections", err, ToastAndroid.LONG, ToastAndroid.BOTTOM)

                })

            // async createLabel(event) {
            //     var array = []
            //     array = this.state.labelArray,
            //     array.push(this.state.label)

            //     await this.setState({
            //         labelArray: array,
            //         label: '',
            //     })

            //     console.warn('column user--' + this.state.label)
            //     console.warn('column array--' + this.state.labelArray)

            //     console.log("log user==>",this.state.label);
            //     console.log("col array==>",this.state.labelArray);

            // }



            
            

        })
    // }

        // }
        // else {
        //     console.log("error in validation");

        // }
}
 
    


/*********************************************** */
    async handleEditback(note, key) {
        console.log(',.,.,.,,,', note);
        console.log('<><><><><>', key);

        await this.setState({
            visible: false
        })
        this.props.add(this.state.labelArray, note, key)
    }



    async  handeleback(note, key) {
        await this.setState({
            visible: false
        })
        this.props.close(this.state.labelArray)
    }

    handlelabel() {
        this.setState({
            visible: true
        })
    }
/******************************************************************* */
    // async createLabel(event) {
    //     var array = []
    //     array = this.state.labelArray,
    //     array.push(this.state.label)

    //     await this.setState({
    //         labelArray: array,
    //         label: '',
    //     })

    //     console.warn('column user--' + this.state.label)
    //     console.warn('column array--' + this.state.labelArray)

    //     console.log("log user==>",this.state.label);
    //     console.log("col array==>",this.state.labelArray);

    // }

    //for time being==this is the main
    // async createLabel(event) {
    //     var array = []
    //     array = this.state.labelArray,
    //         array.push(this.state.label)

    //     await this.setState({
    //         labelArray: array,
    //         label: '',
    //     })

    //     console.warn('column user--' + this.state.label)
    //     console.warn('column array--' + this.state.labelArray)

    //     console.log("log user==>", this.state.label);
    //     console.log("log array==>", this.state.labelArray);

    // }
    render() {

        var arr = []
        var key;
        var data;

        arr = Object.keys(this.state.labelArray).map((notes) => {
            key = notes
            data = this.state.labelArray[key]
            console.log("====================nijvaglu bartidya", data.label);
          //  console.log("<><><><><><>", key);



            //  if (data.trash !== true && data.pinned === false)
            //  return (
            //   <CardComponent Display={data}
            //       notekey={key}
            //       view={this.state.click}
            //       navigation={this.props.navigation} />
            //  )
            return (
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Image style={styles.labelIcon} source={require('../assets/images/label.png')} />

                    <Chip mode='outlined' style={{ width: '80%' }} onPress={this.submit.bind(this)}
                        onLongPress={this.handlerLongClick}
                        activeOpacity={0.6} >
                        <Text style={{ fontSize: 23 }}>  {data}
                            {/* {key} */}
                            {this.state.click}
                        </Text>
                    </Chip>

                    <Image style={styles.editIcon} source={require('../assets/images/editIcon.png')} ></Image>
                </View>
            )
        })

        // var arraylabel = this.state.labelArray.map((option) => {
        //     return (
        //         <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, }}>
        //             <Image style={styles.Icon} source={require('../assets/images/label.png')} />
        //             <Text>{option}</Text>
        //             <Image style={styles.Icon} source={require('../assets/images/Tick.png')} />
        //         </View>
        //     )
        // })



        return (
            <View>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('DashBoard')}>
                        <Image style={styles.arrow} source={require('../assets/images/leftarrow.png')} />
                    </TouchableOpacity>

                    <Text style={styles.text}> Edit labels </Text>
                </View>

                <View style={styles.labelBox}>
                    <TouchableOpacity>
                        <Image style={styles.Cancel} source={require('../assets/images/Cancel.png')}></Image>
                    </TouchableOpacity>

                    <TextInput style={styles.label}
                        placeholder="Create new label"
                        value={this.state.label}
                        onChangeText={(label) => this.setState({ label })}
                        fontWeight="bold"
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholderTextColor='gray'>
                    </TextInput>

                    <TouchableOpacity onPress={(event) => this.createLabel(event)}>
                        <Image style={styles.Tick} source={require('../assets/images/Tick.png')}></Image>
                    </TouchableOpacity>
                </View>


                <View>
                    {/* <View style={styles.inmore}> 
                        < TouchableOpacity onPress={() => this.handlelabel()} > 
                            <View style={{ flexDirection: "row" }}>
                                <Image style={styles.reminder} source={require('../assets/images/leftarrow.png')} />
                             <Text style={{ marginLeft: 10 }}>Labels</Text>
                            </View>
                        </TouchableOpacity>
                    </View> */}
                </View>
                {/* <Modal visible={this.state.visible}> */}
                {/* <Card containerStyle={{ borderWidth: 0, width: '100%', marginLeft: 0 }}>
                        <View style={{ flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-between', }}>
                            <View>
                                {this.state.edit ?
                                    (
                                        <TouchableOpacity onPress={() => this.handleEditback(this.props.note, this.props.notekey)}>
                                            <Image style={styles.reminder} source={require('../assets/images/Cancel.png')} />
                                        </TouchableOpacity>
                                    ) : (
                                        <TouchableOpacity onPress={() => this.handeleback()}>
                                            <Image style={styles.reminder} source={require('../assets/images/leftarrow.png')} />
                                        </TouchableOpacity>)
                                }
                            </View> */}
                {/* <TextInput


                                placeholder='Enter label'

                                value={this.state.label}

                                onChangeText={(label) => this.setState({ label })}


                            /> */}

                {/* <Button title='Create' onPress={(event) => this.createLabel(event)}></Button> */}
                {/* </View>  */}
                {/* <View>



                        </View> 
                     </Card> */}
                <ScrollView>
                    <View>
                        {/* {arraylabel} */}
                        {arr}
                    </View>
                </ScrollView>
                {/* </Modal> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({

    text: {
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: 25,
        color: "black",
        paddingLeft: '5%'

    },
    arrow: {
        marginLeft: 10,
        width: 30,
        height: 40,
    },


    labelBox: {
        // flexGrow: 1,
        flexDirection: "row",
        marginTop: 15,


        borderWidth: 1.25,
        // borderRadius:5,
        // flexWrap: 'wrap',
        width: '100%',
        fontSize: 30,
        fontWeight: 'bold',
        paddingLeft: 40
    },

    label: {
        // flexDirection:"row",
        //  borderWidth:1.09,
        // borderRadius:5,
        // flexWrap: 'wrap',
        width: '75%',
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 40
    },

    labelIcon: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        color: 'black',
        width: 25,
        height: 25,
        padding: 15,
        margin: 10
    },
    editIcon: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        color: 'black',
        width: 25,
        height: 25,
        padding: 15,
        margin: 10
    },

    Tick: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        color: 'black',
        width: 25,
        height: 25,
        padding: 15,
        margin: 10
    },
    Cancel: {

        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        color: 'black',
        width: 25,
        height: 25,
        padding: 15,
        margin: 10
    },


    imore: {
        marginTop: 5
    },

    reminder: {
        height: 25,
        width: 25,
        marginLeft: 10,
        marginRight: 10,
    },


    Icon: {
        height: 20,
        width: 20
    }
})
