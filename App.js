import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,SafeAreaView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from './src/screens/home';
import ProductDetails from './src/screens/product-details';
import Authentication from './src/screens/authentication';
import {Provider} from 'react-redux'
import {store} from './src/store/store'
import Cart from './src/screens/cart';
import { useEffect } from 'react';
import Landing from './src/screens/landing';
const StackNavigation= createNativeStackNavigator()

export default function App() {

useEffect(()=>{
fetch('http://192.168.1.4:3000',{
  method:'GET'
})
},[])
  return (

    <Provider store={store}>
        <NavigationContainer

        
       >
          <StackNavigation.Navigator
          initialRouteName='landing'
          screenOptions={{
           headerStyle:{
            backgroundColor:'lightseagreen',
            
            
           },
           headerTitleStyle:{
            color:'white'
           }
        
          }}>
            <StackNavigation.Screen name="landing" component={Landing}
            options={{title:'Welcome'}} 
           

            />
             <StackNavigation.Screen name="Auth" component={Authentication}
             options={{title:'Login',headerBackVisible:false}} />
            <StackNavigation.Screen name="myHome" component={Home} 
            
              options={{title:'Explore new Books',headerBackVisible:false}}
            />
            <StackNavigation.Screen name='product-details' component={ProductDetails} />
            <StackNavigation.Screen name='cart' component={Cart} />
          </StackNavigation.Navigator>
        </NavigationContainer>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
