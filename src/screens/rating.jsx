import React, { useState,useEffect } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {View, StyleSheet, Button, TouchableHighlight,Text} from 'react-native';
let arr=new Array(<MaterialCommunityIcons name="star-outline" color='red'
size={20}/>).fill(5)
let newArr=new Array().fill(5)
let emt=[0,0,0,0,0]
let filled=[1,1,1,1,1]
const Rating = ({number,width=50}) => {
    const [stars,setStars]=useState(arr)

    return (
        <View style={{
            width,
            flexDirection:'row',
          
            
        }}>
            {
                [...filled.slice(number),...emt].slice(0,5).map((ele,index)=>
                {
                    if(ele) return  (<MaterialCommunityIcons key={index} name="star" color='gold' size={width *0.4}/>)
                    return <MaterialCommunityIcons key={index} name="star-outline" color='gold' size={width *0.4}/>
                }
              )
            }
        </View>
    );
}

const styles = StyleSheet.create({})

export default Rating;
