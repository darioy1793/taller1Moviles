import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { View,Text,TextInput,TouchableOpacity,StyleSheet,Alert,ScrollView,} from 'react-native';

interface Props extends StackScreenProps<any, any> {};

export const InicioSesion = ({ navigation }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const Inicio = async () => {
    setLoading(true);
    try {
      console.log({
        email,
        password,
      });

      Alert.alert('¡Bienvenido!', `Iniciaste sesión como ${email}`, [
        {
          text: 'OK',
          onPress: () => {
            // Limpiar formulario
            setEmail('');
            setPassword('');
          },
        },
      ]);
    } catch (error) {
      Alert.alert('Error', 'Correo o contraseña inválidos');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.titulo}>Bienvenido</Text>
        <Text style={styles.etiqueta}>Correo Electrónico</Text>
        <TextInput
          style={styles.input}
          placeholder="juan@email.com"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#ccc"
          editable={!loading}
        />

        <Text style={styles.etiqueta}>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Tu contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor="#ccc"
          editable={!loading}
        />

        <TouchableOpacity style={styles.enlaceOlvide}>
          <Text style={styles.textoEnlace}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botonInicio, loading && styles.botonDeshabilitado]}
          onPress={Inicio}
          disabled={loading}
        >
          <Text style={styles.textoBoton}>
            {'Iniciar Sesión'}
          </Text>
        </TouchableOpacity>

        <View style={styles.divisor}>
          <View style={styles.linea} />
          <Text style={styles.textoOpo}>O</Text>
          <View style={styles.linea} />
        </View>

        <TouchableOpacity style={styles.botonRegistro}>
          <Text style={styles.textoBotonRegistro}>Continuar con Google</Text>
        </TouchableOpacity>

        <View style={styles.contenedorRegistro}>
          <Text style={styles.textoRegistro}>¿No tienes cuenta? </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Registro')}
          >
            <Text style={styles.enlaceRegistro}>Regístrate aquí</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    padding: 20,
  },
  formContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    elevation: 3,
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 14,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  etiqueta: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
    marginTop: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#fafafa',
  },
  enlaceOlvide: {
    marginTop: 12,
    alignItems: 'flex-end',
  },
  textoEnlace: {
    fontSize: 12,
    color: '#007AFF',
    fontWeight: '500',
  },
  botonInicio: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    padding: 15,
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botonDeshabilitado: {
    backgroundColor: '#ccc',
  },
  textoBoton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  divisor: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 25,
  },
  linea: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  textoOpo: {
    marginHorizontal: 10,
    color: '#999',
    fontSize: 14,
  },
  botonRegistro: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  textoBotonRegistro: {
    color: '#333',
    fontSize: 16,
    fontWeight: '600',
  },
  contenedorRegistro: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  textoRegistro: {
    fontSize: 14,
    color: '#666',
  },
  enlaceRegistro: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '600',
  },
});
