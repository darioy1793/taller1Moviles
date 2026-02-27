import React, { useState } from 'react'
import { Image, Modal, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import { Product } from '../Productos';
import { stylesGlobal } from '../../../Theme/apptheme';
import Icon from '@expo/vector-icons/MaterialIcons';

interface Props {
    isVisible: boolean;
    item: Product;
    hiddeModal: () => void;
    changeStockProduct: (id:number, quantity:number) => void;
}

export const ModalProduct = ({ isVisible, item, hiddeModal, changeStockProduct }: Props) => {
    const { width } = useWindowDimensions();
    //funcion contador 
    const [quantity, setQuantity] = useState<number>(1);

    //funcion agregar el producto al carrito
    const handleAddProduct = () => {
        changeStockProduct(item.id, quantity);
        //cerrar modal
        hiddeModal();
        //reiniciar la cantidad
        setQuantity(1);
    }

    return (
        <Modal visible={isVisible} animationType='slide' transparent={true}>
            <View style={stylesGlobal.containerModal}>
                <View style={{ ...stylesGlobal.bodyModal, width: width * 0.8 }}>
                    <View style={stylesGlobal.headerModal}>
                        <Text style={stylesGlobal.titleModal}>{item.name} - ${item.price.toFixed(2)}</Text>
                        <View style={stylesGlobal.iconCard}>
                            <Icon name='cancel' size={24} color='#0c1fad' onPress={hiddeModal} />
                        </View>
                    </View>
                    <Image source={{ uri: item.image }} style={stylesGlobal.imageModal} />
                    <Text style={stylesGlobal.textTotalPrice}>{item.description}</Text>
                    {
                        (item.stock == 0)
                            ? <Text style={{color:'red', fontSize:20, fontWeight:'bold' }}>Producto Agotado</Text> :
                            <>
                                <View style={stylesGlobal.containerQuantity}>
                                    <TouchableOpacity style={stylesGlobal.buttonQuantity} onPress={() => setQuantity(quantity - 1)} disabled={quantity == 1}>
                                        <Text style={{ ...stylesGlobal.buttonQuantityText }}>-</Text>
                                    </TouchableOpacity>
                                    <Text style={{ fontSize: 20 }}>{quantity}</Text>
                                    <TouchableOpacity style={stylesGlobal.buttonQuantity} onPress={() => setQuantity(quantity + 1)} disabled={quantity >= item.stock}>
                                        <Text style={stylesGlobal.buttonQuantityText}>+</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Text style={stylesGlobal.textTotalPrice}>Total: ${(item.price * quantity).toFixed(2)}</Text>
                                </View>
                                <TouchableOpacity style={stylesGlobal.buttonAgregar } onPress={handleAddProduct}>
                                    <Text style={stylesGlobal.textAgregar}>Agregar Carrito</Text>
                                </TouchableOpacity>
                            </>
                    }


                </View>

            </View>
        </Modal>
    )
}
