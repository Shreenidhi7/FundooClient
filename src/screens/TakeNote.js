import React, { Component } from 'react';
import {

    StyleSheet,
    Text,
    View,
    StatusBar,
    Image,
    TouchableOpacity,
    TextInput,
    Picker
} from 'react-native';
import { ToastAndroid } from 'react-native';
import { createNote } from "../services/noteService";



export default class TakeNote extends Component {
    constructor() {
        super();
        this.state = {
            Title: "",
            Description: "",
            click:false,
            TakeNote:{}

        }
    }

    getpin(event) {
        this.setState({ click: !this.state.click })
    }


   /* getpin = async event => {
        console.warn(this.state.pin + " before")
        await this.setState({ pin: !this.state.pin })
        console.warn(this.state.pin + " after")
    }   */

   /* getpin=pin((event)=>{
        console.warn(this.state.pin + " before")
        this.setState({
            pin:!this.state.pin
        })
        console.log(this.state.pin+"after")
    })
*/





    submit() {
        if (this.state.Title == '') {
            ToastAndroid.showWithGravity("Enter Title",ToastAndroid.LONG,ToastAndroid.BOTTOM)
        }
       /* else if (this.state.Description == '') {
            ToastAndroid.showWithGravity("Enter Description",ToastAndroid.LONG,ToastAndroid.BOTTOM)
        }*/
        else {
            
                var data = {
                   
                    title: this.state.Title,
                    description: this.state.Description
                }
                createNote(data)
                    .then((result) => {
                        this.setState({
                            
                              TakeNote: result.data.data
                        })
                  
                        this.props.navigation.navigate('DashBoard')
                    })
                    .catch((err) => {
                        ToastAndroid.showWithGravity("Fill all the sections",err,ToastAndroid.LONG,ToastAndroid.BOTTOM)

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
                    this.state.click ?
                   ( <TouchableOpacity  onPress={(event) => this.getpin(event)}>
                        <Image style={styles.pinbutton} source={require('../assets/images/pin.png')}>
                        </Image>
                    </TouchableOpacity>)
                    :
                    (<TouchableOpacity  onPress={(event) => this.getpin(event)}>
                        <Image style={styles.unpinbutton} source={require('../assets/images/unpin.png')}>
                        </Image>
                        </TouchableOpacity>)
                }

                    <TouchableOpacity>
                        <Image style={styles.reminderbutton} source={require('../assets/images/remaindericon.png')}></Image>
                    </TouchableOpacity>


                    <TouchableOpacity>
                        <Image style={styles.archivebutton} source={require('../assets/images/archivebox.png')}>
                        </Image>
                    </TouchableOpacity>
                </View>


                <View>

                    <View style={{ marginLeft: 30 }}>
                        <TextInput
                            style={{ fontSize: 30, fontWeight: "bold" }}
                            placeholder="Title"
                            placeholderTextColor="#a1a5a3"
                            onChangeText={(text)=>this.setState({Title:text})}
                            
                        />
                        <TextInput placeholder="Description"
                            style={{ fontSize: 20, fontWeight: "bold" }}
                            placeholderTextColor="#a1a5a3"
                            onChangeText={(text)=>this.setState({Description:text})}

                        />
                    </View>
                </View>


                <View>
                    <View style={{ flex: 1, backgroundColor: /*"#009688"*/ "#ffffff", justifyContent: 'flex-end' }}></View>
                    <View style={styles.last}>

                        <TouchableOpacity>
                            <Image style={styles.plusicon} source={require('../assets/images/plusnew.png')}></Image>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image style={styles.dots} source={require('../assets/images/dots.png')}></Image>

                        </TouchableOpacity>
                    </View>


                </View>
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
        position: 'relative',
        bottom: /*-375*/  -555,
        flexDirection: "row"

    },

    arrow: {
        marginLeft: 10,
        width: 30,
        height: 40,

    },

    pinbutton: {
        width: 10,  //20,
        height: 20,  //30,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        //marginLeft: 10,  //10,
        marginRight: -15,
        paddingLeft: 50,   // 30,
        marginTop: 20,
        //paddingTop:20

    },
    unpinbutton: {
        width:  10,   //20,
        height:  20,      //30,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        //marginLeft: 10,  //10,
        marginRight: -15,
        paddingLeft: 50,   // 30,
        marginTop: 20,

    },
    reminderbutton: {
        width: 40,
        height: 40,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginLeft: 25,     //10,
        marginRight: 20,
        paddingLeft: 20,  // 30,
        marginTop: 10
    },
    archivebutton: {
        width: 30,
        height: 30,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        //marginLeft:  10,    // 10,
        marginRight: 50,
        paddingLeft: 20,    //  30,
        marginTop: 10
    },

    plusicon: {
        width: 50,
        height: 50,
        justifyContent: 'space-between',
        alignItems: "center",
        marginLeft: 10,
        paddingLeft: 30,
        marginTop: -10
    },


    dots: {
        width: 40,
        height: 40,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        // marginRight:300,
        marginLeft: 290,
        paddingLeft: 85,
        marginTop: -5
    }

}); 