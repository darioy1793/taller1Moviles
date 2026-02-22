import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { estilosRegistro as styles } from '../Theme/apptheme';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { Home } from './Home';

interface FormRegistro{
  nombre:string;
  email:string;
  password:string;
  confirmPassword:string;
}

export const Registro = () => {
    const navigation = useNavigation();

    const [formRegistro, setformRegistro] = useState({
      nombre:'',
      email:'',
      password:'',
      confirmPassword:''
    }); 

    //funcion para capturar los valores del formulario
    const handleChangeValue = (name:string,value:string):void => {
      console.log(name," ",value);
      setformRegistro({
        ...formRegistro,
        [name]:value,
      });
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
          placeholder='Juen Perez' keyboardType='default'/>
        <Text style={styles.etiqueta}>Correo electrónico</Text>
        <TextInput style={styles.input} onChangeText={(value) => handleChangeValue('email', value)} placeholder='juan@gamil.com' keyboardType='email-address' />

        <Text style={styles.etiqueta}>Contraseña</Text>
        <TextInput style={styles.input} secureTextEntry onChangeText={(value) => handleChangeValue('password', value)}
        placeholder='Sgbrg1237%' keyboardType='default' />

        <Text style={styles.etiqueta}>Confirmar contraseña</Text>
        <TextInput style={styles.input} secureTextEntry onChangeText={(value) => handleChangeValue('confirmPassword', value)}
        placeholder='Sgbrg1237%' keyboardType='default' />

        <TouchableOpacity style={styles.boton}>
          <Text style={styles.textoBoton}>Registrarse</Text>
        </TouchableOpacity>

        <View style={styles.filaInicio}>
          <Text style={styles.textoInicio}>¿Ya tienes cuenta? </Text>
          <Text style={styles.enlaceInicio} onPress={() => {navigation.dispatch(CommonActions.navigate('Inicio Sesión'))}}>Inicia sesión</Text>
          
        </View>
      </View>
    </View>
  );
};
