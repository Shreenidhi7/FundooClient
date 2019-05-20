import { StyleSheet } from 'react-native';



export default StyleSheet.create({

    loginForm: {
        flex: 1,
        flexGrow: 1,
        flexShrink: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    loginLogoWriteUp: {
        // marginTop: 1,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'rgb(30,144,255)'
    },
    loginHeader: {
        marginTop:30,
        marginBottom:30,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
        // borderBottomWidth: 1

    },
    inputbox: {
        //     // alignSelf: 'stretch',
        //     // height: 40,
        //     // marginBottom: 30,
        //     // fontWeight: 'bold',
        //     // color: "black",
        //     // borderBottomColor: 'rgb(7, 7, 7)',
        //     // borderBottomWidth: 1,
        //     fontSize: 18,
        //     width: '100%',
        //     backgroundColor: 'rgba(255,255,255,0.3)',
        //  //   borderRadius: 20,
        //   //  borderWidth: 1,
        //     paddingHorizontal: 10,
        //     marginVertical: 10,
        marginTop: 30,
        fontSize: 25,
        width: '70%',
        backgroundColor: 'rgba(255,255,255,0.3)',
        paddingHorizontal: 16, 
        marginVertical: 10,
        color: 'black',
        marginBottom: 20,
    
        },
    // loginButton: {
    //     //alignSelf: 'stretch',
    //     alignItems: 'center',
    //     justifyContent: 'space-between',
    //     padding: 10,
    //     backgroundColor: 'rgb(28,27,27)',          //'blue',      //'rgb(28, 27, 27)',

    //    // borderRadius: 10,

    //     marginLeft: 80,
    //     marginRight: 80,
    // },
    loginButton:{
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'rgb(30,144,255)',      //'rgb(28, 27, 27)',
        marginTop: 30,
        marginBottom: 30,
        borderRadius: 40,
        marginLeft: 80,
        marginRight: 80,
    },
    loginButtonText: {
        fontSize: 26,
        color: '#ffffff',
        fontWeight: "900",
        paddingRight: 0,
    },
  
    signUpTextCont: {
        //this is apt
        marginTop:30,
        marginBottom:30,
        color: 'black',
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 25,
        flexDirection: 'row',
    },

    signUpText: {
        color: 'black',//'rgba(255,255,255,0.7)',
        fontSize: 22,
        fontWeight: 'bold'
    },

    signUpButton: {
        color: "rgb(30,144,255)",
        fontSize: 25,
        fontWeight: 'bold' ,
    },
    forgotButton: {
        margin:20,
        paddingBottom: 10,
        marginBottom: 10,
        color: 'black',
        fontSize: 23,
        fontWeight: "bold"


    },
    /**-------------------------------------------Registration StyleSheet--------------------------------------------------------------------------------------------------- */

    regform: {
        flex: 1,
        flexGrow: 1,
        flexShrink: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',

    },

    regHeader: {
        marginTop: 40,
        fontWeight: 'bold',
        fontSize: 30,
        color: 'black',
        alignSelf: 'center',
        // borderBottomColor: 'rgb(23, 28, 27)',
        // borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 30
    },

    reginputbox: {
        marginTop: 30,
        fontSize: 22,
        width: '70%',//300,
        backgroundColor: 'rgba(255,255,255,0.3)',
        paddingHorizontal: 16, //10,
        marginVertical: 10,
        color: 'black',
        marginBottom: 20,
    },

    submitButton: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 10,
        backgroundColor: "rgb(30,144,255)",      //'rgb(28, 27, 27)',
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 40,
        marginLeft: 80,
        marginRight: 80,
    },

    submitButtonText: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
        paddingRight: 0,
    },


    regTextCont: {
        // flexGrow: 1,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 25,
        flexDirection: 'row',
    },

    regText: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold'
    },

    logButton: {
        color: "rgb(30,144,255)",//'black',
        fontSize: 25,
        fontWeight: "bold"
        // width:300,
        // backgroundColor:'#1E90FF',
        // borderRadius:25,
        // marginVertical:10,
        // paddingVertical:12,
        // marginTop:10,
    },

    text: {
        //marginLeft: 10,
        fontSize: 25,
        color: "black",

    },


    /**-----------------------------------------------------DashBoard StyleSheet--------------------------------------------------------------------------------------------- */
    data: {
        height: 70,
        width: 300,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 10,
        alignItems: 'center',
        padding: 50,
        borderRadius: 35,
    },
    topboxDashboard: {
        flexDirection: "row",
        height: 50,
        width: "95%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "black",
        // height: 50,
        //  bakgroundColor: '#ffffff',
        //   flexDirection: "row",
        //    paddingLeft: 10, 
        //    alignItems: 'center',
        //     width:  390,
        //      marginLeft: 7, 
        //      borderRadius: 9,
        //       borderColor: "#C1C1C1",
        //        borderWidth: 2
    },



    dashboardTopIcon: {
        width: 25, // '20%',
        height: 25,   // '35%',
        padding: 15,
        margin: 15,
       
    },


    drawericon: {
        width: 30,
        height: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
        //marginRight: 10
    },

    refresh: {
        width: 30,
        height: 30,
        justifyContent: "space-between",
        alignItems: "center",
        marginRight: 50,
        marginLeft: 10
    },

    // textTakeaNote: {
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 22,
    //     fontWeight: "bold",
    //     paddingLeft: 15
    // },
    textSearchNotes: {
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 22,
        fontWeight: "bold",
        paddingRight: 30,


    },
    gridicon: {
        width: '30%',
        height: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 10,
        paddingLeft: 30
    },

    listicon: {
        width: '30%',
        height: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 10,
        paddingLeft: 30
    },

    profile: {
        width: 35,
        height: 35,
        justifyContent: 'flex-end',
        alignItems: 'center',
        // marginLeft: 15,
        // marginRight: 10,

    },




    databottomDashboard: {
        // borderColor: "black",
        // borderWidth: 1,
        // height: 70,
        // width: '90%',
        // flexDirection: 'row',
        // flexWrap: 'wrap',
        // paddingLeft: 0,
        // paddingRight: 0,
        // alignItems: 'center',
        // justifyContent: 'space-between'
        marginLeft: 10,
        marginRight: 10,
        flexDirection: "row",
        height: 60,
        width: "95%",
        alignItems: "center",
        justifyContent: 'space-between',
        borderRadius: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "black",

    },
    last: {


        height: 50,

        flexDirection: "row",
        paddingLeft: 25,  //10,
        alignItems: 'center',
        width: /*350*/ 390,
        marginLeft: 10,  //7,
        marginVertical: 10,

        borderColor: "#C1C1C1",


    },

    textTakeaNote: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 22,
        fontWeight: "bold",
        paddingLeft: 15
    },
    bottomicons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    dashbordbottomicon: {
        width: 25,
        height: 25,
        padding: 15,
        margin: 10
    },



    card: {
        flexDirection: 'row',
        flex: 1
    },

    margin1: {
        marginLeft: 20,
        fontSize: 15,
        marginTop: 15
    },
    margin: {
        marginLeft: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },
    view1:
    {
        width: 100/*160*/
    },

    view2:
    {
        width: 200 /*320*/
    },

    /* ------------------------------------------------take a note---------------------------------------------------------------------------------------------------*/


    takeNoteTopBar:
    {
        flexDirection: "row",
        height: 50,
        width: "100%",
        alignItems: "center",
        justifyContent: 'space-around',
        borderRadius: 10,

    },



    // last: {
    //     flexDirection: 'row',
    //     marginTop: 525
    //     // position: 'absolute',
    //     // bottom: -500,  //-555,
    //     //flexDirection: "row"

    // },



    takenotetopicon: {
        width: 35,
        height: 35,
        padding: 15,
        margin: 10
    },

    // arrow: {
    //     marginTop: 10,
    //     marginLeft: 10,
    //     width: 30,
    //     height: 40,
    //     paddingLeft: 10,
    //     paddingRight: 10

    // },

    // pinbutton: {
    //     width: 30,
    //     height: 50,
    //     marginTop: 10,



    // },
    // unpinbutton: {
    //     width: 25,
    //     height: 33,
    //     marginTop: 20,
    //     marginBottom: 0.5
    //     //  marginTop: 20,
    //     //  marginLeft:10,
    //     //  marginRight:5
    //     // marginLeft: 10,
    //     // marginRight: 10
    // },

    // reminderbutton: {
    //     width: 35,
    //     height: 35,
    //     justifyContent: 'space-between',
    //     alignItems: 'flex-start',
    //     marginLeft: 25,     //10,
    //     marginRight: 20,
    //     paddingLeft: 20,  // 30,
    //     marginTop: 15
    // },
    // archivebutton: {
    //     width: 35,
    //     height: 35,
    //     justifyContent: 'space-between',
    //     alignItems: 'flex-start',
    //     marginLeft: 10,
    //     marginTop: 15,
    //     marginRight: 50,
    //     // marginRight: 50,
    //     // paddingLeft: 20,    //  30,
    //     // marginTop: 10
    // },



    takeNotebottomicon: {
        width: 35,
        height: 25,
        padding: 15,
        margin: 10
    },



    databottomTakeNote: {
        marginLeft: 10,
        marginRight: 10,
        // bottom:-650,
        flexDirection: "row",
        height: 100,
        width: "95%",
        // alignItems: 'center',
        justifyContent: 'space-between',
        bottom:0,
        left:0
        // borderRadius: 10,
      
  
    //    // marginTop: 10



    },

    // last: {


    //     height: 50,

    //     flexDirection: "row",
    //     paddingLeft: 25,  //10,
    //     alignItems: 'center',
    //     width: /*350*/ 390,
    //     marginLeft: 10,  //7,
    //     marginVertical: 10,

    //     borderColor: "#C1C1C1",


    // },
    // plusicon: {
    //     flexDirection: 'row',
    //     width: 40,
    //     height: 40,
    //     justifyContent: 'space-between',
    //     alignItems: "center",
    //     marginLeft: 10,
    //     paddingLeft: 30,
    //     marginTop: 10
    // },


    // dots: {
    //     flexDirection: "row",
    //     width: 40,
    //     height: 45,
    //     justifyContent: 'flex-end',
    //     alignItems: 'center',
    //     marginLeft: 320,
    //     marginTop: 1,
    //     marginBottom: 10
    // },

    /*----------------------------------------------reminder----------------------------------------------------------------------------------------------------*/

    // topboxReminder: {
    //     flexDirection: "row",
    //     height: 50,
    //     width: "95%",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     borderRadius: 10,
    //     borderWidth: StyleSheet.hairlineWidth,
    //     borderColor: "black",
    //     // height: 50,
    //     //  bakgroundColor: '#ffffff',
    //     //   flexDirection: "row",
    //     //    paddingLeft: 10, 
    //     //    alignItems: 'center',
    //     //     width:  390,
    //     //      marginLeft: 7, 
    //     //      borderRadius: 9,
    //     //       borderColor: "#C1C1C1",
    //     //        borderWidth: 2
    // },

    topboxReminder: {
        flexDirection: "row",
        height: 50,
        width: "95%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "black",
        // height: 50,
        //  bakgroundColor: '#ffffff',
        //   flexDirection: "row",
        //    paddingLeft: 10, 
        //    alignItems: 'center',
        //     width:  390,
        //      marginLeft: 7, 
        //      borderRadius: 9,
        //       borderColor: "#C1C1C1",
        //        borderWidth: 2
    },
 
    reminderTopIcon: {
      
        width: 35, // '20%',
        height: 35,   // '35%',
        padding: 15,
        margin: 15,
       
    },


    icon: {
        width: 20,
        height: 20,
    },

    // remindertopicons: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     alignItems: "center",
    //     width: 35,
    //     height: 35,
    //     padding: 1,
    //     margin: 5
    // },




    //   drawericon: {
    //     width: 38, //30,
    //     height: 38,  //40,
    //     justifyContent: 'space-between',
    //     alignItems: "center",       //'flex-start',
    //     marginLeft: 5,   //10,
    //     paddingLeft: 30
    //   },
    /***************************** */
    // text: {
    //     marginLeft: 30,
    //     fontSize: 25,
    //     color: "black",

    // },
    // searchicon: {
    //     width: 35,
    //     height: 35,
    //     justifyContent: 'space-between',
    //     alignItems: "center",
    //     marginRight: 30,
    //     marginLeft: 20,
    //     marginVertical: 10

    // },

    // image: {
    //     width: 30, //30,
    //     height: 30,  //40,
    //     justifyContent: 'space-between',
    //     alignItems: "center",       //'flex-start',
    //     marginLeft: 15,   //10,
    //     paddingLeft: 30,
    // },
    // gridicon: {

    //     width: 24,
    //     height: 24,
    //     alignItems: 'flex-end',
    //     justifyContent: 'flex-end'
    // },

    // listicon: {

    //     width: 42,
    //     height: 42,
    //     alignItems: "flex-end",
    //     justifyContent: 'flex-end'
    // },

    /*-----------------------------------------------Edit-----------------------------------------------------------------------------------------------------*/

    EditNoteTopBar:
    {
        flexDirection: "row",
        height: 50,
        width: "100%",
        alignItems: "center",
        justifyContent: 'space-around',
        borderRadius: 10,


    },
    EditNoteTopIcon: {
        width: 35,
        height: 35,
        padding: 15,
        margin: 10
    },
    last: {
        flexDirection: 'row',
        marginTop: 670//525
    },
    arrow: {
        marginTop: 10,
        marginLeft: 10,
        width: 30,
        height: 40,
        paddingLeft: 10,
        paddingRight: 10

    },

    pinbutton: {
        width: 30,
        height: 50,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    },
    // pinbutton: {
    //     width: 20,
    //     height: 30,
    //     marginTop: 30,

    //     // width: 20,  //20,
    //     // height: 20,  //30,
    //     // justifyContent: 'space-between',
    //     // alignItems: 'flex-start',

    //     // marginRight: -25,
    //     // paddingLeft: 50,   // 30,
    //     // marginTop: 70,


    // },
    // unpinbutton: {
    //     width: 10,   //20,
    //     height: 20,      //30,
    //     justifyContent: 'space-between',
    //     alignItems: 'flex-start',
    //     //marginLeft: 10,  //10,
    //     marginRight: -15,
    //     paddingLeft: 50,   // 30,
    //     marginTop: 20,

    // },

    unpinbutton: {
        width: 25,
        height: 33,
        marginTop: 20,
        marginBottom: 0.5,

    },
    reminderbutton: {
        width: 35,
        height: 35,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginLeft: 25,     //10,
        marginRight: 20,
        paddingLeft: 20,  // 30,
        marginTop: 15
    },
    archivebutton: {
        width: 35,
        height: 35,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginLeft: 10,
        marginTop: 15,
        marginRight: 50,
        // marginRight: 50,
        // paddingLeft: 20,    //  30,
        // marginTop: 10
    },
    plusicon: {
        flexDirection: 'row',
        width: 40,
        height: 40,
        justifyContent: 'space-between',
        alignItems: "center",
        marginLeft: 10,
        paddingLeft: 30,
        marginTop: 10
    },

    dots: {
        flexDirection: "row",
        width: 40,
        height: 45,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginLeft: 380, //320,
        marginTop: 1,
        marginBottom: 10
    },

    //****************************************************ForgotPassword*************************************************************************************** */


    forgotpasswordform: {
        flex: 1,
        flexGrow:1,
        flexDirection:'column',
      //  paddingVertical: 60,
         alignItems: 'center',
        backgroundColor: 'white',
        // marginTop:30,     
        // marginBottom:30
    },

    forgotHeader: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'black',
        marginTop:70
        // paddingBottom: 10,
        // marginBottom: 40,  
        // borderBottomColor: 'rgb(23, 28, 27)',
        // borderBottomWidth: 1,
        //paddingLeft:10,
    },

    emailHeading: {
        marginTop:20,
        marginBottom:20,
        paddingLeft: 10,
        color: 'black',
        fontSize: 20,
        fontWeight: '800'
    },




    forgotinputbox: {

        fontSize: 18,
        width: '60%',
        backgroundColor: 'rgba(255,255,255,0.3)',
        alignItems: 'center',
        marginTop:20,
        // justifyContent: 'space-around',
        // paddingHorizontal: 10,
        // marginVertical: 10,
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 10,
        backgroundColor:  'rgb(30,144,255)',
        marginTop: 30,
        marginBottom:120,
        borderRadius: 40,
        marginLeft: 80,
        marginRight: 80,
    },

    buttontext: {

        fontSize: 26,
        color: 'white',
        fontWeight: "900",
        paddingRight: 0,
    },

