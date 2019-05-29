import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, ScrollView, Picker, TouchableOpacity, Modal } from 'react-native';

import { Avatar, Header, SearchBar, SocialIcon, Card } from 'react-native-elements';
// import { TextField } from 'react-native-material-textfield';

export default class Label extends Component {
    constructor() {
        super();
        this.state = {
            label: '',
            labelarray: [],
            close: false,
            visible: false,
            edit: false


        }
        this.createLabel = this.createLabel.bind(this)
        this.handeleback = this.handeleback.bind(this)
    }
    componentDidMount() {
        {
            this.props.label ?
            (this.setState({
                labelarray: this.props.label,
                edit: true

            })

            ) :
            (
                this.setState({
                    labelarray: [],
                    edit: false

                })
            )

        }
    }
    async handleEditback(note, key) {
        await this.setState({
            visible: false
        })
        this.props.add(this.state.labelarray, note, key)
    }

    async  handeleback(note, key) {
        await this.setState({
            visible: false
        })
        this.props.close(this.state.labelarray)
    }

    // async handlelabel(value) {
    //     await this.setState({
    //         label: value
    //     })
    //     alert('label--', this.state.label)
    // }
    handlelabel() {
        this.setState({
            visible: true
        })
    }
    async  createLabel(event) {
        var array = []
        array = this.state.labelarray,

            array.push(this.state.label)
        await this.setState({
            labelarray: array,
            label: '',
        })

        console.warn('col user--' + this.state.label)
        console.warn('col array--' + this.state.labelarray)
    }



    render() {
        // console.warn('note in label'+this.props.note.Title)
        // console.warn('note key in label'+this.props.notekey)
        // console.warn('edit in label'+this.state.edit)

        // const { navigation } = this.props;
        // const label = navigation.getParam('key');
        // const na = navigation.getParam('data');

        var arraylabel = this.state.labelarray.map((option) => {
            return (
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, }}>
                    <Image style={styles.Icon} source={require('../assets/images/leftarrow.png')} />
                    <Text>{option}</Text>
                    <Image style={styles.Icon} source={require('../assets/images/Tick.png')} />
                </View>
            )
        })

        return (
            <View>
                <View>
                    <View style={styles.inmore}>
                        < TouchableOpacity onPress={() => this.handlelabel()} >
                            <View style={{ flexDirection: "row" }}>
                                <Image style={styles.reminder} source={require('../assets/images/leftarrow.png')} />
                                <Text style={{ marginLeft: 10 }}>Labels</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <Modal visible={this.state.visible}>
                    <Card containerStyle={{ borderWidth: 0, width: '100%', marginLeft: 0 }}>
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
                            </View>
                            <TextInput


                                placeholder='Enter label'

                                value={this.state.label}

                                onChangeText={(label) => this.setState({ label })}


                            />

                            <Button title='Create' onPress={(event) => this.createLabel(event)}></Button>
                        </View>
                        <View>



                        </View>
                    </Card>
                    <View>
                        {arraylabel}
                    </View>
                </Modal>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    reminder: {
        height: 25,
        width: 25,
        marginLeft: 10,
        marginRight: 10,
    },

    imore: {
        marginTop: 5
    },
    Icon: {
        height: 20,
        width: 20
    }
})