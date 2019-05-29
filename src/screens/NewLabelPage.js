import React, { Component } from 'react';

import { StyleSheet, View, Text, TouchableOpacity, Image,TextInput } from 'react-native';

import { ToastAndroid } from 'react-native';

import { getLabels } from '../services/noteService';

import AsyncStorage from '@react-native-community/async-storage';

import { Chip } from 'react-native-paper';

export default class NewLabelPage extends Component {
    constructor() {
        super();

        this.state = {
            labelArray: [],
            searchText: '',
            filterNotes: [],
            isSearching: false,
            array: [],
        }
    }
7204803794 
    componentDidMount() {

        AsyncStorage.getItem('token')
            .then(value => {
                console.log("Getting token while getting Label", value);
                this.token = value

                var data = {
                    labelArray: this.state.labelArray,
                    token: value
                }

                getLabels(data)
                    .then((result) => {
                        console.log("result list of labels", result);
                        this.setState({
                            labelArray: result
                        })
                        console.log("Result stored in LabeLArray", result);
                    })
                    .catch((err) => {
                        ToastAndroid.showWithGravity("Fill all the sections", err, ToastAndroid.LONG, ToastAndroid.BOTTOM)
                    })
            })
    }




    // filteredNotes = searchText => {

      

    //     if (searchText !== '') {
    //         this.setState({
    //             isSearching: true
    //         });

    //         var arr1 = []
    //         arr1 = Object.keys(this.state.labelArray).map((notes) => {
    //             var key = notes
    //             arr1.push(this.state.labelArray[key])

    //             const filteredData = arr1.filter(function (Note) {
    //             //     return Note.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1 /*|| Note.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1 */
    //             //    /* && Note.description.toLowerCase().indexOf(searchText.toLowerCase()) >-1*/ || Note.description.toLowerCase().indexOf(searchText.toLowerCase()) > -1
    //         return Note.label.toLowerCase().indexOf(searchText.toLowerCase()) > -1  
            
    //         });
    //             this.setState({
    //                 filterNotes: filteredData
    //             })
    //         })


    //     }

    //     else {
    //         this.setState({
    //             isSearching: false
    //         })
    //     }

    // }




    render() {


        var arrayLabel = [];
        var key;
        var data;

        arrayLabel = Object.keys(this.state.labelArray).map((notes) => {
            key = notes
            data = this.state.labelArray[key]
            console.log("Data saaaku", data);


            return (
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    {/* <TouchableOpacity onPress={this.submit.bind(this)}> */}
                    <Image style={styles.labelIcon} source={require('../assets/images/label.png')} />
                    {/* </TouchableOpacity> */}
                    <Chip mode='outlined' style={{ width: '80%' }}>
                        <Text style={{ fontSize: 23 }}>
                            {/* {data}   */}
                            {/* {key} */}
                            {data.label}
                        </Text>
                    </Chip>

                    <Image style={styles.editIcon} source={require('../assets/images/editIcon.png')} ></Image>
                </View>
            )
        })

        return (
            <View>
                <View style={styles.Container}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image style={{ width: 30, height: 30 }} source={require('../assets/images/leftarrow.png')} />
                    </TouchableOpacity>
                    <TextInput style={styles.placeholder}
                        placeholder='Enter Label name' />
                        {/* // onChangeText={(searchText)}
                        // onChangeText={(searchText) => { this.filteredNotes(searchText) }} /> */}
                </View>

                <View>

                </View>

                <View>
                    {arrayLabel}
                </View>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    Container: {
        marginTop: '2%',
        flexDirection: 'row',
        // borderWidth:2,
        // height: '5%',
        width: '100%',
        borderRadius: 10,
        borderBottomWidth: 2.5,
        borderBottomColor: 'gray',
        alignItems: 'center',

    },

    textField: {
        fontSize: 27,
        color: 'gray'
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
    placeholder: {fontSize: 25,fontWeight:'bold' },
})