//*****************************************Drawer Search ************************************************************************************************* */

searchContainer: {
  //  flex: 1,
    flexDirection:"row",
    padding:15

},

drawerArrow: {
    flexDirection: "row",
    marginTop: 10,
    //marginLeft: 10,
    width: 30,
    height: 40,

},

searchText: {
    color: 'gray',
    flexDirection: "row",
    alignItems:'center',
    justifyContent:'space-evenly',
    fontSize: 24,
    paddingLeft:20,
    paddingRight:20

},

/**************************************************************************Archive********************************************************************** */

topboxArchive: {
    flexDirection: "row",
    height: 50,
    width: "95%",
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "black",
    // height: 50,
    //  bakgroundColor: '#ffffff',
    //   flexDirection: "row",
    //    paddingLeft: 10, 
    //    alignItems: 'center',
    //     width:  390,
    //      marginLeft: 7, 
    //      borderRadius: 9,
    //       borderColor: "#C1C1C1",
    //        borderWidth: 2
},


ArchiveTopIcon: {
    width: 35, // '20%',
    height: 35,   // '35%',
    padding: 15,
    margin: 15,
   
},





icon:{
    width:20,
    height:20,
  },
//   drawericon: {

//     width: 38, //30,
//     height: 38,  //40,
//     justifyContent: 'space-between',
//     alignItems: "center",       //'flex-start',
//     marginLeft: 5,   //10,
//     paddingLeft: 30
//   },
  text: {
    marginLeft: 30,
    fontSize: 25,
    color: "black",

  },
