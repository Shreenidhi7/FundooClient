import React,{Component} from "react";
import { View,Text,StyleSheet } from "react-native";


import { Card } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class CardComponent extends Component {
    static navigationOptions={header:null};

        data=()=>{
            console.warn("editing a note");
            this.props.navigation.navigate('Edit',{Display:this.props.Display,notekey:this.props.notekey})
         }
    render() {

        var take=this.props.view ? (style.view1):(style.view2)
        return(
            <View style={take}>
                <TouchableOpacity onPress={this.data.bind(this)}>
                
                <Card containerStyle={{backgroundColor:this.props.Display.color,borderRadius:20,borderWidth:3}}>
                <View>
                        <View style={{padding:5,}}>
                            <Text style={{color:"white",fontWeight:'600'}}>
                                {this.props.Display.Title}
                            </Text> 
                        </View>

                        <View style={{padding:5,}}>
                            <Text style={{color:"white"}}>
                                {this.props.Display.Note}
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