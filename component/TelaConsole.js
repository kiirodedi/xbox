import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text} from 'react-native';

export default function TelaConsole(props) {
  return (
    <View style={estilo.container}>
        <Text>Console</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#464646ff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})