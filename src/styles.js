import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    constainer: {
        margin: 20,
        justifyContent: 'center',
        display: 'flex'
    },
    todoContainer: {
        height: 45,
        borderWidth: 0.5,
        borderRadius: 5,
        backgroundColor: '#dae1e7',
        padding: 10,
        fontSize: 18,
        marginBottom: 10
    },
    button: {
        backgroundColor: '#001370',
        padding: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginRight: 10
    },
    todoList: {
        color: 'white',
        fontSize: 20
    },
})