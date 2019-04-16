import React,{Component} from "react";
import { View,Text,StyleSheet,TouchableOpacity,ScrollView,FlatList, } from "react-native";



const numColumns=2
export default class CardComponent extends Component {
    static navigationOptions={header:null};

     /*   data=()=>{
           // console.warn("editing a note");
            this.props.navigation.navigate('Edit',{Display:this.props.Display,notekey:this.props.notekey})
         }

         handlerLongClick(){
             alert('in test')
         }

         componentWillUnmount(){ }
         */

         constructor(){
             super()

             this.state={
                 dataSource:[],
              
             }
         }

    componentDidMount(){
        const url="http://192.168.0.91:3000/getAllNotes"

        fetch(url)
        .then((response)=>response.json())
        .then((responseJson)=>{
            this.setState({
                dataSource:responseJson.result,
             
            })
        })
        .catch((err)=>{
            console.log("error===>",err);
            
        })

    }



    renderItem=({item})=>{
        return(
            <ScrollView style={{backgroundColor:"white",borderRadius:10,borderWidth:1,marginBottom:10,marginLeft:10}}>
                <TouchableOpacity>
                <View style={{padding:5,}}>
                            <Text style={{color:"black"/*"white"*/,fontWeight:'600'}}>
                                {item.title}
                            </Text> 
                        </View>

                        <View style={{padding:5,}}>
                            <Text style={{color:"black"/*"white"*/}}>
                                {item.description}
                            </Text>
                        </View>
                </TouchableOpacity>
            </ScrollView>
        )

    }

    // render() {

    //     var take=this.props.view ? (style.view1):(style.view2)
    //     return(
    //         <View style={take}>
    //             <TouchableOpacity onPress={this.data.bind(this)}
    //                 onLongPress={this.handlerLongClick}
    //                 activeOpacity={0.6}>

    //             <Card containerStyle={{backgroundColor:"white",borderRadius:20,borderWidth:3}}>
    //             <View>
    //                     <View style={{padding:5,}}>
    //                         <Text style={{color:"black"/*"white"*/,fontWeight:'600'}}>
    //                         hehehehehehe
    //                         </Text> 
    //                     </View>

    //                     <View style={{padding:5,}}>
    //                         <Text style={{color:"black"/*"white"*/}}>
    //                             hahahahahaha
    //                         </Text>
    //                     </View>
    //             </View>

    //             </Card>
    //             </TouchableOpacity>
    //         </View>
    //     )
    // }

    render() {
        var take=this.props.view ? (style.view1):(style.view2)
        return(
            <View style={take}>
        
          
                <FlatList
                    data={this.state.dataSource}
                    renderItem={this.renderItem}
                    numColumns={numColumns}
                />
            
      
            </View>
        );
    }




}

const style=StyleSheet.create({
    view1:{width:100/*160*/},
    view2:{width:200 /*320*/}
})