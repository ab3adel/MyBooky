import React ,{useState,useEffect} from 'react';
import {View, StyleSheet,Text, TouchableHighlight} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

 const RenderRow= ({item,keys,title})=>{
    let [newKeys,setNewKyes]=useState([])
useEffect(()=>{
    if (keys ) {
        let updatedKyes=title?[...keys,''] :[...keys,'action']
        setNewKyes(updatedKyes)
    }
   
},[keys])
    return (
        <View 
        style={table.row
            
        }>
         {
            keys? newKeys.map((ele,index)=>{
                return (
                    <View style={
                        table.separator
                        }
                    key={index} >
                    {
                        ele !=='action'?
                        <Text
                        style={
                          
                            title? 
                        {
                           
                           ...table.title

                        }:
                        {
                          
                           ...table.value
                        }
                        }>
                        
                        { 
                            title? ele :item[ele]
                            }
                        </Text>
                        :
                       (ele === 'action'&& <TouchableHighlight>
                           <MaterialCommunityIcons name="delete" color={'red'} />
                        </TouchableHighlight>)
                        }
                    </View>
                )
            }):''
         }
            
        
        </View>
    );
    
}
const Table = ({data,keys}) => {
    return (
        <View style={table.table}
        >
        {
            data&& data.length>0?
        <>

        {
            keys? 
                <RenderRow item={keys} keys={keys} title={true} /> 
        :'no keys'
        }
        {
           
            data.map((ele,index)=>
            <RenderRow item={ele} key={index} keys={keys} title={false} />
            )
        }
        </>:
        <Text>You don't have Items to show!!</Text>
        }
            
        </View>
    )
       
}

const styles = StyleSheet.create({})

export default Table;

let table= StyleSheet.create({
    table:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column'

        
    },
    row:{
        flex:1,
        justifyContent:'space-evenly',
      
        flexDirection:'row',
        minHeight:50,
        maxHeight:50,
        alignSelf:'stretch',
        paddingHorizontal:3,
        borderBottomColor:'black',
        borderBottomWidth:1

    },
    separator:{
        flex:1,
        borderLeftColor:'black',
        borderLeftWidth:2,
        borderStyle:'dashed',
        backgroundColor:'white',
        minHeight:20,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontWeight:'bold',
       color:'lightseagreen'
    },
    value:{
        fontSize:11
    }
})