import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text, Pressable } from 'react-native';

import img_xboxLogo from '../assets/img/xboxLogo.png';


export default function TelaInicial(props) {
  return (
    <View style={estilo.container}>
        <Image source={img_xboxLogo} style={estilo.xboxLogo} />
        <Text style={estilo.titulo}>Xbox</Text>
        <Text style={estilo.subTitulo}>Xbox é uma marca de consoles de jogos eletrônicos desenvolvida e patenteada pela Microsoft.</Text>

        <Pressable
          onPress={ () => { props.navigation.navigate("TelaConsole") } }
          style={estilo.btn}>
            <Text style={estilo.textBtn}>Consoles</Text>
        </Pressable>

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
  },

  xboxLogo: {
    height: 80,
    width: 80,
    marginTop: 30
  },

  titulo: {
    color: '#077d07',
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 8,
  },

  subTitulo: {
    color: '#fff',
    fontSize: 13,
    textAlign: 'center'
  },

  btn: {
    backgroundColor: '#ffbb62b2',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 10,
  },

    textBtn: {
    fontWeight: 'bold',
  }
})