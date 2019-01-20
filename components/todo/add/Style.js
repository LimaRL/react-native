import { StyleSheet } from 'react-native'

export default style = StyleSheet.create({
    container:{
        alignItems: "center",
        flexDirection: "row",
        padding: 15,
        backgroundColor: "#24292e",
    },
    input: {
        height: 36,
        flex: 1,

        paddingLeft: 10, 
        paddingRight: 10, 
        marginRight: 5,

        borderColor: '#f2f2f2', 
        borderWidth: 1,
        borderRadius: 3,
        
        backgroundColor: "#fff",
    },
    btn: {
        flexShrink: 0,
    }

})