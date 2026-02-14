import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { estilosRegistro as styles } from './Theme/apptheme';
import { useNavigation } from '@react-navigation/native';

export const Registro = () => {
    const navigation = useNavigation<any>();
  
  return (
    <View style={styles.contenedor}>
      <View style={styles.tarjeta}>
      

        <Text style={styles.titulo}>Registro</Text>

        <Text style={styles.etiqueta}>Nombre</Text>
        <TextInput style={styles.input} />

        <Text style={styles.etiqueta}>Correo electrónico</Text>
        <TextInput style={styles.input} />

        <Text style={styles.etiqueta}>Contraseña</Text>
        <TextInput style={styles.input} secureTextEntry />

        <Text style={styles.etiqueta}>Confirmar contraseña</Text>
        <TextInput style={styles.input} secureTextEntry />

        <TouchableOpacity style={styles.boton}>
          <Text style={styles.textoBoton}>Registrarse</Text>
        </TouchableOpacity>

        <View style={styles.filaInicio}>
          <Text style={styles.textoInicio}>¿Ya tienes cuenta? </Text>
          <Text style={styles.enlaceInicio} onPress={() => navigation.navigate('Inicio Sesión')}>Inicia sesión</Text>
        </View>
      </View>
    </View>
  );
};
