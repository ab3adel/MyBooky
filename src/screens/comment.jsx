
import React from 'react';
import {View, StyleSheet,Text} from 'react-native';

const Comment = ({name,text}) => {
    return (
        <View
        style={{
            width:'100%',
            paddign:4,
            marginVertical:3
        }}>
            <Text style={{
                fontWeight:'bold',
                paddingHorizontal:15,
                paddingVertical:5
            }}>
              {name?name:''} :

            </Text>
           
            <Text style={{
                paddingHorizontal:40,
                textAlign:'auto',
                backgroundColor:'lightgray',
                borderRadius:10,
                paddingVertical:10
            }}>
               {
                text?text:''
               }
            </Text>
            <View style={{height:1,width:300,backgroundColor:'lightgray',marginTop:3}}/>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Comment;
