import { View, Text } from 'react-native'
import React from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../navigation/Router'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type LandingSProps = NativeStackScreenProps<RootStackParamList, 'LandingR'>

const LandingS = ({ route }: LandingSProps) => {
  const { unit } = route.params
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  return (
    <View>
      <Text>Welcome {unit}</Text>
    </View>
  )
}

export default LandingS
