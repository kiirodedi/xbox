import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text, Pressable } from 'react-native';

import xboxLogo from '../assets/img/xboxLogo.png';
import consoleIcon from '../assets/img/consoleIcon.png';
import jogosIcon from '../assets/img/jogosIcon.png'

export default function TelaInicial(props) {
  return (
    <View style={estilo.container}>
        <Image source={xboxLogo} style={estilo.xboxLogo} />
        <Text style={estilo.titulo}>Xbox</Text>
        <Text style={estilo.subTitulo}>Xbox é uma marca de consoles de jogos eletrônicos desenvolvida e patenteada pela Microsoft.</Text>

        <Pressable
          onPress={ () => { props.navigation.navigate("TelaConsole") } }
          style={estilo.btn}>
            <Image source={consoleIcon} style={estilo.iconBtn}/>
            <Text style={estilo.textBtn}>Consoles</Text>
        </Pressable>

        <Pressable
          onPress={ () => { props.navigation.navigate("TelaJogos") } }
          style={estilo.btn}>
            <Image source={jogosIcon} style={estilo.iconBtn}/>
            <Text style={estilo.textBtn}>Jogos</Text>
        </Pressable>

        <Pressable
          onPress={ () => { props.navigation.navigate("TelaNuvem") } }
          style={estilo.btn}>
            <Image source={consoleIcon} style={estilo.iconBtn}/>
            <Text style={estilo.textBtn}>Nuvem</Text>
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
    backgroundColor: '#00720b',
    width: 200,
    height: 100,
    borderRadius: 10,
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },

  textBtn: {
    color: '#fff',
    marginLeft: 8,
    fontSize: 14
  },

  iconBtn: {
    height: 50,
    width: 50,
    marginRight: 8
  }
})