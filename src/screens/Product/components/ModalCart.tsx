import React from 'react'
import { FlatList, Modal, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import { Cart } from '../Productos';
import Icon from '@expo/vector-icons/MaterialIcons';
import { stylesGlobal } from '../../../Theme/apptheme';

interface Props{
    isVisible: boolean;
    cart: Cart[];//arreglo con os productos del 
    hiddenModal:() => void;
    resetCart:() => void;
}

export const ModalCart = ({isVisible, cart, hiddenModal, resetCart}:Props) => {
    const {width} = useWindowDimensions();
     //funcion para calcular el total de la compra
    const totalPay = ():number => {
        let total:number = 0;
        cart.forEach(product => {
            total += product.total;
        });
        return total;
    }
    //funcion para realizar la compra
    const handleBuy = ():void => {
        //aqui se podria realizar la logica para procesar el pago y finalizar la compra
        resetCart();
        hiddenModal();
        
    }

  return (
   <Modal visible={isVisible} animationType='fade' transparent={true}>
    <View style={stylesGlobal.containerModal}>
            <View  style={{...stylesGlobal.bodyModal,width:width*0.9}}>
              <View style={stylesGlobal.headerModal}>
            <Text style={stylesGlobal.titleModal}>Mis Productos</Text>
            <View style={stylesGlobal.iconCard}>
              <Icon
                name="cancel"
                size={30}
                color="black"
                onPress={hiddenModal}/>
            </View>
          </View>
          <View style={stylesGlobal.headerTabla}>
            <Text style={{...stylesGlobal.headerTextTable, marginHorizontal:10, color:'#222'}}>Producto</Text>
            <View style={stylesGlobal.headerDescription}>
            <Text style={{...stylesGlobal.headerTextTable, marginHorizontal:10, color:'#222'}}>Pre.</Text>
            <Text style={{...stylesGlobal.headerTextTable, marginHorizontal:10, color:'#222'}}>Cant.</Text>
            <Text style={{...stylesGlobal.headerTextTable, marginHorizontal:10, color:'#222'}}>Total</Text>
            </View>
          </View>
           <FlatList
            data={cart}
            renderItem={({item})=>
                <View style={stylesGlobal.rowItem}>
                    <Text  numberOfLines={1}>{item.name}</Text>
                    <View style={stylesGlobal.headerDescription}>
                <Text style={{marginLeft:15}}>{item.price.toFixed(2)} </Text>
                <Text style={{marginLeft:25}}> {item.quantity} </Text>
                <Text style={{marginLeft:10}}> ${item.total.toFixed(2)}   </Text>
                </View>
                </View>
                }
                
            keyExtractor={item => item.id.toString()}/>
            <View style={stylesGlobal.containerTotalPay}>
                <Text style={stylesGlobal.textTotalPay}>Total a Pagar: ${totalPay().toFixed(2)}</Text>
            </View>
             <TouchableOpacity style={stylesGlobal.button} onPress={handleBuy}>
                        <Text style={stylesGlobal.buttonText}>Comprar</Text>
            </TouchableOpacity>
             </View>
        </View>

   </Modal>
  )
}
