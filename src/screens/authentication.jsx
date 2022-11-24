import React, {useState,useEffect} from 'react';
import {View, StyleSheet,Text
    ,TextInput, TouchableOpacity,
    Image
 } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Back from '../../assets/shelf.jpg'
import {fetchBooks} from '../store/books'
import {useDispatch} from 'react-redux'

const Authentication = ({route,navigation}) => {
    const [userName,setUserName]=useState('')
    const [password,setPassword]=useState('')
    const [showPassword,setShowPassword]=useState(false)
    const dispatch= useDispatch()
    const [disabled,setDisabled]=useState(true)
    let state=route.params
    useEffect(()=>{
        dispatch(fetchBooks())
      },[])
    useEffect(() => {
        if (Boolean(userName) && Boolean(password)) {
            setDisabled(false)
        }
        return () => {
           
        };
    }, [userName,password]);
    useEffect(()=>{
        if (state?.authenticated) {
            setUserName('')
            setPassword('')
            navigation.navigate('myHome')
        }
    },[state])
 
    return (
        <View
        style={{
            flex:1,
            backgroundColor:'lightseagreen',
            justifyContent:'center',
            alignItems:'center',
            position:'relative'
            
        }}>
        <Image source={Back}
        resizeMode="cover"
        style={{
            position:'absolute',
            top:0,
            right:0,
            left:0,
            bottom:0,
            width:'100%',
            height:'100%',
            
        }} />

            <View
            style={{
                width:300,
               
                height:'100%',
                paddingVertical:8,
                flexDirection:'column',
                zIndex:2
            }}>
             <View
              style={{
                flex:1,
                paddingVertical:9,
               
               justifyContent:'flex-end'
              }}
             >
                <Text
                style={{
                    fontSize:20,
                    fontWeight:'bold',
                    textAlign:'center',
                    color:'white'
                }}>
                   Welcome to Booky
                </Text>
                <Text
                 style={{
                    fontSize:14,
                    textAlign:'center',
                    color:'white'
                    
                 }}>
                   let's find your best book Now
                </Text>
             </View>
             <View
             style={
                {
                    flex:3,
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center'
                }
             }>
              <View
              style={{    
                width:'100%',
                justifyContent:'center',
                alignItems:'center'
              }}>
                <TextInput value={userName} onChange={setUserName}
                    style={{
                        backgroundColor:'white',
                        width:'90%',
                        borderRadius:10,
                        height:40,
                        paddingHorizontal:20
                    }}
                    placeholder="Enter your user name"
                />
              </View>
              <View
              style={{
                justifyContent:'center',
                alignItems:'center',
                width:'100%',
                marginTop:10,
                position:'relative'
                
              }}>
                <TextInput value={password} onChange={setPassword}
                    secureTextEntry={!showPassword}
                    placeholder="Enter your password"
                    style={{
                        backgroundColor:'white',
                        width:'90%',
                        borderRadius:10,
                        height:40,
                        paddingHorizontal:20
                        
                    }}
                />
                {
                    showPassword?
                    <TouchableOpacity
                    onPress={()=>setShowPassword(false)}
                    style={{
                            position:'absolute',
                            right:20,
                            bottom:'20%',
                            zIndex:2
                        }}>

                        <MaterialCommunityIcons name="eye" size={25} 
                       
                        color="green"
                    />
                    </TouchableOpacity>:
                    <TouchableOpacity
                       onPress={()=>setShowPassword(true)}
                       style={{
                            position:'absolute',
                            right:20,
                            bottom:'20%',
                            zIndex:1
                        }}>

                        <MaterialCommunityIcons name="eye-off" size={25} 
                           
                            color="gray"
                        />
                    </TouchableOpacity>
                }
           
              </View>
              <View 
              style={{
                width:'100%',
                justifyContent:'center',
                alignItems:'center',
                marginTop:10,
               
              }}>
               <TouchableOpacity
               style={{
                width:100,
                backgroundColor:'lightgreen',
                borderRadius:10,
                height:40,
                
               }}
               disabled={disabled}
               onPress={()=>navigation.navigate('myHome',{authenticated:true})}
               >
                  <Text
                  style={{
                    textAlign:'center',
                    width:'100%',
                    height:'100%',
                    borderRadius:10,
                    paddingVertical:10,
                    fontSize:15,
                    fontWeight:'bold',
                    color:'white'
                  }}>
                    Login
                  </Text>
               </TouchableOpacity>
               <TouchableOpacity
               style={{
                width:300,
                marginTop:10,
                borderRadius:10,
                height:10,
                
               }}
               disabled={disabled}
               onPress={()=>navigation.navigate('myHome',{authenticated:true})}
               >
               <View
               style={{
                flexDirection:'column',
                
               
               }}>

                    <Text
                    style={{
                        textAlign:'center',
                        width:'100%',
                        height:'100%',
                        borderRadius:10,
                  
                        fontSize:15,
                        fontWeight:'bold',
                        color:'white'
                    }}>
                        Don't have account yet ? 
                    </Text>
                    <Text
                    style={{
                        textAlign:'center',
                        width:'100%',
                        height:'100%',
                        borderRadius:10,
                        textDecorationLine:'underline',
                        fontSize:15,
                        fontWeight:'bold',
                        color:'white'
                    }}
                    >
                        Singin
                    </Text>
               </View>
               </TouchableOpacity>
              </View>
             </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Authentication;
