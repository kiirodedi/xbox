import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicial from './component/TelaInicial.js';
import TelaConsole from './component/TelaConsole.js';
import TelaJogos from './component/TelaJogos.js';
import TelaNuvem from './component/TelaNuvem.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={ TelaInicial } />
        <Stack.Screen name="TelaConsole" component={ TelaConsole } />
        <Stack.Screen name="Jogos" component={ TelaJogos } />
        <Stack.Screen name="Nuvem" component={ TelaNuvem } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}