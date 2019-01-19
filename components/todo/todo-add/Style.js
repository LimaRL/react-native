import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    container:{
        alignItems: "center",
        flexDirection: "row",
        padding: 15,
        backgroundColor: "#c2c2c2"
    },
    input: {
        height: 40,
        flex: 1,

        paddingLeft: 10, 
        paddingRight: 10, 
        marginRight: 5,

        borderColor: 'gray', 
        borderWidth: 1,
        borderRadius: 5,
        
        backgroundColor: "#fff",
    },
    button: {
        height: 40,
        flexShrink: 0
    }

})