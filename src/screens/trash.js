import React, { Component } from "react";

import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from "react-native";

import { DrawerActions } from "react-navigation";

import CardComponent from "../navigation/CardCompo"


import AsyncStorage from '@react-native-community/async-storage';

import { getNotes } from "../services/noteService";

export default class Trash extends Component {
    //  static navigationOptions = { headers: null }
    static navigationOptions = {
        header: null,
        drawerLabel: 'Trash',
        backgroundColor: 'yellow',
        drawerIcon:
            <Image style={{ width: 24, height: 30 }} source={require('../assets/images/trash.png')} />
    }
    constructor() {
        super()

        this.state = {

            trashNote: [],
            click: false
        }
    }

    grid(event) {
        this.setState({
            click: !(this.state.click)
        })
    }
    componentDidMount() {

        AsyncStorage.getItem('token')
            .then(value => {
                console.log("Getting token while ReCreating Note", value);
                this.token = value
                var data = {
                    title: this.state.Title,
                    description: this.state.Description,
                    archive: this.state.archive,
                    trash: this.state.trash,
                    token: value
                }
                getNotes(data)
                    .then((result) => {

                        this.setState({
                            trashNote: result
                        })
                        console.log("Result in Datasoure Frontend===>\n")
                        console.log(result)
                        //  console.log("state in dash ->",this.state.dataSource);

                    })
                    .catch((err) => {
                        ToastAndroid.showWithGravity("Error occured while Retriving Notes ", err, ToastAndroid.LONG, ToastAndroid.BOTTOM)

                    })
            })
            .catch(err => {
                console.log("error has got its time to show off:", err);
            })
    }



    render() {

        var array = [];
        var key;
        var data;

        var array = Object.keys(this.state.trashNote).map((notes) => {
            key = notes;

            data = this.state.trashNote[key]

            if ((data.trash===true && data.archive===true)) {
                return (
                    <CardComponent Display={data}
                        notekey={key}
                        view={this.state.click}
                        navigation={this.props.navigation} />
                )
            }

        })



        return (
            <View style={{flex:1}}>
            <View style={styles.topboxTrash}>
                <TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
                    <Image style={styles.TrashTopIcon} source={require('../assets/images/drawericon.png')} />
                </TouchableOpacity>

                <Text style={styles.text}>
                    Trash
            </Text>

                <TouchableOpacity>
                    <Image style={styles.TrashTopIcon2} source={require('../assets/images/verticaldots.png')}></Image>
                </TouchableOpacity>
            </View>


            <ScrollView>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    {array}
                </View>

            </ScrollView>

          
            </View>
        )
    }
}

const styles = StyleSheet.create({
    // drawericon: {

    //     width: 38, //30,
    //     height: 38,  //40,
    //     justifyContent: 'space-between',
    //     alignItems: "center",       //'flex-start',
    //     marginLeft: 10,   //10,
    //     paddingLeft: 30
    // },
    text: {
        width:'70%',
        marginLeft: 30,
        fontSize: 25,
        color: "black",

    },

    // dots: {
    //     marginTop: 4,
    //     width: 40,
    //     height: 40,
    //     justifyContent: 'space-between',
    //     alignItems: "center",
    //     //paddingLeft:70,
    //     paddingRight: 70,
    //     marginHorizontal: 210

    //     // marginRight:300,
    //     // marginLeft: 290,
    //     // paddingLeft: 85,
    //     // marginTop: -5
    // }
    topboxTrash: {
       marginTop:10,
        height: 50,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "black",
        flexDirection: 'row'
        // height: 50,
        //  bakgroundColor: '#ffffff',
        //   flexDirection: "row",
        //    paddingLeft: 10, 
        //    alignItems: 'center',
        //     width:  390,
        //      marginLeft: 7, 
        //      borderRadius: 9,
        //       borderColor: "#C1C1C1",
        //        borderWidth: 2
    },


    TrashTopIcon: {
        // alignItems:'center',
        // justifyContent:'space-between',
        width: 30, // '20%',
        height: 30,   // '35%',
        padding: 15,
        margin: 15,

    },

    TrashTopIcon2: {
        width:'100%',
        width: 30, // '20%',
        height: 30,   // '35%',
        padding: 15,
        margin: 15,

    },
})