import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { View,Text,TextInput,TouchableOpacity, StyleSheet, Alert,ScrollView} from 'react-native';

interface Props extends StackScreenProps <any, any>{};

export const Registro = ({ navigation }: Props) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const manejarRegistro = async () => {

    setLoading(true);
    try {
      console.log({
        nombre,
        email,
        password,
      });
      
      Alert.alert('¡Éxito!', 'Registro completado correctamente', [
        {
          text: 'OK',
          onPress: () => {
            setNombre('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            navigation.goBack();
          },
        },
      ]);
    } catch (error) {
      Alert.alert('Error', 'Ocurrió un error al registrar');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.titulo}>Crear Cuenta</Text>
        
        <Text style={styles.etiqueta}>Nombre Completo</Text>
        <TextInput
          style={styles.input}
          placeholder="Juan Pérez"
          value={nombre}
          onChangeText={setNombre}
          placeholderTextColor="#ccc"
        />

        <Text style={styles.etiqueta}>Correo Electrónico</Text>
        <TextInput
          style={styles.input}
          placeholder="tu@email.com"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#ccc"
        />

        <Text style={styles.etiqueta}>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Mínimo 6 caracteres"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor="#ccc"
        />

        <Text style={styles.etiqueta}>Confirmar Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Repite tu contraseña"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          placeholderTextColor="#ccc"
        />

        <TouchableOpacity
          style={[styles.botonRegistro, loading && styles.botonDeshabilitado]}
          onPress={manejarRegistro}
          disabled={loading}
        >
          <Text style={styles.textoBoton}>
            {loading ? 'Registrando...' : 'Registrarse'}
          </Text>
        </TouchableOpacity>

        <View style={styles.contenedorLogin}>
          <Text style={styles.textoLogin}>¿Ya tienes cuenta? </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.enlaceLogin}>Inicia sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    padding: 20,
  },
  formContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
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
  botonRegistro: {
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
  contenedorLogin: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  textoLogin: {
    fontSize: 14,
    color: '#666',
  },
  enlaceLogin: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '600',
  },
});
 