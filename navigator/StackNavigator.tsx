import { createStackNavigator } from '@react-navigation/stack';
import { InicioSesion } from '../src/screens/InicioSesion';
import { Registro } from '../src/screens/Registro';
import { Home } from '../src/screens/Home';
import { Productos } from '../src/screens/Product/Productos';
import { useState } from 'react';

export interface User{
  id:number,
  name:string,
  email:string,
  password:string
}

const Stack = createStackNavigator();

export const StackNavigator = ()=> {

    //datos de prueba
    const users: User[] = [
      {id: 1, name:'viviana Flores', email:'vflores@gmail.com', password:'123456'},
      {id: 2, name:'Dario Almachi', email:'dalmachi@gmail.com', password:'123456'},
    ]
    //hook usestate: permite gestionar la lista de usuarios registrados
    const [userList, setUserList] = useState<User[]>(users);
    //funcion para agregar un nuevo usuario a la lista de usuarios userList
    const handleAddUser = (user: User): void => {
      setUserList([...userList, user]);
    }


  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" options={{headerShown:false}} component={Home} />
      <Stack.Screen name="Inicio Sesión"options={{headerShown:false}} children={()=><InicioSesion users={userList}/>} />
      <Stack.Screen name="Registro" options={{headerShown:false}} children={()=> <Registro users={userList} handleAddUser={handleAddUser}/>} />
      <Stack.Screen name="Productos"  options={{headerShown:false}}  component={Productos} />
    </Stack.Navigator>
  )
}

