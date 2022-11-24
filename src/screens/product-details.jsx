import React,{useState,useEffect} from 'react';
import {View, StyleSheet,Image,Text, FlatList, ScrollView, TouchableHighlight} from 'react-native';
import { TextInput } from 'react-native-paper';
import Book from '../../assets/book.jpg'
import Rating from './rating';
import Comment from './comment';
import {AddToCart} from '../component/button'
import {useSelector,useDispatch} from 'react-redux'
import {getBookDetails,addToCart,addComment} from '../store/books'
import {CartButton} from '../component/button'
let data= [
    {id:1},
    {id:2},
    {id:3},
    {id:4},
    {id:5},

]
let content= `
 Nostrud labore sint sit exercitation sit nulla 
 incididunt. Elit in quis esse est aliquip. Fugiat of
 
 ficia aliqua excepteur laboris sit reprehenderit min
 im. Exercitation sunt nisi consequat laboris dolore pariatur eiusmo
 d eu officia ut. Sunt laborum eu est in eu ut nostrud esse est laboru
 m Lorem deserunt non sint.
 `
const ProductDetails = ({route,navigation}) => {
  const {bookDetail} =useSelector(state=>state.books)
  const dispatch =useDispatch()

    const [comment ,setComment]=useState('')
    const [isActive,setIsActive]=useState(content.length>200?true:false)
    let {id}= route.params
    useEffect(() => {
      if (id) {
        dispatch(getBookDetails(id))
      }
      return () => {
        
      };
    }, [id]);
    const purshaseItme=()=>{
      dispatch(addToCart(id))
    }
    const handlePress=(e)=>{
     
      
        dispatch(addComment({id,text:e.nativeEvent.text}))
        setComment('')
      
    }

    return (
        <View
        style={

            {
                flex:1,
                flexDirection:'column',
                alignItems:'center',
                padding:8,
                backgroundColor:'lightseagreen'
            }
        }>
        <ScrollView>
            <View
            style={{
                width:'100%',
                height:200,
                backgroundColor:'white',
                paddingVertical:3
               
            }}>
            <Image 
                source={bookDetail.book?bookDetail.book: Book}
                resizeMode="contain"
                style={{
                    width:'100%',
                    height:'100%'
                }}
            />
            </View>
            <View style={{
                marginBottom:10,
                backgroundColor:'white',
                padding:4
            }} >
        
                <Text style={{fontSize:17,fontWeight:'bold',textAlign:'center'}}>
                {bookDetail && bookDetail.details? bookDetail.details.title:'Book Title'}
                </Text>
                <View style={{flex:1 
                ,width:'100%'
                ,flexDirection:'row'
                ,
               alignItems:'center',
               minHeight:50
                }}>

                  <Rating number={bookDetail && bookDetail.details? bookDetail.details.rating:1} />
                  <View
                  style={{
                    marginLeft:10,
                    position:'absolute',
                    right:10
                  }}>

                    <AddToCart fun={purshaseItme} />
                  </View>
                </View>
                 
                    { isActive ?
                    <View
                    style={
                     {
                       padding:4
                       }
                    }>

                      <Text>

                        {content.slice(0,200)}
                      </Text>
                        <TouchableHighlight
                          onPress={()=>setIsActive(!isActive)}
                          underlayColor={'undefined'}
                          >
                         <Text
                         style={{
                            fontWeight:'bold'
                         }}
                         >read more ... </Text>
                       </TouchableHighlight> 
                    </View>:
                    <View
                    style={{
                      padding:4
                    }}>

                      <Text>

                        {content}
                      </Text>
                        <TouchableHighlight
                          onPress={()=>setIsActive(!isActive)}
                          underlayColor={'undefined'}
                          >
                         <Text style={{
                            fontWeight:'bold'
                         }}>read less </Text>
                       </TouchableHighlight> 
                    </View>
                    }
                     
                 
               
            </View>
            <View style={{
                width:'100%',
                
                padding:4,
                marginBottom:10
            }}>
                <TextInput 
                    placeholder='Enter your comment'
                    value={comment}
                    onChange={setComment}
                  
                    returnKeyType='done'
                    onSubmitEditing={handlePress}
                    style={{
                        width:'100%',
                        borderRadius:10,
                        height:40

                    }}
                />
                <CartButton navigateToCart={()=>navigation.navigate('cart')}/>
            </View>
            <ScrollView
            style={{
              backgroundColor:'white',
              padding:4
            }}
            >
               {
                bookDetail?.details?
                bookDetail.details.comments.map((ele,index)=>{
                 return ( <Comment {...ele} key={index} />)
                }):''
               }
            </ScrollView>
              
          
            
        
           
          </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
      paddingTop: 30,
    },
    title: {
      textAlign: 'center',
      fontSize: 18,
      fontWeight: '300',
      marginBottom: 20,
    },
    header: {
      backgroundColor: '#F5FCFF',
      padding: 10,
    },
    headerText: {
      textAlign: 'center',
      fontSize: 16,
      fontWeight: '500',
    },
    content: {
      padding: 20,
      backgroundColor: '#fff',
    },
    active: {
      backgroundColor: 'rgba(255,255,255,1)',
    },
    inactive: {
      backgroundColor: 'rgba(245,252,255,1)',
    },
    selectors: {
      marginBottom: 10,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    selector: {
      backgroundColor: '#F5FCFF',
      padding: 10,
    },
    activeSelector: {
      fontWeight: 'bold',
    },
    selectTitle: {
      fontSize: 14,
      fontWeight: '500',
      padding: 10,
      textAlign: 'center',
    },
    multipleToggle: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: 30,
      alignItems: 'center',
    },
    multipleToggle__title: {
      fontSize: 16,
      marginRight: 8,
    },
  });
  

export default ProductDetails;
