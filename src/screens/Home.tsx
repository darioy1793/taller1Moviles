import React from 'react'
import { Image, Text, View } from 'react-native'
import { estilosRegistro as styles } from '../Theme/apptheme';
import { CommonActions, useNavigation } from '@react-navigation/native';

export const Home = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.contenedor1}>
        <Text style={styles.titulo1}>Bienvenido</Text>
        <Image
          style={styles.imagen3}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBJVkVLoBiHJ4n9w4BOTG-hPVi5LfOQBGBmg&s',
          }} />
          <View style={styles.filaInicio1}>
             <Text style={styles.enlaceInicio1} onPress={() => {navigation.dispatch(CommonActions.navigate('Inicio Sesión'))}}>Inicia sesión</Text>
        </View>
        <View style={styles.filaInicio1}>
             <Text style={styles.enlaceInicio1} onPress={() => {navigation.dispatch(CommonActions.navigate('Registro'))}}>Registrarse</Text>
        </View>
    </View>
  )
}
