import React, { use, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { estilosInicioSesion as styles, stylesGlobal  } from '../Theme/apptheme';
import Icon from '@expo/vector-icons/MaterialIcons';
import { Home } from './Home';
import { User } from '../../navigator/StackNavigator';


interface FormLogin{
  email:string;
  password:string;
}
//interface define las propiedades del objeto user
interface Props{
  users: User[];
}


export const InicioSesion = ({users}:Props) => {
  const navigation = useNavigation();


  //hook usestate
  const [formlogin, setformlogin] = useState<FormLogin>({
    email:'',
    password:'',

  });

   //hook useState: permite gestionar el estado de la contraseña
   const [hiddenPassword, sethiddenPassword] = useState<boolean>(true);

  //funcion para capturar los valores del formulario
  const handleChangeValue = (name:string,value:string):void => {
   //console.log(name," ",value);
    setformlogin({...formlogin,[name]:value, });
  }
  const verifyUser = () =>{
    const existUser = users.filter(user => user.email == formlogin.email && user.password == formlogin.password)[0];
    return existUser;
  }
  const hadleSingIn =():void => {
    if (formlogin.email == '' || formlogin.password == ''){
      //mensaje alerta
      Alert.alert('Error','Campos Incompletos')
      return;
    }
    if(!verifyUser()){
      Alert.alert('Error','Usuario y/o Contraseña incorrectos')
      return;
    }
    //console.log(formlogin);
    //CARGAR PANTALLA DE PRODUCTOS
    navigation.dispatch(CommonActions.navigate('Productos'));
  }

  return (
    <View style={styles.contenedor}>
      <View style={styles.tarjeta}>
        <Image
          style={styles.imagen}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBJVkVLoBiHJ4n9w4BOTG-hPVi5LfOQBGBmg&s',
          }}
        />

        <Text style={styles.titulo}>Inicio de sesión</Text>

        <Text style={styles.etiqueta}>Correo electrónico</Text>
        <TextInput style={styles.input} onChangeText={(value) => handleChangeValue('email', value)}
        placeholder='email@gmail.com' keyboardType='email-address' />

        <Text style={styles.etiqueta}>Contraseña</Text>
        <TextInput style={styles.input} secureTextEntry ={hiddenPassword} onChangeText={(value) => handleChangeValue('password', value)}
        placeholder='Password'keyboardType='default' />
        <Icon style={stylesGlobal.iconPassword} name={hiddenPassword?'visibility-off' : 'visibility'} color={'#0c1fad'} size={20} onPress={()=>sethiddenPassword(!hiddenPassword)}/>
        <TouchableOpacity
          style={styles.boton} onPress={hadleSingIn} >
          <Text style={styles.textoBoton}>Iniciar sesión</Text>
        </TouchableOpacity>

        <View style={styles.filaRegistro}>
          <Text style={styles.textoRegistro}>¿No tienes cuenta? </Text>
          <Text style={styles.enlaceRegistro} onPress={() => {navigation.dispatch(CommonActions.navigate('Registro'))}}>Regístrate aquí </Text>
        </View>
         <Text style={stylesGlobal.home} onPress={() => {navigation.dispatch(CommonActions.navigate('Home'))}}>Home </Text>
    
      </View>
    </View>
  );
};
