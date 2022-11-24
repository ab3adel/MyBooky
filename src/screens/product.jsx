
import { Image, TouchableOpacity, View, Text } from 'react-native'
import React,{useState} from 'react'
import Book from '../../assets/arch-book1.jpg'
import Star from './star'
import {useDispatch} from 'react-redux'
import {useNavigation} from '@react-navigation/native'
import {saveBook} from '../store/books'
import Rating from './rating'
export default function Product ({navigation,item,inSavings=false}) {
  
  const [save,setSave]=useState(false)
  const navigate = useNavigation()
  const dispatch =useDispatch()
  const saveItem =()=>{
    if (!save){

      dispatch(saveBook(item.id))
      setSave(true)
    }
    else {
      dispatch(removeSavedBook(item.id))
      setSave(false)
    }
  }
    return (
       <View
       style={{
        flex:1,
        marginVertical:8,
        paddingRight:25,
        paddingLeft:2,
        height:250,
        borderRadius:50,
        marginBottom:10,
        flexDirection:'row'

       }}>
         <View
          style={{
            flex:1,
       
            justifyContent:'center',
            alignItems:'center'
          }}>
             <View
             style={{
              width:'100%',
              height:100,
              backgroundColor:'white',
              alignItems:'flex-start',
              flexDirection:'column',
              justifyContent:'center',
              paddingLeft:10,
              elevation:8,

             }}>
               <Rating number={item?.details.rating} 
                width={30}
               />
               <Text
               style={{
                color:'black',
                fontSize:16,
                fontWeight:'bold',
                marginVertical:10
               }}>
                 {item?.details.price}
               </Text>
               <Text
               style={{
                color:'black',
                fontSize:14,
           
               }}>
                 {item?.details.date}
               </Text>
             </View>
         </View>
         <View
         style={{
          flex:3,
          height:250,
          alignItems:'center',
      
          
         }}>

            <TouchableOpacity
            onPress={()=>navigation.navigate('product-details',{id:item.id})}
            >
                <Image source={item.book} 
                
                  resizeMode="contain"
                  style={{
                       elevation:8,
                    height:'100%',
                    borderTopLeftRadius:8,
                    borderTopRightRadius:8,
                    maxWidth:200
                  }}
                />
          
            </TouchableOpacity>
         </View>
       { !inSavings && (<Star clicked={save} setClicked={()=>saveItem()} />)}
      
      </View>

    )
}
