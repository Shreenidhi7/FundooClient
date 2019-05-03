import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Card } from 'react-native-elements'
//import Edit from '../Page/Edit'
import Multimenu from './Multimenu';



export default class CardComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            click: false
        }
    }
    static navigationOptions = { header: null };
    data = () => {
        //console.warn("iiiii " + this.props.Display)
        this.props.navigation.navigate('Edit', { Display: this.props.Display, notekey: this.props.notekey })
    }
    handlerLongClick() {
        this.setState({ click: !(this.state.click) })
    }
    componentWillUnmount() {

    }

    render() {
        if ((this.state.click === true)) {
            return (

                <Multimenu
                    view={this.state.click} />
            )
        }

        var take = this.props.view ? (style.view1) : (style.view2)

        return (
            <View style={take}>

                <TouchableOpacity onPress={this.data.bind(this)}
                    onLongPress={this.handlerLongClick}
                    activeOpacity={0.6} >
                    <Card >
                        <View>
                            <View style={{ padding: 5,fontWeight:60,fontWeight: 'bold' }}>
                                <Text>{this.props.Display.title}</Text>
                            </View>
                            <View style={{ padding: 5,fontWeight:60,fontWeight: 'bold' }}>
                                <Text>{this.props.Display.description}</Text>
                            </View>

                        </View>
                    </Card>
                </TouchableOpacity>
            </View>
        )
    }
}

const style = StyleSheet.create({
    view1: {
        width: 180,
       
    },
    view2: {
        width: 350,
     
    },


})