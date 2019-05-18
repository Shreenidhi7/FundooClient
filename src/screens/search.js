import React, { Component } from "react";

import { Text, View, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { getNotes } from "../services/noteService";
import CardComponent from "../navigation/CardCompo";
import AsyncStorage from '@react-native-community/async-storage';
import styles from '../StyleSheet'

export default class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchText: '',
            isSearching: false,
            filterNotes: [],
            note: [],
            array: [],
            newline: true,
        }
    }

    componentDidMount() {



        AsyncStorage.getItem('token')
            .then(value => {
                // console.log("Getting token while ReCreating Note", value);
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
                getNotes(data)
                    .then((result) => {

                        this.setState({
                            note: result.result

                        })
                        // console.log("Result in Datasoure Frontend===>\n")
                        // console.log(result.result)
                        //   console.log(
                        //   dateFormat("mediumDate"),
                        // dateFormat("shortTime"))
                        //  console.log("state in dash ->",this.state.dataSoure);

                    })
                    .catch((err) => {
                        ToastAndroid.showWithGravity("Error occured while Retriving Notes ", err, ToastAndroid.LONG, ToastAndroid.BOTTOM)

                    })
            })
            .catch(err => {
                console.log("error has got its time to show off:", err);
            })
    }



    filteredNotes = searchText => {
        var arr1 = []

        if (searchText !== '') {
            this.setState({
                isSearching: true
            });

            arr1 = Object.keys(this.state.note).map((notes) => {
                var key = notes
                arr1.push(this.state.note[key])

                const filteredData = arr1.filter(function (Note) {
                    return Note.Title.toLowerCase().indexOf(searchText.toLowerCase()) > -1 || Note.Title.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
                })
                this.setState({
                    filterNotes: filteredData
                })
            })
        }
        else {
            this.setState({
                isSearching: false
            })
        }
    }

    render() {

        var noteArray = this.state.isSearching ? this.state.filterNotes : this.state.array
        return (

         
                <View style={styles.searchContainer}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("DashBoard")}>
                        <Image style={styles.drawerArrow} source={require('../assets/images/leftarrow.png')} />
                    </TouchableOpacity>

                    <TextInput style={styles.searchText}
                        placeholder="Search your notes"
                        fontWeight="bold"
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholderTextColor='gray'
                        multiline={this.state.newline}>
                    </TextInput>

                

                <ScrollView>
                    <View>
                        {Object.keys(noteArray).map((note) => {
                            var key = note;
                            var data = noteArray[key]
                            return (
                                <CardComponent Display={data}
                                    notekey={key}
                                    view={this.state.click}
                                    navigation={this.props.navigation} />

                            )
                        })
                        }

                    </View>
                </ScrollView>
                </View>
        )
    }
}

