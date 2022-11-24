
        import React, { useEffect } from 'react';
        import {View, StyleSheet, Text, Image} from 'react-native';
        import Back from '../../assets/welcom-back.jpg'
        export default function Landing({navigation}) {
            useEffect(()=>{
                setTimeout(()=>navigation.navigate('Auth'),2000)
            },[])
          return (
            <View style={styles.container}>
              <Image source= {Back} resizeMode="cover" 
                style={{
                    width:'100%',
                    height:'100%',
                    zIndex:-1
                }}
              />
              <View
              style={{
                zIndex:1,
                    position:'absolute',
                    top:'40%',
                    left:'20%',
                    flex:1,
                    justifyContent:'center',
                    flexDirection:'column'
              }}>

                <Text 
                style={{
                    color:'white',
                    fontSize:25,
                    fontWeight:'bold',
                    textAlign:'center'
                }}>
                    Welcom To Booky 
                   
                </Text>
                <Text
                  style={{
                    color:'white',
                    fontSize:25,
                    fontWeight:'bold',
                  
                    textAlign:'center'
                }}>
                 Your Own Library
                </Text>
              </View>
            </View>
          );
        }
        
        const styles = StyleSheet.create({
          container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor:'lightseagreen',

          },
          example: {
            marginVertical: 24,
          },
        });



