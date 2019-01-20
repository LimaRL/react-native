import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    container:{
        height: 40,
        alignItems: "center",
        flexDirection: "row",

        marginBottom: 10,
        padding: 5,
        borderRadius: 3,
        
        backgroundColor: "#24292e",

        shadowColor: '#000000',
        shadowOffset: { 
            width: 15, height: 15 
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,

        elevation: 5.5,
    },
    item: {
        color: "#fff",
        fontWeight: "bold",
        padding: 15
    }

})