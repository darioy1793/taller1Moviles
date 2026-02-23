import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { estilosInicioSesion as styles  } from '../Theme/apptheme';


interface FormLogin{
  email:string;
  password:string;
}

export const InicioSesion = () => {
  const navigation = useNavigation();
  //hook usestate
  const [formlogin, setformlogin] = useState<FormLogin>({
    email:'',
    password:'',

  });

  //funcion para capturar los valores del formulario
  const handleChangeValue = (name:string,value:string):void => {
    console.log(name," ",value);
    setformlogin({
      ...formlogin,
      [name]:value,
    });

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
        <TextInput style={styles.input} secureTextEntry onChangeText={(value) => handleChangeValue('password', value)}
        placeholder='Password'keyboardType='default' />

        <TouchableOpacity
          style={styles.boton} >
          <Text style={styles.textoBoton}>Iniciar sesión</Text>
        </TouchableOpacity>

        <View style={styles.filaRegistro}>
          <Text style={styles.textoRegistro}>¿No tienes cuenta? </Text>
          <Text style={styles.enlaceRegistro} onPress={() => {navigation.dispatch(CommonActions.navigate('Registro'))}}>Regístrate aquí </Text>
        </View>
    
      </View>
    </View>
  );
};
