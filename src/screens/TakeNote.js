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

                <Text>                                                     </Text>
                
                <TouchableOpacity>
                    <Image style={styles.pinbutton} source={require('../assets/images/pinicon.png')}>
                    </Image>
                </TouchableOpacity>


                <TouchableOpacity>
                    <Image style={styles.reminderbutton} source={require('../assets/images/remaindericon.png')}></Image>
                </TouchableOpacity>


                <TouchableOpacity>
                    <Image style={styles.archivebutton} source={require('../assets/images/archivebox.png')}>
                    </Image>
                </TouchableOpacity>
            </View>
       
       
            <View>
        
                <View style={{ marginLeft: 30}}>
                    <TextInput
                        style={{ fontSize: 30,fontWeight:"bold" }}
                        placeholder="Title"
                        placeholderTextColor="#a1a5a3"
                       
                    />
                    <TextInput placeholder="Note"
                        style={{ fontSize: 20,fontWeight:"bold" }}
                        placeholderTextColor="#a1a5a3"
                       
                    />
                </View>
            </View> 


            <View>
                <View style={{ flex: 1, backgroundColor: /*"#009688"*/ "#ffffff" , justifyContent : 'flex-end'}}></View>
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
        flexDirection:"row"
    
      },
   
    arrow: {
        marginLeft: 10,
        width: 30,
        height: 40,

    },
   
    pinbutton: {
        width: 20,
        height: 30,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        //marginLeft: 10,  //10,
        marginRight:-15,
        paddingLeft: 50,   // 30,
        marginTop: 10,

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
        marginRight:50,
        paddingLeft:  20,    //  30,
        marginTop: 10
    },
  
    plusicon : {
        width: 50,
        height: 50,
        justifyContent: 'space-between',
        alignItems: "center",
        marginLeft: 10,
        paddingLeft: 30,
        marginTop: -10
    },


    dots : {
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