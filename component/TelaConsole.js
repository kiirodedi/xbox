import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image, ScrollView} from 'react-native';

// Certifique-se de que os caminhos para as imagens estão corretos
import consoleSerieS from '../assets/img/consoleSerieS.png';
import consoleIcon from '../assets/img/consoleIcon.png'; // Assumi que consoleIcon é o Series X

export default function TelaConsole(props) {
  return (
    <View style={estilo.container}>
      <ScrollView contentContainerStyle={estilo.scrollContent}>
        
        <Image source={consoleSerieS} style={estilo.console} />
        <Text style={estilo.titulo}>XBOX SERIES S</Text>
        <Text style={estilo.subtitulo}>Desempenho de última geração no menor Xbox de todos os tempos.</Text>
        <Text style={estilo.texto}>O Series S é pra quem busca jogos de nova geração gastando pouco. é o console mais barato da nova geração. Ele é o equilibrio entre gráfico e performance.</Text>

        <Image source={consoleIcon} style={estilo.console}/>
        <Text style={estilo.titulo}>XBOX SERIES X</Text>
        <Text style={estilo.subtitulo}>O Xbox mais rápido e poderoso de todos os tempos.</Text>
        <Text style={estilo.texto}>O Series X é pra quem quer poder absoluto. O console mais poderoso do mercado, excelência em gráficos e performance.</Text>
      </ScrollView>
      <StatusBar style="auto" /> 
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#464646ff',
  },

  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },

  console: {
    height: 300,
    width: 300,
    marginTop: 20,
  },

  titulo: {
    color: '#077d07',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },

  subtitulo: {
    color: '#fff',
    maxWidth: 380,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 8
  },

  texto: {
    color: '#fff',
    fontSize: 15,
    maxWidth: 400,
    textAlign: 'center',
    marginBottom: 40
  }
});