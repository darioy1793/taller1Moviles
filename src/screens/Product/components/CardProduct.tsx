import React, { useState } from 'react'
import { Image, Text, View } from 'react-native'
import { Product } from '../Productos'
import { stylesGlobal } from '../../../Theme/apptheme';
import Icon from '@expo/vector-icons/MaterialIcons';
import { ModalProduct } from './ModalProduct';

interface Props{
   item:Product;
   changeStockProduct: (id:number, quantity:number) => void;
}

export const CardProduct = ({item, changeStockProduct}: Props) => {
  //permite gestionar el estado de la visibilidad del modal
  const [showModal, setShowModal] = useState<boolean>(false);
  const hiddeModal = ():void => {
    setShowModal(!showModal);
  }


  return (
    <>  
    <View style={stylesGlobal.containerCards}>
      <Image source={{uri: item.image}} style={stylesGlobal.imageCard} />
      <View>
        <Text style={stylesGlobal.titleCard}>{item.name}</Text>
        <Text style={stylesGlobal.titleCard}> ${item.price.toFixed(2)}</Text>
        </View>
        <Icon name='add-shopping-cart' size={24} color='#22e910'style={stylesGlobal.iconCard} onPress={hiddeModal} />
        
    </View>
    <ModalProduct isVisible={showModal} item={item} hiddeModal={hiddeModal} changeStockProduct={changeStockProduct} />
    </>
  )
}
