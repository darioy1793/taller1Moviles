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
    borderColor: '#0b368b',
  },

  imagen: {
    width: 140,
    height: 140,
    alignSelf: 'center',
    marginBottom: 16,
    marginTop: 10,
    resizeMode: 'contain',
    borderRadius: 70,
  },

  titulo: {
    fontSize: 28,
    fontWeight: '800',
    color: '#2e1a6b',
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
    borderColor: '#243186',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
    color: '#222222',
    backgroundColor: '#ffffff',
  },

  boton: {
    backgroundColor: '#1e2180',
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
    color: '#2d1299',
    fontWeight: '800',
  },
  enlaceInicio: {
    fontSize: 14,
    color: '#371393',
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
    borderColor: '#0b368b',
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
    color: '#2e1a6b',
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
    borderColor: '#243186',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
    color: '#222222',
    backgroundColor: '#ffffff',
  },

  boton: {
    backgroundColor: '#1e2180',
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
    color: '#2d1299',
    fontWeight: '800',
  },
   imagen2: {
    width: 140,
    height: 140,
    alignSelf: 'center',
    marginBottom: 16,
    marginTop: 10,
    resizeMode: 'contain',
    borderRadius: 70,
   },
   imagen3: {
    width: '90%',
    height: '50%',
    alignSelf: 'center',
    resizeMode: 'contain',
   },
    contenedor1: {
    flex: 1,
    backgroundColor: '#0d132a',
    justifyContent: 'center',
   
  },
  titulo1: {
    fontSize: 58,
    fontWeight: '800',
    color: '#b4bdb8',
    textAlign: 'center',
   
  }, 
  filaInicio1: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 18,
    backgroundColor: '#e2e3ebcd',
    padding: 10,
    borderRadius: 120,
    width: '50%',
    alignSelf: 'center',
  },
  enlaceInicio1: {
    fontSize: 18,
    color: '#0c1fad',
    fontWeight: '800',
  },
 
});
export  const stylesGlobal = StyleSheet.create({
 iconPassword:{
    position:'absolute',
        bottom:180,
        right:30
  },
  iconPasswordRegistro:{
    position:'absolute',
        bottom:145,
        right:30
  },
  home:{
    backgroundColor:'#0c1fad',
    textAlign:'center',
    justifyContent:'center',
    alignSelf:'center',
    color:'#f4f4f7',
    fontSize:18,
    width:80,
    height:30,
    borderRadius:10,
    marginTop:10,
    
  },
  containerCards:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:2,
    borderColor:'#0c1fad',
    borderRadius:10,
    backgroundColor:'#ffffff',
    padding:20,
    margin:5,
    shadowColor:'#000',
    shadowOpacity:1,
    shadowRadius:3.84,
    elevation:5,
    
  },
  titleCard:{
    fontSize:18,
    fontWeight:'800',
    color:'#0c1fad',
  },
  imageCard:{
    width:90,
    height:90, 
  },
  iconCard:{
    position:'absolute',
    bottom:10,
    right:20,
  },
  containerModal:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgba(0,0,0,0.6)',
    padding:10,
  },
  bodyModal:{
    backgroundColor:'#f8f8f8',
    borderRadius:20,
    padding:24,
    width:'85%',
    maxWidth:400,
    alignItems:'center',
    shadowColor:'#28186e',
    shadowOpacity:2,
    shadowRadius:10,
    elevation:18,
  },
  headerModal:{
    flexDirection:'row',
    width:'100%',
    borderBottomColor:'#121011',
    borderBottomWidth:2,
    paddingBottom:10,
    justifyContent:'space-between',
    alignItems:'center',
  },
  titleModal:{
    fontSize:15,
    fontWeight:'bold',
    color:'#0c1fad',
  },
  imageModal:{
    width:180,
    height:180,
    marginVertical:16,
    borderRadius:8,
  },
  containerQuantity:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:10,
  },
  buttonQuantity:{
    backgroundColor:'#0c1fad',
    width:40,
    height:40,
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center',
    margin:15 
  },
  buttonQuantityText:{
        color:'#ffffff',
        fontSize:18,
        fontWeight:'bold'
    },
    buttonAgregar:{
      backgroundColor:'#0c1fad',
        borderRadius:25,
        minWidth:150,
        paddingVertical:14,
        paddingHorizontal:20,
        alignItems:'center',
        justifyContent:'center',
        marginTop:12,
        elevation:2,
    },
    textTotalPrice:{
        fontSize:16,
        fontWeight:'bold',
        marginTop:5,
        padding:10,
        color:'#17175a'
    },
  iconProduct:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:30,
        paddingTop:20
    },
    textIconCart:{
        backgroundColor:'red',
        paddingHorizontal:5,
        borderRadius:50,
        color:'#fff',
        fontSize:12,
        fontWeight:'bold',
        position:'absolute',    
        top:-10,
        right:-10,
        zIndex:1
    },
    
    headerTabla:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:8,
        borderBottomWidth:1,
        borderColor:'#ccc',
    },
    headerDescription:{
        flexDirection:'row',
        alignItems:'center',
    },
        
    headerTextTable:{
        fontSize:20,
        fontWeight:'bold',
    },
    containerTotalPay:{
        alignItems:'flex-end',
        marginVertical:10
    },
    rowItem:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:6,
        borderBottomWidth:1,
        borderColor:'#eee',
    },
    textTotalPay:{
        fontSize:18,
        fontWeight:'bold',
        color:'green'
    },
      button:{
        backgroundColor:'#0c1fad',
        paddingVertical:10,
        fontWeight:'bold',
        borderRadius:20,
        width:100
    },
    buttonText:{
         textAlign:'center',
        justifyContent:'center',
        fontSize:20,
        color:'#ffffff',
        fontWeight:'700',
    },
    textAgregar:{
      color:'#ffffff',
      fontSize:15,
      
    },
    productos:{
      color:'#fcf8f8',
      fontSize:25,
      alignItems:'center',
      justifyContent:'center',

    }

  
});
