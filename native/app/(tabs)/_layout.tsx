import { View, Text } from 'react-native'
import { createMaterialTopTabNavigator, MaterialTopTabNavigationOptions, MaterialTopTabNavigationEventMap } from '@react-navigation/material-top-tabs'
import React from 'react'
import { withLayoutContext } from 'expo-router'
import { ParamListBase, TabNavigationState } from '@react-navigation/native';

const {Navigator} = createMaterialTopTabNavigator();
export const MaterialTopTabs = withLayoutContext<
MaterialTopTabNavigationOptions, 
typeof Navigator, 
TabNavigationState<ParamListBase>,
MaterialTopTabNavigationEventMap
>(Navigator);

const Layout = () => {
  return (
    <MaterialTopTabs 
    style={{height:40, width:"100%", backgroundColor:"black", paddingTop:20}}
    screenOptions={{
        tabBarBounces:true, 
        tabBarActiveTintColor:"white", 
        tabBarIndicatorStyle:{backgroundColor:"red", height:"80%",width:"20%",left:"2.5%", borderRadius:40, top:"10%"},
        tabBarInactiveTintColor:"black",
        tabBarLabelStyle:{fontWeight:"bold", fontSize:12, textTransform:"capitalize"}, 
        tabBarStyle:{backgroundColor:"#7F7F7F", borderRadius:30, width:"70%", alignSelf:"center"},
        }}>
        <MaterialTopTabs.Screen name="index" options={{title: "Sex"}}/>
        <MaterialTopTabs.Screen name="alcool" options={{title: "Alcool"}}/>
        <MaterialTopTabs.Screen name="droguri" options={{title: "Droguri"}}/>
        {/* <MaterialTopTabs.Screen name="(tabs)/droguri" component={require('./droguri').default} options={{headerTitle: "Droguri"}}/> */}
    </MaterialTopTabs>
  )
}

export default Layout