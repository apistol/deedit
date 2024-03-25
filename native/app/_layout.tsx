import { View, Text, Image, StatusBar } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'


const Layout = () => {
  return (
    <>
     <StatusBar barStyle="light-content" backgroundColor="white"
      />
    <Stack screenOptions={{headerShadowVisible:false, contentStyle:{backgroundColor:"black"}, headerStyle:{backgroundColor:"black"}}} >
        <Stack.Screen name="(tabs)"
        options={{
          headerLeft: () => (
            <Image 
            source={require('./Logo.png')}
            style={{ width: 55, height: 19, backgroundColor:'black', position: 'absolute', left: 0, top: 2}}
            />
          )
          ,headerTitle: () => (<></>)
        }}/>
        {/* <Stack.Screen name="/droguri" options={{headerTitle:"Droguri"}}/> */}
    </Stack>

    </>
  
  )
}

export default Layout