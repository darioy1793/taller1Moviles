import { createStackNavigator } from '@react-navigation/stack';
import { InicioSesion } from '../src/screens/InicioSesion';
import { Registro } from '../src/screens/Registro';
import { Home } from '../src/screens/Home';

const Stack = createStackNavigator();

export const StackNavigator = ()=> {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Inicio Sesión" component={InicioSesion} />
      <Stack.Screen name="Registro" component={Registro} />
    </Stack.Navigator>
  )
}

