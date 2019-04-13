import React,{Component} from "react";
import { View,Text,StyleSheet,TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";

export default class CardComponent extends Component {
    static navigationOptions={header:null};

        data=()=>{
           // console.warn("editing a note");
            this.props.navigation.navigate('Edit',{Display:this.props.Display,notekey:this.props.notekey})
         }

         handlerLongClick(){
             alert('in test')
         }

         componentWillUnmount(){ }

    render() {

        var take=this.props.view ? (style.view1):(style.view2)
        return(
            <View style={take}>
                <TouchableOpacity onPress={this.data.bind(this)}
                    onLongPress={this.handlerLongClick}
                    activeOpacity={0.6}>

                <Card containerStyle={{backgroundColor:"white",borderRadius:20,borderWidth:3}}>
                <View>
                        <View style={{padding:5,}}>
                            <Text style={{color:"black"/*"white"*/,fontWeight:'600'}}>
                            hehehehehehe
                            </Text> 
                        </View>

                        <View style={{padding:5,}}>
                            <Text style={{color:"black"/*"white"*/}}>
                                hahahahahaha
                            </Text>
                        </View>
                </View>

                </Card>
                </TouchableOpacity>
            </View>
        )
    }
}

const style=StyleSheet.create({
    view1:{width:160},
    view2:{width:320}
})