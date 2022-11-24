import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {View, StyleSheet, Button, TouchableHighlight} from 'react-native';

const Star = ({clicked,setClicked}) => {
    
    return (
        <View style={{
            position:'absolute',
            top:0,
            right:'90%',
            backgroundColor:'white',
            borderRadius:100
        }}
        
        ><TouchableHighlight
        onPress={()=>setClicked(true)}
        
       
        
        >

                {
                    clicked? <MaterialCommunityIcons name="star" color='red'
                    size={20}/>:
                    <MaterialCommunityIcons name="star-outline" color='red'
                    size={20}/>

                }
        </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Star;
