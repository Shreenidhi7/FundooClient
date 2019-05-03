import React,{Component} from 'react'
import { View,Text,StyleSheet } from 'react-native';

export default class MultiMenu extends Component{
render(){
    let visual=this.props.view ? styles.view1 :styles.view2

    return(
        <View style={visual}>
            <Text>
                Hi
            </Text>
        </View>
    )
}
}
const styles=StyleSheet.create({
    view1:{height:40,marginLeft:10},
    view2:{height:0}
})