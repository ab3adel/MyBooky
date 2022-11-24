import {
  View,
  FlatList,
  ScrollView,
  Image,
  TouchableHighlight,
  Text,
  StyleSheet,
  
} from "react-native";
import React,{useState,useRef,useEffect} from 'react'
import Product from "./product";
import Building from "../../assets/building.jpg";
import Heart from "../../assets/romance.jpg";
import Sience from "../../assets/science.jpg";
import Amusing from "../../assets/amusing.jpg";
import {CartButton} from '../component/button'
import {useSelector} from 'react-redux'
import SearchingBookd from '../../assets/searching-back.jpg'
import Fade from "../component/fade";
export default function ProductsList({navigation}) {
  let lst = new Array(10).fill(1);
  let [selected,setSelected]=useState(0)
  
const {booksList} = useSelector(state=>state.books)


  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <ScrollView
        horizontal={true}
        style={{
          height: 10,
          flex: 1,
          elevation:4,
          shadowColor:'lightseagreen',
          paddingTop:5
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "space-evenly",
            flexDirection: "row",
            paddingVertical: 2,
            alignItems: "center",
            shadowRadius:4,
            shadowColor:'lightseagreen',
            elevation:8
          }}
        >
         <TouchableHighlight 
          underlayColor="lightseagreen"
          onPress={() => setSelected(0)} 
          
           >
              <View
                style={selected===0? touched.selected:touched.unSelected}
              >

              
                  <Image source={Building} style={imageStyle}
                  />
              
                 <Fade start={selected===0} text={'Architecture'} />
              </View>
        </TouchableHighlight>
          <TouchableHighlight
           onPress={() => setSelected(1)} 
          style={selected===1? touched.selected:touched.unSelected} 
          underlayColor="lightseagreen">
            <View>

              <Image source={Heart} style={imageStyle} />
               <Fade start={selected===1} text={'romance'}/>
            </View>
          </TouchableHighlight>
          <TouchableHighlight 
           onPress={() => setSelected(2)} 
          style={selected===2? touched.selected:touched.unSelected} 
           underlayColor="lightseagreen">
           <View>

            <Image source={Amusing} style={imageStyle} />
            <Fade start={selected===2} text={'entertainment'}/>
           </View>
          </TouchableHighlight>
          <TouchableHighlight
             onPress={() => setSelected(3)} 
          style={selected===3? touched.selected:touched.unSelected} 
          underlayColor="lightseagreen">
            <View>

              <Image source={Sience} style={imageStyle} />
              <Fade start={selected===3} text={'science'}/>
            </View>
          </TouchableHighlight>
        </View>
      </ScrollView>
      <View style={{ flex: 4 }}>
        <FlatList
          style={{ zIndex: 0 }}
          renderItem={(item)=> <Product navigation={navigation} {...item} />}
          data={booksList[selected]}
          showsVerticalScrollIndicator={false}
        
          keyExtractor={({ id }) => id}
         
        />
      </View>
      <View style={{
        position:'absolute',
        left:0,
        right:0,
        top:0,
        bottom:0,
        zIndex:-1,
      
      
      }}>
       <View style={{height:100,backgroundColor:'lightseagreen'}} />
       <View style={{flex:1,backgroundColor:'lightseagreen'}} >
         <Image source={SearchingBookd} resizeMode='cover' 
          style={{
            width:'100%',
            height:'100%'
          }}
         />
       </View>

      </View>
   
      
    </View>
  );
}
let imageStyle = {
  width: 100,
  height: 50,
  borderRadius: 100,
  margin: 4,
  elevation:10,
  shadowColor:'gray',
  zIndex:-1
};
let touched=StyleSheet.create({
  selected:{
    backgroundColor:'lightseagreen',
    borderRadius:100,
    elevation:10,
  shadowColor:'gray'
  },
  unSelected:{
    backgroundColor:'transparent',
    elevation:10,
  shadowColor:'gray'
  }
}
)
let overlay = StyleSheet.create({
  cover:{
    zIndex:1,
    backgroundColor:'rgba(0,0,0,0.5)',
    position:'absolute',
    width:110,
    height:55,
    top:0,
    right:0,
    borderRadius:100,
    justifyContent:'center',
    alignItems:'center'

    
  },
  text :{
    color:'white'
  }
})