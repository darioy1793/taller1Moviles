import { createStackNavigator } from '@react-navigation/stack';
import { InicioSesion } from '../src/InicioSesion';
import { Registro } from '../src/Registro';

const Stack = createStackNavigator();

export const StackNavigator = ()=> {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio Sesión" component={InicioSesion} />
      <Stack.Screen name="Registro" component={Registro} />
    </Stack.Navigator>
  )
}

