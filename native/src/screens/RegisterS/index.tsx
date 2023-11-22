import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import CheckBox from '@react-native-community/checkbox'
import client from '../../api/client'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../navigation/Router'

type RegisterSProps = NativeStackScreenProps<RootStackParamList, 'RegisterR'>

const RegisterS = ({ navigation }: RegisterSProps) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [userPass, setUserPass] = useState('')
  const handleUserEmail = (text) => {
    setUserEmail(text)
  }
  const handleUserName = (text) => {
    setUserName(text)
  }
  const handleUserPass = (text) => {
    setUserPass(text)
  }
  const handleConnection = async () => {
    const res = await client.post('/auth/signin', {
      username: userName,
      email: userEmail,
      password: userPass,
    })
    console.log(res.data)
  }
  return (
    <View className="flex flex-col justify-center px-6">
      <View className="w-70">
        <Text className="mb-2 text-lg font-medium">Sign Up</Text>

        <Text className="mb-10 text-xs">
          By continuing, you agree to our User Agreement and Privacy Policy
        </Text>

        <View className="mb-6 py-2">
          <View className="flex flex-row items-center">
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
            <Text className="text-xs cursor-pointer ">
              I agree to get emails about cool stuff on Readit
            </Text>
          </View>
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
              placeholder="Username"
              value={userName}
              onChangeText={handleUserName}
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
                  SIGN UP
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
        <View className="flex flex-row items-center">
          <Text>Already a readitor?</Text>
          <Pressable
            onPress={() => {
              navigation.navigate('LandingR', { unit: userName }),
                console.warn(userName, userEmail, userPass),
                console.log(userName, userEmail, userPass)
            }}
          >
            <Text className="ml-1 text-blue-500 uppercase">LOG IN</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default RegisterS
