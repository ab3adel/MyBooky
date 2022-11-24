import React ,{useEffect,useRef} from 'react';
import {View, StyleSheet,Animated,
    Easing,Text} from 'react-native';

const Fade = ({start,text}) => {
    const fadIng = useRef(new Animated.Value(0)).current

useEffect(()=>{
    if (start) {

        Animated.timing(
          fadIng,
          {
            toValue:1,
            duration:5000,
            useNativeDriver:true,
            easing:Easing.bezier(0,0.7,0.2,0.5)
                }
        ).start()
    }
    else {
        Animated.timing(
            fadIng,
            {
              toValue:1,
              duration:1,
              useNativeDriver:true,
            
                  }
          ).reset()
    }
},[start])


    return (
        <Animated.View style={{
          ...overlay.cover,
          opacity:fadIng,
          
        
          }} >
            <Text style={overlay.text}>
            {text}
            </Text>
        </Animated.View>
 
    );
}


export default Fade;
let overlay = StyleSheet.create({
    cover:{
      zIndex:1,
      backgroundColor:'rgba(0,0,0,0.5)',
      position:'absolute',
      width:'100%',
      height:55,
      top:0,
      right:0,
      borderRadius:100,
      justifyContent:'center',
      alignItems:'center'
    },
    text :{
      color:'white',
      fontWeight:'bold'
    }
  })