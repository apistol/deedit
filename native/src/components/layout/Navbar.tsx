import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'

const Navbar = () => {
  return (
    <View className="fixed inset-x-0 top-0 z-10 flex items-center justify-center h-12 px-5 bg-white">
      <View className="flex-row items-center">
        <View className="w-10">
          <Pressable onPress={() => console.log('logoPressed!')}>
            <Image
              source={require('../../assets/images/logo.png')}
              className="w-8 h-8 mr-2"
            />
          </Pressable>
        </View>
        <View className="text-2xl font-semibold w-80">
          <Pressable onPress={() => console.log('textPressed!')}>
            <Text>readit</Text>
          </Pressable>
        </View>
        <View className="w-10">
          <Pressable onPress={() => console.log('profilePressed!')}>
            <Image
              source={require('../../assets/images/profile.png')}
              className="w-8 h-8 mr-2"
            />
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default Navbar
