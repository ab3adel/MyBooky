import React ,{useEffect,useState}from 'react';
import {View, StyleSheet, 
    ScrollView
    , TouchableHighlight
    ,Image
    ,Text
} from 'react-native';
import Table  from '../component/table';
import {useDispatch,useSelector} from 'react-redux'
import {showCart,removeFromCart} from '../store/books'
import Paypal from '../../assets/paypal.png'
import Credit from '../../assets/credit.png'
const Cart = () => {
    const dispatch =useDispatch()
    const {itemsToShow}=useSelector(state=>state.books)
    const [datum,setDatum]=useState([])
    let keys=['title','author','price','date']

    useEffect(()=>{
        dispatch(showCart())
    },[])
    useEffect(()=>{
        if (itemsToShow && itemsToShow.length>0){
            let newDatum=itemsToShow.map(ele=>ele.details)
            setDatum(newDatum)
        }
    },[])
   
    return (
        <ScrollView
        style={{
            flex:1,
            flexDirection:'column',
            padding:8
        }}>
        <View
        style={{
            flex:1,
            flexDirection:'column',
            alignItmes:'center',
            
        }}
      >
            <View
            style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center',
                marginBottom:8
            }}>
                <Text>
                  Choose your Payment Methode:
                </Text>
            </View>
            <View
               style={{
            flex:1,
            flexDirection:'row',
            justifyContent:'space-evenly',
            paddingVertical:4,
            marginBottom:20
            }}
            >

                <TouchableHighlight
                style={style.imageSize}
                >
                    <Image source={Paypal} resizeMode="contain" 
                    style={style.imageSize}
                    />
                </TouchableHighlight>
                <TouchableHighlight
            
                >
                    <Image source={Credit} resizeMode="contain"  
                        style={style.imageSize}
                    />
                </TouchableHighlight>
            </View>
        </View>
        <View
        style={{
            flex:1
        }}>

            <Table data={datum} keys={keys}/>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({})

export default Cart;
let style=StyleSheet.create({
    imageSize:{
        width:90,
        height:40
    }
})