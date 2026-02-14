import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { estilosInicioSesion as styles } from './Theme/apptheme';

export const InicioSesion = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.contenedor}>
      <View style={styles.tarjeta}>
        <Image
          style={styles.imagen}
          source={{
            uri: 'https://tse4.mm.bing.net/th/id/OIP.l54ICAiwopa2RCt7J2URWwHaHa?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3',
          }}
        />

        <Text style={styles.titulo}>Inicio de sesión</Text>

        <Text style={styles.etiqueta}>Correo electrónico</Text>
        <TextInput style={styles.input} />

        <Text style={styles.etiqueta}>Contraseña</Text>
        <TextInput style={styles.input} secureTextEntry />

        <TouchableOpacity
          style={styles.boton} >
          <Text style={styles.textoBoton}>Iniciar sesión</Text>
        </TouchableOpacity>

        <View style={styles.filaRegistro}>
          <Text style={styles.textoRegistro}>¿No tienes cuenta? </Text>
          <Text style={styles.enlaceRegistro} onPress={() => navigation.navigate('Registro')}>Regístrate aquí </Text>
        </View>
      </View>
    </View>
  );
};
