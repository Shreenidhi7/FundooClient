// import React, { Component } from "react";

// import { Text, View, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
// import { getNotes } from "../services/noteService";
// import CardComponent from "../navigation/CardCompo";
// import AsyncStorage from '@react-native-community/async-storage';
// import styles from '../StyleSheet'

// export default class Search extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             searchText: '',
//             isSearching: false,
//             filterNotes: [],
//             note: [],
//             array: [],
//             newline: true,
//         }
//     }

//     componentDidMount() {



//         AsyncStorage.getItem('token')
//             .then(value => {
//                 // console.log("Getting token while ReCreating Note", value);
//                 this.token = value
//                 var data = {
//                     title: this.state.Title,
//                     description: this.state.Description,
//                     archive: this.state.archive,
//                     pinned: this.state.pinned,
//                     reminder: this.state.reminder,
//                     color: this.state.color,
//                     trash: this.state.trash,
//                     token: value
//                 }
//                 getNotes(data)
//                     .then((result) => {

//                         this.setState({
//                             note: result.result

//                         })
//                         // console.log("Result in Datasoure Frontend===>\n")
//                         // console.log(result.result)
//                         //   console.log(
//                         //   dateFormat("mediumDate"),
//                         // dateFormat("shortTime"))
//                         //  console.log("state in dash ->",this.state.dataSoure);

//                     })
//                     .catch((err) => {
//                         ToastAndroid.showWithGravity("Error occured while Retriving Notes ", err, ToastAndroid.LONG, ToastAndroid.BOTTOM)

//                     })
//             })
//             .catch(err => {
//                 console.log("error has got its time to show off:", err);
//             })
//     }



//     filteredNotes = searchText => {
//         var arr1 = []

//         if (searchText !== '') {
//             this.setState({
//                 isSearching: true
//             });

//             arr1 = Object.keys(this.state.note).map((notes) => {
//                 var key = notes
//                 arr1.push(this.state.note[key])

//                 const filteredData = arr1.filter(function (Note) {
//                     return Note.Title.toLowerCase().indexOf(searchText.toLowerCase()) > -1 || Note.Title.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
//                 })
//                 this.setState({
//                     filterNotes: filteredData
//                 })
//             })
//         }
//         else {
//             this.setState({
//                 isSearching: false
//             })
//         }
//     }


//     render() {

//         var noteArray = this.state.isSearching ? this.state.filterNotes : this.state.array
//         return (


//                 <View style={styles.searchContainer}>
//                     <TouchableOpacity onPress={() => this.props.navigation.navigate("DashBoard")}>
//                         <Image style={styles.drawerArrow} source={require('../assets/images/leftarrow.png')} />
//                     </TouchableOpacity>

//                     <TextInput style={styles.searchText}
//                         placeholder="Search your notes"
//                         fontWeight="bold"
//                         underlineColorAndroid='rgba(0,0,0,0)'
//                         placeholderTextColor='gray'
//                       //  multiline={this.state.newline}
//                       >
//                     </TextInput>



//                 <ScrollView>
//                     <View>
//                         {Object.keys(noteArray).map((note) => {
//                             var key = note;
//                             var data = noteArray[key]
//                             return (
//                                 <CardComponent Display={data}
//                                     notekey={key}
//                                     view={this.state.click}
//                                     navigation={this.props.navigation} />

//                             )
//                         })
//                         }

//                     </View>
//                 </ScrollView>
//                 </View>
//         )
//     }
// }

/*********************************************************************************************************************************************** */


import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView, } from 'react-native'
import CardComponent from '../navigation/CardCompo';
import { getNotes } from '../services/noteService'
import AsyncStorage from '@react-native-community/async-storage';

export default class SearchNote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: '',
            note: [],
            filterNotes: [],
            isSearching: false,
            array: [],

        }
    }



    componentDidMount() {

        AsyncStorage.getItem('token').then(value => {
            console.log("Getting token serch  Note", value);
            this.token = value
            var data = {
                title: this.state.Title,
                description: this.state.Description,
                reminder: this.state.reminder,
                pinned: this.state.pin,
                dialogVisible: false,
                color: this.state.color,
                archive: this.state.archive,
                trash: this.state.trash,
                token: value,
               // profilepic: this.state.avatarSource
            }

            getNotes(data)
                .then((result) => {

                    this.setState({
                        note: result
                    })
                    console.log("Result in Datasoure Frontend===>")
                   // console.log(result.result)


                })
                .catch((err) => {
                    console.log("Error occured while showing Note ", err);

                })
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
                    return Note.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1 /*|| Note.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1 */
                   /* && Note.description.toLowerCase().indexOf(searchText.toLowerCase()) >-1*/ || Note.description.toLowerCase().indexOf(searchText.toLowerCase()) > -1
                });
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

        var notesArray = this.state.isSearching ? this.state.filterNotes : this.state.array;

        return (

            <View>

                <View style={styles.top}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image style={styles.drawerArrow} source={require('../assets/images/leftarrow.png')} />
                    </TouchableOpacity>
                    <TextInput style={styles.placeholder}
                        placeholder='Search your notes'
                        onChangeText={(searchText) => { this.filteredNotes(searchText) }} />
                </View>
                <ScrollView>
                    <View>
                        {Object.keys(notesArray).map((note) => {
                            var key = note;
                            var data = notesArray[key];
                            return (
                                <CardComponent Display={data}
                                    notekey={key}
                                    view={this.state.click}
                                    navigation={this.props.navigation}
                                />
                            )
                        })
                        }
                    </View>
                </ScrollView>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    placeholder: {fontSize: 25,fontWeight:'bold' },
    drawerArrow: {
        padding: 20, width: 20,
        height: 20,marginTop:10

    },
    colourtext: { padding: 20, fontSize: 20 },
    remindertext: {
        fontSize: 20, height: 50,
        width: 120, backgroundColor: 'blue', borderRadius: 16, justifyContent: "center", alignItems: "center",
    },
    top: {
        flexDirection: 'row', padding: 15,

    }

})