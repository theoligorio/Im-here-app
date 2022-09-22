import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
      backgroundColor: '#1F1E25',
      borderRadius: 4,
      alignItems: 'center',
      marginBottom: 10
    },
    name: {
        flex: 1,
        fontSize: 16,
        color: '#fff',
        marginLeft: 16
    },
    button: {
        height: 56,
        width: 56,
        backgroundColor: '#E23C44',
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
  });