import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import CheckBox from '@react-native-community/checkbox'
import client from '../../api/client'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../navigation/Router'

type LoginSProps = NativeStackScreenProps<RootStackParamList, 'LoginR'>

const LoginS = ({ navigation }: LoginSProps) => {
  const [userEmail, setUserEmail] = useState('')
  const [userPass, setUserPass] = useState('')
  const handleUserEmail = (text) => {
    setUserEmail(text)
  }
  const handleUserPass = (text) => {
    setUserPass(text)
  }
  const handleConnection = async () => {
    const res = await client.post('/auth/signin', {
      email: userEmail,
      password: userPass,
    })
    navigation.navigate('LandingR', { unit: userEmail }), console.log(res.data)
  }
  return (
    <View className="flex flex-col justify-center px-6">
      <View className="w-70">
        <Text className="mb-2 text-lg font-medium">Log In</Text>

        <View className="mb-6 py-2">
          <View className="pt-2">
            <TextInput
              className="w-full px-3 py-2 bg-gray-100 border border-gray-400 rounded"
              placeholder="Email"
              value={userEmail}
              onChangeText={handleUserEmail}
            />
          </View>
          <View className="pt-2">
            <TextInput
              className="w-full px-3 py-2 bg-gray-100 border border-gray-400 rounded"
              secureTextEntry={true}
              placeholder="Password"
              value={userPass}
              onChangeText={handleUserPass}
            />
          </View>
          <View className="pt-2">
            <Pressable
              onPress={() => handleConnection()}
              className="w-full py-2 mb-4 bg-blue-500 border border-blue-500 rounded"
            >
              <View className="flex flex-col items-center">
                <Text className=" text-xs font-bold text-white uppercase">
                  Sign In
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  )
}

export default LoginS
