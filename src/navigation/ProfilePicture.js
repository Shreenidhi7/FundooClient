import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';
// import RNFetchBlob from 'rn-fetch-blob';
// import { AsyncStorage } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import { setProfilePic } from "../services/noteService";
import { API } from '../../appconfig';
import { ToastAndroid } from "react-native";

const baseUrl = API.BASE_URL;

const options = {
    title: 'Fundoo App',
    takePhotoButtonTitle: 'Take Photo With Your Camera',
    chooseFromLibraryButtonTitle: 'Choose Photo From Library',
}
export default class ProfilePicture extends Component {
    static navigationOptions = {

        header: null,
        drawerLabel: 'ProfilePic',
        inactiveTintColor: 'black',
        backgroundColor: 'yellow',
        drawerIcon:
            <Image style={{ width: 24, height: 30, borderRadius: 20 }} source={require('../assets/images/user.png')} />



    }

    constructor(props) {
        super(props);
        this.state = {
            imageArray: [],
            PicArray: [],
            avatarSource: null,
            formdata: {},
            token: ''


        }
    }

    boxPopUp = () => {


        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response... = ', response);
            //console.log("<><><><><><><><><><><>", response.data);


            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('Image Picker Error: ', response.error);
            }

            else {
                let source = { uri: response.uri };


                let formdata = new FormData();

                // formdata.append('image',
                //     {
                //         uri: source.uri,
                //         //name: 'image.jpg',
                //         type: 'image/jpeg'
                //     })

                formdata.append('image', source.uri);

                console.log("response of the source===>", source);

                console.log("CEHCKING FORM DATA <><>", formdata);


                this.setState({
                    avatarSource: source,
                    profile: {},
                    formdata: formdata

                });


            }
        });
    }




    submit = async event => {

        AsyncStorage.getItem('token').then(value => {
            console.log("Getting token while Creating Note", value);
            this.token = value
            // var data = {

            //     image: this.state.avatarSource,
            //     token: this.token
            // }

            // console.log("{}{}{}{}{}{}{}{}{}{}{}{}", data.image);
            // console.log("{}{}{}{}{}{}{}{}{}{}{}{}", data.token);

            var data = {
                formdata: this.state.formdata,
                token: this.token

            }
            console.log("97888888888888888888888888888888888888888888888", data);

            setProfilePic(data)

                // setProfilePic(data.image, data.token)

                .then((result) => {
                    console.log("Result from backend ", result);
                    this.setState({
                        imageArray: result
                    })
                })
                .catch((err) => {
                    ToastAndroid.showWithGravity("Error occured while Retriving Image ", err, ToastAndroid.LONG, ToastAndroid.BOTTOM)
                })
        })
            .catch(err => {
                console.log("error has got its time to show off:", err);
            })
    }

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>

                <Image source={this.state.avatarSource}
                    style={{ width: '100%', height: 300, margin: 10 }} />

                <TouchableOpacity style={{ backgroundColor: 'green', margin: 10, padding: 10 }}
                    onPress={this.boxPopUp}>
                    <Text style={{ color: '#fff' }}>Select Image</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ backgroundColor: 'rgb(30,144,255)', margin: 10, padding: 10 }}
                    onPress={() => this.submit()}>
                    <Text style={{ color: '#fff' }}>Upload</Text>
                </TouchableOpacity>


            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});





    //will see later on.....method of RNFetchBlob
    //     //   UpdateImage = (source) => { 

    //     //  console.log("source ------>",source);

    //     //     RNFetchBlob.fetch('PUT', baseUrl+'/updateImage', {

    //     //       Authorization: "Bearer access-token",
    //     //       otherHeader: "foo",
    //     //      'Content-Type': 'multipart/form-data',


    //     //      }, [

    //     //         // element with property `filename` will be transformed into `file` in form data
    //     //      { name: 'image', filename: 'avatar.png', data: this.state.pic }

    //     //      ]).then((resp) => {
    //     //         console.log("response...."+resp);
    //     //         alert('your image uploaded successfully');
    //     //         this.setState({ avatarSource: resp })
    //     //         this.props.navigation.navigate('DashBoard')
    //     //       })
    //     //   }

