import { Text, View, TouchableOpacity } from 'react-native'
import { styles } from './styles'; 

type Props = {
    name: string;
}

export function Participant ({ name }: Props) {
  return (
    <View style={styles.container}>
        <Text style={styles.name}>
            {/* Nome do participante */}
            {name}
        </Text>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
                -
            </Text>
        </TouchableOpacity>
    </View>
  );
}