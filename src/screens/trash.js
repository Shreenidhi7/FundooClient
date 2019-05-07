import React, { Component } from "react";

import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from "react-native";

import { DrawerActions } from "react-navigation";

import CardComponent from "../navigation/CardCompo"


import AsyncStorage from '@react-native-community/async-storage';

import { getNotes } from "../services/noteService";

export default class Trash extends Component {
    static navigationOptions = { headers: null }
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
                            trashNote: result.result
                        })
                        console.log("Result in Datasoure Frontend===>\n")
                        console.log(result.result)
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

            if ((data.trash === true && data.archive === false)) {
                return (
                    <CardComponent Display={data}
                        notekey={key}
                        view={this.state.click}
                        navigation={this.props.navigation} />
                )
            }

        })



        return (
            <View style={{ flex: 1, flexDirection: "row", marginTop: 10 }}>
                <TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
                    <Image style={styles.drawericon} source={require('../assets/images/drawericon.png')} />
                </TouchableOpacity>

                <Text style={styles.text}>
                    Trash
            </Text>

                <TouchableOpacity>
                    <Image style={styles.dots} source={require('../assets/images/dots.png')}></Image>
                </TouchableOpacity>


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
    drawericon: {

        width: 38, //30,
        height: 38,  //40,
        justifyContent: 'space-between',
        alignItems: "center",       //'flex-start',
        marginLeft: 10,   //10,
        paddingLeft: 30
    },
    text: {
        marginLeft: 30,
        fontSize: 25,
        color: "black",

    },

    dots: {
        marginTop: 4,
        width: 40,
        height: 40,
        justifyContent: 'space-between',
        alignItems: "center",
        //paddingLeft:70,
        paddingRight: 70,
        marginHorizontal: 210

        // marginRight:300,
        // marginLeft: 290,
        // paddingLeft: 85,
        // marginTop: -5
    }
})