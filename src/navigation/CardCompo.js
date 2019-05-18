import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-elements'
import Edit from '../screens/Edit'
import Multimenu from './Multimenu';
import Reminder from '../screens/reminder'
import { Chip} from 'react-native-paper';


export default class CardComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            click: false
        }
    }
    static navigationOptions = { header: null };
    data = () => {
        console.warn("display data" + this.props.Display)
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
                 
                        <Card containerStyle={{ backgroundColor:this.props.Display.color, borderRadius: 10, borderWidth: 1, borderColor: 'black' }}>
                            <View>
                                
                                <View style={{ padding: 5, fontSize: 150, fontWeight: 'bold', color: 'black' }}>
                                    <Text>{this.props.Display.title}</Text>
                                </View>

                                <View style={{ padding: 5, fontSize: 150, fontWeight: 'bold', color: 'black' }}>
                                    <Text>{this.props.Display.description}</Text>
                                </View>


                            <View style={{padding:5,fontSize:150,fontWeight:'bold',color:'black'}}>
                            <Chip mode='outlined' style={{backgroundColor:this.props.Display.color,width:'60%'}}>
                                <Image style={style.clock} source={require('../assets/images/clock.png')}/>
                                {this.props.Display.reminder}
                            </Chip>                            
                            </View>




                                {/* <Card containerStyle={{ backgroundColor: this.props.Display.color, borderRadius: 50, borderWidth: 1, borderColor: 'black' }}>
                                    <Image style={style.clock} source={require('../assets/images/clock.png')} />
                                   
                                    <View style={{ padiing: 5, fontWeight: 90, fontWeight: 'bold' }}>
                                        <Text>{this.props.Display.reminder}</Text>
                                    </View>
                                 </Card> */}

                            </View>
                        </Card>
                    </TouchableOpacity>
            

            </View>
        )
    }
}

const style = StyleSheet.create({
    view1: {
        width: 205, //180,

    },
    view2: {
        width: 350,   //350,
    },

    clock: {
        width: 15,
        height: 15,
        flexDirection:'row'
    }


})