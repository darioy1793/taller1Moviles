import React, { useState } from 'react'
import { FlatList, Text, View, Alert } from 'react-native'
import { CardProduct } from './components/CardProduct';
import Icon from '@expo/vector-icons/MaterialIcons';
import { stylesGlobal } from '../../Theme/apptheme';
import { ModalCart } from './components/ModalCart';

export interface Product {
  id: number;
  name: string;
  price: number;
  stock:number;
  description: string;
  image: string;
}
export interface Cart{
  id:number;
  name:string;
  price:number;
  quantity:number;
  total:number;
}

export const Productos = () => {
  const products: Product[] = [
     
    { id: 1, name: 'Iphone 14 Pro', price: 470, stock:10, description: 'Iphone 14 Pro con 128GB de almacenamiento', image: 'https://ecuapple.ec/wp-content/uploads/2022/09/Mesa-de-trabajo-2-1.jpg' },
    { id: 2, name: 'Iphone 15 Pro', price: 680, stock:10, description: 'Iphone 15 Pro con 256GB de almacenamiento', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWNOtr3nOS5w1_7-lnQeE1wa41yPS_75RXXw&s' },
    { id: 3, name: 'Iphone 16 Pro', price: 999, stock:10, description: 'Iphone 16 Pro con 512GB de almacenamiento', image: 'https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-finish-lineup-240909_big.jpg.large.jpg' },
    { id: 4, name: 'Iphone 17 Pro', price: 1299,stock:10,  description: 'Iphone 17 Pro con 1TB de almacenamiento', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX6IAd-gUQrtuFAtwVhP5BcfTzi0Glq5tJNA&s' },
    { id: 5, name: 'Samsung Z Flip', price: 899,stock:10,  description: 'Samsung Z Flip con 256GB de almacenamiento', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIMsPVAneS3RAgy83drsY8IGMa4LhgI3PnvQ&s' },
    { id: 6, name: 'Samsung S25 Ultra', price: 999, stock:10, description: 'Samsung Galaxy S25 con 512GB de almacenamiento', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5YcLetIWsHFfjOa40XtatAEAjJQqVBo320g&s' },
    { id: 7, name: 'Samsung S26 Ultra', price: 1099, stock:10,  description: 'Samsung Galaxy S26 con 1TB de almacenamiento', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5efRcWFeJKT5DxmfvJT_gzLhyu9MQlLIATw&s' },
    { id: 8, name: 'xiaomi 14 ultra', price: 499,stock:10,  description: 'xiaomi 14 ultra con 128GB de almacenamiento', image: 'https://media.spdigital.cl/thumbnails/products/u8tmp31w_29e5c1bc_thumbnail_4096.jpg' },
    { id: 9, name: 'Google Pixel 8', price: 599,stock:10,  description: 'Google Pixel 8 con 256GB de almacenamiento', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIebXV8FX2QjsZ-XaMBOEUkj4wRrOwtH2EDw&s' },
    { id: 10, name: 'Xiaomi 15T Pro ', price: 699,stock:10, description: 'Xiaomi 15t Pro con 512GB de almacenamiento', image: 'https://mundotek.com.ec/wp-content/uploads/2025/10/xiaomi-15t-pro-mundotek.webp' },
  ]

  //permite gestionar la informacion de los productos
  const [productState, setproductState] = useState<Product[]>(products);

  const [cart, setcart] = useState<Cart[]>([]);//arreglo del carrito
  //hook estado del modal
  const [showModal, setshowModal] = useState<boolean>(false);
  //actualizar el estado del modal
  const hiddenModal = (): void => {
      //verificar si el carrito está vacío al intentar abrir
      if(cart.length === 0 && !showModal){
        Alert.alert(
          'Carrito Vacío',
          'Por favor selecciona productos antes de abrir el carrito',
          [{text: 'OK'}]
        );
        return;
      }
      setshowModal(!showModal);
  }

  //funcion contralar el stock de los productos
  const changeStockProduct = (id:number, quantity:number):void =>{
    const updateProduct = productState.map(item => item.id == id
      ?{...item, stock: item.stock - quantity} : item);
      //modificar el arreglo del producto
      setproductState(updateProduct);
      //llamar a la funcion para añadir productos
      addProduct(id,quantity);
  }
  //funcion para agreagar productosal carrito
  const addProduct = (id: number, quantity: number):void => {
    const product = productState.find(product => product.id == id);
    //validar si no existe el producto
    if(!product){
      return;
    }
    
    //verificar si el producto ya existe en el carrito
    const existingProduct = cart.find(item => item.id === id);
    
    if(existingProduct){
      //si existe, actualizar la cantidad y el total
      const updatedCart = cart.map(item => 
        item.id === id 
          ? {...item, quantity: item.quantity + quantity, total: product.price * (item.quantity + quantity)}
          : item
      );
      setcart(updatedCart);
    } else {
      //crear el objeto del producto
      const newCart:Cart = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity,
        total: product.price * quantity,
      }
      //añadir al arreglo del carrito
      setcart([...cart,newCart]);
    }
    console.log(cart);
  }

  //funcion para reiniciar el carrito y restaurar el stock
  const resetCart = ():void => {
    //restaurar el stock de todos los productos que estaban en el carrito
    const restoredProducts = productState.map(product => {
      const cartItem = cart.find(item => item.id === product.id);
      return cartItem 
        ? {...product, stock: product.stock + cartItem.quantity} 
        : product;
    });
    setproductState(restoredProducts);
    //limpiar el carrito
    setcart([]);
  }

  return (
    <View style={{marginTop:50, marginBottom:50 , backgroundColor:'#050836'}}>
      <View style={stylesGlobal.iconProduct}>
      <Text style={stylesGlobal.productos}>Productos</Text>
      <View >
      <Text style={stylesGlobal.textIconCart}>{cart.length}</Text>
      <Icon name='shopping-cart' color={'#f3f6f9'} size={30} onPress={hiddenModal}/>
      </View>
      </View>
      <View style={{ padding: 10, marginBottom: 70 }}>
        <FlatList
          data={productState}
          renderItem={({ item }) => <CardProduct item={item}  changeStockProduct={changeStockProduct}/>}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
        />
      </View>
      <ModalCart isVisible={showModal} cart={cart} hiddenModal={hiddenModal} resetCart={resetCart}/>
    </View>
  )
}

