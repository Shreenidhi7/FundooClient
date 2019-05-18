import React, { Component } from 'react';

import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';




const colorPaletteClassName = [
    {
        colorCode: "rgb(255,255,255)",
        colorName: "White",
    },
    {
        colorCode: "rgb(242,139,130)",
        colorName: "Red",
    },
    {
        colorCode: "rgb(215,174,251)",
        colorName: "Purple"
    },
    {
        colorCode: "rgb(255,192,203)",
        colorName: "Pink"
    },
    {
        colorCode: "rgb(167,255,235)",
        colorName: "Teal",
    },
    {
        colorCode: "rgb(251,188,4)",
        colorName: "Orange",
    },
    {
        colorCode: "rgb(174,203,250)",
        colorName: "Dark Blue",
    },
    {
        colorCode: "rgb(232,234,237)",
        colorName: "Gray",
    },
    {
        colorCode: "rgb(203,240,248)",
        colorName: "Blue"
    },
    {
        colorCode: "rgb(230,201,168)",
        colorName: "Brown",
    },
    {
        colorCode: "rgb(255,255,0)",
        colorName: "Yellow"
    },
    {
        colorCode: "rgb(204,255,144)",
        colorName: "Green"
    }
]

export default class Menu extends Component {
    constructor(props) {
        super(props)

        this.state = {
            color: '',
            trash: false
        }
        this.handlecolor = this.handlecolor.bind(this)
    }

    async  handlecolor(color) {
        console.warn("Color==>", color);
        await this.setState({
            color: color
        })
        console.warn("Color Change==>", this.state.color);
        this.props.color(this.state.color)
    }

    handleTrash = async event => {
        await this.setState({
            trash: !this.state.trash
        })
        //this.props.navigation.navigate('Trash')
        this.props.trash(this.state.trash)
        this.props.navigation.navigate('Trash')
    }

    render() {


        return (
            <View >

                <View style={{ height: 50 }}>
                    <TouchableOpacity onPress={this.handleTrash.bind(this)}>
                   
                        <Text style={styles.text}> Delete </Text>
                        <Image style={{width:24,height:30,flexDirection:"row"}}source={require('../assets/images/trash.png')}/>
                    </TouchableOpacity>
                </View>

                <View style={{ height: 55 }}>
                    <TouchableOpacity>
                        <Text style={styles.text}> Make a Copy </Text>
                    </TouchableOpacity>
                </View>

                <View style={{ height: 55 }}>
                    <TouchableOpacity>
                        <Text style={styles.text}> Send </Text>
                    </TouchableOpacity>
                </View>

                <View style={{ height: 55 }}>
                <TouchableOpacity>
                    <Text style={styles.text}> Collaborator </Text>
                </TouchableOpacity>
                </View>

                <View style={{ height: 40 }}>
                <TouchableOpacity>
                    <Text style={styles.text}> Labels </Text>
                </TouchableOpacity>
                </View>


                <View>
                    <FlatList horizontal={true}
                        data={colorPaletteClassName}
                        renderItem={({ item }) =>
                            <TouchableOpacity onPress={() => this.handlecolor(item.colorCode)}>
                                <View style={{ backgroundColor: item.colorCode, marginLeft: 5, borderRadius: 25, height: 40, width: 40, borderColor: 'black', borderWidth: StyleSheet.hairlineWidth }}></View>
                            </TouchableOpacity>}>
                    </FlatList>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text:{fontWeight:'bold',fontSize:15,flexDirection:'row',marginLeft:20},
    view1: { height: 40, marginLeft: 10, marginBottom: 10, fontWeight: 'bold' },
    view2: { height: 0 },
    delete: {
        width: 20, height: 20, flexDirection: 'row'
    }

})