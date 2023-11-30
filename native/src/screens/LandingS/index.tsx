import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../navigation/Router'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import Layout from '../../components/layout/Layout'
import PostCard from '../../components/PostCard'
import { Post } from '../../Types/types'
import client from '../../api/client'

type LandingSProps = NativeStackScreenProps<RootStackParamList, 'LandingR'>

const LandingS = ({ route }: LandingSProps) => {
  const { unit } = route.params
  const [posts, setPosts] = useState<Post[]>([])
  const renderPost = ({ item }) => {
    return <PostCard post={item} key={item.identifier} />
  }
  useEffect(() => {
    const handleConnection = async () => {
      const res = await client.get('/post')
      setPosts(res.data)
      console.log(res.data)
    }
    handleConnection()
  }, [])
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  return (
    <View>
      <Layout />
      <FlatList
        data={posts}
        keyExtractor={(item) => item.identifier}
        renderItem={renderPost}
        disableScrollViewPanResponder
        className="mb-20"
      />
    </View>
  )
}

export default LandingS
