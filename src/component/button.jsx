import React from 'react';
import {View, StyleSheet,Text,TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {useSelector} from 'react-redux'
export  function CartButton ({navigateToCart})  {
    let {purshasedItems}=useSelector(state=>state.books)
    console.log('cartbtn',purshasedItems)
    return (
        <TouchableOpacity
        onPress={()=>navigateToCart()}>
            <View
            style={{
                position:'absolute',
                bottom:50,
                right:10,
                width:40,
                height:40,
                borderRadius:100,
                backgroundColor:'white',
                justifyContent:'center',
                alignItems:'center'

            }}>
            <MaterialIcons name="cart" size={30} />
            <View
            style={{
                backgroundColor:purshasedItems.length>0?'yellow':'red',
                borderRadius:100,
                justifyContent:'center',
                alignItems:'center',
                position:'absolute',
                width:15,
                height:15,
                top:0,
                left:-1
            }}
            >
            <Text style={{fontSize:14}}>
             {purshasedItems.length}
            </Text>
            </View>
            </View>
        </TouchableOpacity>
    );
}
export function AddToCart ({fun}) {
    return (
        <View
        style={{
            width:90,
            height:50,
            borderRadius:10,
            backgroundColor:'black',
            alignItems:'center',
            justifyContent:'center'
        }}>
          <TouchableOpacity
          onPress={()=>fun()}>
             <Text style={{color:'white',alignItems:'center'}}>Add To Cart</Text>
          </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({})


