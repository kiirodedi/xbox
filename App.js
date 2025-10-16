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
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#077d07' },
          headerTintColor: '#fff'
        }}>
        <Stack.Screen name="Início" component={ TelaInicial } />
        <Stack.Screen name="TelaConsole" component={ TelaConsole } />
        <Stack.Screen name="TelaJogos" component={ TelaJogos } />
        <Stack.Screen name="TelaNuvem" component={ TelaNuvem } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}