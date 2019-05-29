import React, { Component } from 'react';

import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';

import { createLabel, getLabels } from '../services/noteService';


import { ToastAndroid } from 'react-native';

import { Chip } from 'react-native-paper';

import AsyncStorage from '@react-native-community/async-storage';

export default class Createlabel extends Component {
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
            label: '',
            labelArray: [],
            dummyNote: [],
            click: false
        }
        this.createLabel = this.createLabel.bind(this)
    }

    
     createLabel(event) {
        var array = []
        var array2=[]


        array = this.state.labelArray,
            array.push(this.state.label)
        
            

         this.setState({
            labelArray: array,
            label: '',
        })

   

        console.log("the label of the user==>", this.state.label);
        console.log("labelled array==>", this.state.labelArray);

    }



    submit = async event => {

        AsyncStorage.getItem('token').then(value => {
            console.log("Getting token while Creating labels", value);
            this.token = value

            var data = {
                labelArray: this.state.labelArray,  //used basically
               //labelArray:this.state.label,
                token: value
            }

            createLabel(data.labelArray, data.token)
                .then((result) => {

                    this.setState({
                        dummyNote: result
                    })
                   // this.props.navigation.navigate('DashBoard')
                })
                .catch((err) => {
                    ToastAndroid.showWithGravity("Fill all the sections", err, ToastAndroid.LONG, ToastAndroid.BOTTOM)

                })
        })

    }

    componentDidMount() {


        AsyncStorage.getItem('token').then(value => {
            console.log("Getting token while getting Label", value);
            this.token = value

            var data = {
                labelArray: this.state.labelArray,
                token: value
            }
        getLabels(data)

        .then((result) => {
            console.log("Result coming from backend ",result);


            this.setState({
                labelArray: result
            })
            console.log("yipppeee====>",result);

            // this.props.navigation.navigate('Dashboard')
        })
        .catch((err) => {
            ToastAndroid.showWithGravity("Fill all the sections", err, ToastAndroid.LONG, ToastAndroid.BOTTOM)

        })
    })

    }



    render() {

        var arr = []
        var key;
        var data;

        arr = Object.keys(this.state.labelArray).map((notes) => {
            key = notes
            data = this.state.labelArray[key]
            console.log("====================nijvaglu bartidya", data.label);
         // console.log("80890890890890809808",data);
          
            //  console.log("<><><><><><>", key);

            return (
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <TouchableOpacity onPress={this.submit.bind(this)}>
                    <Image style={styles.labelIcon} source={require('../assets/images/label.png')} />
                    </TouchableOpacity>
                    <Chip mode='outlined' style={{ width: '80%' }}>
                    {/* //  onPress={this.submit.bind(this)}
                    //     onLongPress={this.handlerLongClick}
                    //     activeOpacity={0.6} > */}
                        <Text style={{ fontSize: 23 }}>
                        {/* {data}   */}
                         {/* {key} */}
                         {data.label}
                        {this.state.click}
                        </Text>
                    </Chip>

                    <Image style={styles.editIcon} source={require('../assets/images/editIcon.png')} ></Image>
                </View>
            )
        })

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

                    <TouchableOpacity onPress={(event) => this.createLabel(event)} >
                        <Image style={styles.Tick} source={require('../assets/images/Tick.png')}></Image>
                    </TouchableOpacity>
                </View>

                <View>

                </View>

                <ScrollView>
                    <View>
                        {arr}
                    </View>
                </ScrollView>

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












