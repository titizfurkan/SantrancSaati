import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'pink',
        justifyContent: "center",
        alignContent: "center"
    },
    toolbar:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'darkgrey',
        justifyContent: "space-evenly",
        alignContent: "stretch",
        alignItems: "center"
    },
    toolbarImage:{
        width: 30,
        height: 30
    },
    toolbarItem:{
        transform: [{ rotate: '90deg' }],
        color: 'blue',
        fontSize: 15,
        fontWeight: 'bold',
    },
    configureModal:{
        flex:1,
        flexDirection: 'column',
        backgroundColor: 'darkgray',
        justifyContent: "space-evenly",
        alignContent: "stretch",
        alignItems: "center",
        textAlign: 'center'
    },
    modalText:{
        height:30,
        fontSize:20,
        fontWeight: 'bold',
        color:'white'
    },
    chessClockImage:{
        width: 150,
        height: 100
    },
    modalInputView:{
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        textAlign: 'center',
    },
    modalInputText:{
        fontSize:25,
        fontWeight: 'bold',
        color:'black'
    },
    mainClockContainer: {
        flex: 8,
        flexDirection: 'column',
        backgroundColor: 'darkgrey',
        justifyContent: "center",
        alignItems: "stretch"
    },
    whiteClockContainer: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: "center",
        alignItems: "center"
    },
    whiteClock: {
        color: 'black',
        textAlignVertical: 'center',
        fontSize: 100,
        transform: [{ rotate: '90deg' }]
    },
    blackClockContainer: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: "center",
        alignItems: "center"
    },
    blackClock: {
        color: 'white',
        textAlignVertical: 'center',
        fontSize: 100,
        transform: [{ rotate: '90deg' }]
    },
})