//   searchicon: {
//     width: 35, //30,
//     height: 35,  //40,
//     justifyContent: 'space-between',
//     alignItems: "center",       //'flex-start',
//     //marginLeft: 60,   //10,
//     // paddingLeft: 30,
//     marginHorizontal: 80,
//     marginRight: 30


//   },

  /* gridicon: {
    // marginRight: 10,
    marginRight:40,
     marginTop: 5,
     width: 24, //30,
     height: 24,  //40,
     justifyContent: 'space-between',
     alignItems: "flex-end",       //'flex-start',
     // marginLeft: 20,  //15,   //10,
     // paddingLeft: 30,
     // marginHorizontal:60
   },
   listicon: {
     marginRight:0,
    //marginLeft: -11,
     marginTop: -1,
     width: 42, //30,
     height: 42,  //40,
     justifyContent: 'space-between',
     alignItems: "flex-end",       //'flex-start',
     // marginLeft: 20,   //15,   //10,
     // paddingLeft: 30,
     // marginHorizontal:60
   },
 
   */
//   image: {
//     width: 30, //30,
//     height: 30,  //40,
//     justifyContent: 'space-between',
//     alignItems: "center",       //'flex-start',
//     marginLeft: 15,   //10,
//     paddingLeft: 30,
//   },
//   gridicon: {
//     marginLeft: -10,
//     width: 24,
//     height: 24,
//     alignItems: 'flex-end',
//     justifyContent: 'flex-end'
//   },

//   listicon: {
//     marginLeft: -19,
//     width: 42,
//     height: 42,
//     alignItems: "flex-end",
//     justifyContent: 'flex-end'
//   }




})