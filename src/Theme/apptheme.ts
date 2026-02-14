import { StyleSheet } from 'react-native';

/* INICIO SESIÓN */
export const estilosInicioSesion = StyleSheet.create({
  contenedor: {
    flexGrow: 1,
    backgroundColor: '#F1FBF5',
    justifyContent: 'center',
    padding: 20,
  },

  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 20,
    borderWidth: 2,
    borderColor: '#6FCF97',
  },

  imagen: {
    width: 140,
    height: 140,
    alignSelf: 'center',
    marginBottom: 16,
    marginTop: 10,
    resizeMode: 'contain',
  },

  titulo: {
    fontSize: 28,
    fontWeight: '800',
    color: '#6FCF97',
    textAlign: 'center',
    marginBottom: 18,
  },

  etiqueta: {
    fontSize: 14,
    fontWeight: '700',
    color: '#222222',
    marginBottom: 8,
    marginTop: 12,
  },

  input: {
    borderWidth: 2,
    borderColor: '#6FCF97',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
    color: '#222222',
    backgroundColor: '#ffffff',
  },

  boton: {
    backgroundColor: '#6FCF97',
    borderRadius: 10,
    paddingVertical: 14,
    marginTop: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textoBoton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '800',
  },

  filaRegistro: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 18,
  },

  textoRegistro: {
    fontSize: 14,
    color: '#333333',
  },

  enlaceRegistro: {
    fontSize: 14,
    color: '#6FCF97',
    fontWeight: '800',
  },
});

/* ESTILOS - REGISTRO */
export const estilosRegistro = StyleSheet.create({
  contenedor: {
    flexGrow: 1,
    backgroundColor: '#F1FBF5',
    justifyContent: 'center',
    padding: 20,
  },

  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 20,
    borderWidth: 2,
    borderColor: '#6FCF97',
  },

  imagen: {
    width: '100%',
    height: 170,
    borderRadius: 12,
    marginTop: 8,
    marginBottom: 18,
    resizeMode: 'cover',
  },

  titulo: {
    fontSize: 28,
    fontWeight: '800',
    color: '#6FCF97',
    textAlign: 'center',
    marginBottom: 18,
  },

  etiqueta: {
    fontSize: 14,
    fontWeight: '700',
    color: '#222222',
    marginBottom: 8,
    marginTop: 12,
  },

  input: {
    borderWidth: 2,
    borderColor: '#6FCF97',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
    color: '#222222',
    backgroundColor: '#ffffff',
  },

  boton: {
    backgroundColor: '#6FCF97',
    borderRadius: 10,
    paddingVertical: 14,
    marginTop: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textoBoton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '800',
  },

  filaInicio: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 18,
  },

  textoInicio: {
    fontSize: 14,
    color: '#333333',
  },

  enlaceInicio: {
    fontSize: 14,
    color: '#6FCF97',
    fontWeight: '800',
  },
});
