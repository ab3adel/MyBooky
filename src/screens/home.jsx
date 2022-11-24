import { Text, View } from "react-native"
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Setting from "./setting"
import About from "./about"
import Mysavings from "./mysavings"
import ProductsList from "./products-list"
import {CartButton} from '../component/button'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const TabNavitgation = createBottomTabNavigator()
export default function Home ({navigation}) {


    return (
        <View style={{flex:1,justifyContent:"space-between",flexDirection:'column'}}>
        <View>
        </View>
            <TabNavitgation.Navigator
            screenOptions={({route})=>({
                tabBarActiveTintColor:'white',
                tabBarInactiveTintColor:'lightstealblue',
                headerStyle:{
                    backgroundColor:'lightseagreen',
                    
                },
                header:()=>{return null},
               tabBarStyle:{
                backgroundColor:'lightseagreen'
               }
            })}
              >
                <TabNavitgation.Screen name="Home" component={ProductsList} 
                    options={()=>({
                        tabBarIcon:({color,size,focused})=>(
                            <MaterialCommunityIcons name={'archive-search'} 
                            color={focused? 'yellow':'white'} size={size} />
                        )
                    })}
                />
                <TabNavitgation.Screen name="My Savings" component={Mysavings} 
                    options={()=>({
                        tabBarIcon:({color,size,focused})=>(
                            <MaterialCommunityIcons name="account-settings" 
                            color={focused? 'lightgreen':'white'} size={size} />
                        )
                    })}
                />
                <TabNavitgation.Screen name="About" component={About}
                 options={()=>({
                    tabBarIcon:({color,sise,focused})=>(
                        <MaterialCommunityIcons name="exclamation-thick" 
                        color={focused? 'lightgreen':'white'} />
                    )
                 })}
                 />

               
            </TabNavitgation.Navigator>
            <CartButton navigateToCart={()=>navigation.navigate('cart')} />
        </View>
    )
}