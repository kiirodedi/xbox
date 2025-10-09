import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text, Pressable } from 'react-native';


export default function TelaJogos(props) {
  return (
    <View style={estilo.container}>
        <Text>Jogos</Text>
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