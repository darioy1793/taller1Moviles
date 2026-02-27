import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { estilosRegistro as styles, stylesGlobal } from '../Theme/apptheme';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { Home } from './Home';
import Icon from '@expo/vector-icons/MaterialIcons';
import { User } from '../../navigator/StackNavigator';

interface FormRegistro{
  nombre:string;
  email:string;
  password:string;
  confirmPassword:string;
}

interface Props{
  //definir las propiedades del objeto user
  users: User[];
  handleAddUser : (user: User) => void;
}

export const Registro = ({users, handleAddUser }:Props) => {
    const navigation = useNavigation();

    const [formRegistro, setformRegistro] = useState({
      nombre:'',
      email:'',
      password:'',
      confirmPassword:''
    }); 

    const [hiddenPassword, sethiddenPassword] = useState<boolean>(true);

    //funcion para capturar los valores del formulario
    const handleChangeValue = (name:string,value:string):void => {
      //console.log(name," ",value);
      setformRegistro({
        ...formRegistro,
        [name]:value,
      });
    }

    //funcion para verificar si el usuario ya existe en la lista de usuarios registrados
    const verifyUser = ():User => {
      const existUser = users.filter(user => user.email == formRegistro.email)[0];
      return existUser;
    }
    //funcion para generrar un id unico para cada usuario registrado
    const getIdUser = ():number => {
      const getId = users.length + 1;
      return getId;
    }
    const handleRegister = () => {
      //funcion para validar el formulario todos los campos deben estar llenos y las contraseñas deben coincidir
      if(formRegistro.nombre === '' || formRegistro.email === '' || formRegistro.password === '' || formRegistro.confirmPassword === ''){
         Alert.alert('Error','Todos los campos son obligatorios');
        return;
      } if(formRegistro.password !== formRegistro.confirmPassword){
        Alert.alert('Error','Las contraseñas no coinciden');
        return;
      }
      //valoidar campo inicio de sesion
      if(verifyUser()){
        Alert.alert('Error','El usuario ya existe');
        return;
      }
      //Registrar el nuevo usuario
      const newUser: User = {
        id: getIdUser(),
        name: formRegistro.nombre,
        email: formRegistro.email,
        password: formRegistro.password
      }
      handleAddUser(newUser);
      Alert.alert('Registro exitoso','Bienvenido a PHONE SHOP');
      navigation.dispatch(CommonActions.navigate('Inicio Sesión'));
       console.log(formRegistro);
    }
    
  return (
    <View style={styles.contenedor}>
      <View style={styles.tarjeta}>
        <Image
                  style={styles.imagen2}
                  source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBJVkVLoBiHJ4n9w4BOTG-hPVi5LfOQBGBmg&s',
                  }}
                />

        <Text style={styles.titulo}>Registro</Text>

        <Text style={styles.etiqueta}>Nombre</Text>
        <TextInput style={styles.input} onChangeText={(value) => handleChangeValue('nombre', value)} 
          placeholder='Dario Almachi' keyboardType='default'/>
        <Text style={styles.etiqueta}>Correo electrónico</Text>
        <TextInput style={styles.input} onChangeText={(value) => handleChangeValue('email', value)} placeholder='email@gmail.com' keyboardType='email-address' />

        <Text style={styles.etiqueta}>Contraseña</Text>
        <TextInput style={styles.input} secureTextEntry={hiddenPassword} onChangeText={(value) => handleChangeValue('password', value)}
        placeholder='Password' keyboardType='default' />
        
        <Text style={styles.etiqueta}>Confirmar contraseña</Text>
        <TextInput style={styles.input} secureTextEntry={hiddenPassword} onChangeText={(value) => handleChangeValue('confirmPassword', value)}
        placeholder='Password' keyboardType='default' />
        <TouchableOpacity style={styles.boton} >
          <Text style={styles.textoBoton} onPress={handleRegister}>Registrarse</Text>
        </TouchableOpacity>
          <Icon style={stylesGlobal.iconPasswordRegistro} name={hiddenPassword?'visibility-off' : 'visibility'} color={'#0c1fad'} size={20} onPress={()=>sethiddenPassword(!hiddenPassword)}/>
        <View style={styles.filaInicio}>
          <Text style={styles.textoInicio}>¿Ya tienes cuenta? </Text>
          <Text style={styles.enlaceInicio} onPress={() => {navigation.dispatch(CommonActions.navigate('Inicio Sesión'))}}>Inicia sesión</Text>
          
        </View>
      </View>
    </View>
  );
};
