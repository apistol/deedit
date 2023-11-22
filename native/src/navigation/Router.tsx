import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import RegisterS from '../screens/RegisterS'
import LandingS from '../screens/LandingS'

export type RootStackParamList = {
  RegisterR: { unit: string }
  LandingR: { unit: string }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RegisterR">
        <Stack.Screen
          name="RegisterR"
          component={RegisterS}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LandingR"
          component={LandingS}
          options={{
            title: 'Welcome! You are logged in!',
            headerStyle: { backgroundColor: '#3A82F6' },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router
