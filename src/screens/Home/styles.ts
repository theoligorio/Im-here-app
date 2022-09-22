import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
      padding: 24
    },
    eventName: {
        color: '#FDFCFE',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 50,
        fontFamily: 'Roboto'
    },
    eventDate: {
        color: '#6B6B6B',
        fontSize: 16,
        fontFamily: 'Roboto'
    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: "#1F1E25",
        borderRadius: 4,
        color: '#FFF',
        fontSize: 14,
        padding: 16,
    },
    button: {
        height: 56,
        width: 56,
        backgroundColor: '#31CF67',
        borderRadius: 4,
        marginLeft: 7,
        // alinhamento vertical
        justifyContent: 'center',
        // alinhamento horizontal
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 24
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 34
    }
  });