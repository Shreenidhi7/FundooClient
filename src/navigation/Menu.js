import React,{Component} from 'react';

import { StyleSheet,Text,View,TextInput,FlatList,ScrollView,TouchableOpacity } from 'react-native';




const colorPaletteClassName=[
    {
        colorCode:"rgb(255,255,255)",
        colorName:"White",
    },
    {
        colorCode:"rgb(242,139130)",
        colorName:"Red",
    },
    {
        colorCode:"rgb(215,174,251)",
        colorName:"Purple"
    },
    {
        colorCode:"rgb(255,192,203)",
        colorName:"Pink"
    },
    {
        colorCode:"rgb(167,255,235)",
        colorName:"Teal",
    },
    {
        colorCode:"rgb(251,188,4)",
        colorName:"Orange",
    },
    {
        colorCode:"rgb(174,203,250)",
        colorName:"Dark Blue",
    },
    {
        colorCode:"rgb(232,234,237)",
        colorName:"Gray",
    },
    {
        colorCode:"rgb(203,240,248)",
        colorName:"Blue"
    },
    {
        colorCode:"rgb(230,201,168",
        colorName:"Brown",
    },
    {
        colorCode:"rgb(255,255,0",
        colorName:"Yellow"
    },
    {
        colorCode:"rgb(204,255,144)",
        colorName:"Green"
    }
]

export default class Menu extends Component {
    constructor(props){
        super(props)

        this.state={
            color:'',
            trash:''
        }
        this.handlecolor=this.handlecolor.bind(this)
    }

    async  handlecolor(color) {
        console.warn("Colors==>",color);
        await this.setState({
            color:color
        })
        console.warn("Color change==>",this.state.color);
        this.props.color(this.state.color)        
    }

    handleTrash=async event=>{
        await this.setState({
            trash:!this.state.trash
        })
        this.props.trash(this.state.trash)
    }

    render() {
        let take=this.props.view ? styles.view1 : styles.view2 
        
        return(
            <View style={take}>
            
                <View>
                    <TouchableOpacity onPress={this.handleTrash.bind(this)}>
                        <Text style={take}> Delete </Text>
                    </TouchableOpacity>
                </View>
            
                <View>
                    <TouchableOpacity>
                        <Text style={take}> Make a Copy </Text>
                    </TouchableOpacity>
               </View>

               <View>
                   <TouchableOpacity>
                       <Text style={take}> Send </Text>
                   </TouchableOpacity>
               </View>

                <View>
                    <TouchableOpacity>
                        <Text style={take}> Collaborator </Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity>
                        <Text style={take}> Labels </Text>
                    </TouchableOpacity>
                </View>


                <View>
                    <FlatList horizontal={true}
                        data={colorPaletteClassName}
                        renderItem={({item})=>
                            <TouchableOpacity onPress={()=>this.handlecolor(item.colorCode)}>
                                <View style={{backgroundColor:item.colorCode, marginLeft:5, borderRadius:25, height:40, width:40, borderColor:'black', borderWidth:StyleSheet.hairlineWidth}}></View>
                            </TouchableOpacity>}>
                     </FlatList>   
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    view1:{height:40,marginLeft:10},
    view2:{height:0}
})