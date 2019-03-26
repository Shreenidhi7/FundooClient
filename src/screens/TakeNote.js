import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    StatusBar,
    Image,
    TouchableOpacity,
    TextInput
} from 'react-native';




export default class TakeNote extends Component {
    
    render() {
        return (
        <View>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('DashBoard')}>
                    <Image style={styles.arrow} source={require('../assets/images/leftarrow.png')} >
                    </Image>
                </TouchableOpacity>
                <Text>                                              </Text>
                <TouchableOpacity>
                    <Image style={styles.pinbutton} source={require('../assets/images/pinbutton.png')}>
                    </Image>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.reminderbutton} source={require('../assets/images/remainderbutton.jpeg')}></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.archivebutton} source={require('../assets/images/archivebox.png')}>
                    </Image>
                </TouchableOpacity>
            </View>

            <View style={{ marginLeft: 30 }}>
                    <TextInput
                        style={{ fontSize: 25 }}
                        placeholder="Title"
                        placeholderTextColor="#a1a5a3"
                       
                    />
                    <TextInput placeholder="Note"
                        style={{ fontSize: 15 }}
                        placeholderTextColor="#a1a5a3"
                       
                    />
            </View>
            



            <View style={{ flex: 1, backgroundColor: /*"#009688"*/ "#ffffff" , justifyContent : 'flex-end'}}></View>
            <View style={styles.last}>
                     <TouchableOpacity>
                        <Image style={styles.plusicon} source={require('../assets/images/plusbutton.png')}></Image>
                    </TouchableOpacity>
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
    
      },
   
    arrow: {
        marginLeft: 10,
        width: 30,
        height: 40,

    },
   
    pinbutton: {
        width: 30,
        height: 30,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginLeft: 10,
        paddingLeft: 30,
        marginTop: 10

    },
    reminderbutton: {
        width: 30,
        height: 30,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginLeft: 10,
        paddingLeft: 30,
        marginTop: 10
    },
    archivebutton: {
        width: 30,
        height: 30,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginLeft: 10,
        paddingLeft: 30,
        marginTop: 10
    },
  
    plusicon : {
        width: 30,
        height: 30,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginLeft: 10,
        paddingLeft: 30,
        marginTop: 10
    }

}); 