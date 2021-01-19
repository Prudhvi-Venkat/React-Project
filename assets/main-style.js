import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    lists: {
        flex: 1,
        backgroundColor: '#b2bec3',
        // backgroundColor: '#d63031',
        flexDirection: 'row',
        padding: 20,
        marginTop: 20,
        borderRadius: 10,
        marginHorizontal: 20,

    },
    img: {
        // flex: 1.5,
        backgroundColor: '#fff',
        marginRight: 40,
        padding: 10,
        borderRadius: 5
    },
    listdata: {
        flex: 4.5,
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 40,
        marginTop: 20,
        backgroundColor: '#d63031', 
    }
});

export default styles;