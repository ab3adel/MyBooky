import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet,Text,FlatList} from 'react-native';
import Product from './product'
import {useSelector} from 'react-redux'
const Mysavings = ({navigation}) => {
    let {savedBooks}=useSelector(state=>state.books)
    
    return (
        <View
        style={{flex:1,padding:4,backgroundColor:'lightseagreen'}}>

         { savedBooks?.length>0 ?
            <FlatList
           data={savedBooks}
           renderItem={(item)=> <Product navigation={navigation} {...item} inSavings={true}/>}
           />
           :
           <Text
           style={{
            fontSize:14,
            fontWeight:'bold',
            color:'green'
           }}>
             You don't have Items in your savings !!
           </Text>
            }
        </View>
    );
}

const styles = StyleSheet.create({})

export default Mysavings;
