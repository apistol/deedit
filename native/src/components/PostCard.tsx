import { View, Text, Image } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Post } from '../Types/types'
dayjs.extend(relativeTime)

interface PostCardProps {
  post: Post
}

export default function PostCard({
  post: {
    identifier,
    slug,
    title,
    body,
    subName,
    createdAt,
    voteScore,
    userVote,
    commentCount,
    url,
    username,
  },
}: PostCardProps) {
  return (
    <View key={identifier} className="flex my-4 mx-4 bg-white rounded flex-row">
      <View className="w-10 py-3 text-center bg-gray-200 rounded-l flex flex-col justify-center align-items-center">
        <View className="w-6 mx-auto text-gray-400 rounded cursor-pointer hover:bg-gray-300 hover:text-red-500">
          <AntDesign name="arrowup" size={25} />
          <Text className="text-xs font-bold text-center">{voteScore}</Text>
        </View>
        <View className="w-6 mx-auto text-gray-400 rounded cursor-pointer hover:bg-gray-300 hover:text-red-500">
          <AntDesign name="arrowdown" size={25} />
        </View>
      </View>
      <View className="w-full p-2">
        <View className="flex items-left">
          <Image
            source={require('../assets/images/profile.png')}
            className="w-6 h-6 mr-1 rounded-full cursor-pointer"
          />
          <View className="flex-row">
            <View className="w-44">
              <Text className="text-xs font-bold cursor-pointer hover:underline">
                /r/{subName}
              </Text>
            </View>
            <View className="w-40 pl-2">
              <Text className="text-xs text-gray-500">
                <Text className="mx-1">•</Text>
                Posted by
                <Text>/u/{username}</Text>
                <Text className="mx-1 hover:underline">
                  {' '}
                  {dayjs(createdAt).fromNow()}
                </Text>
              </Text>
            </View>
          </View>
          <Text className="my-1 text-lg font-medium">{title}</Text>
          <View className="w-80">
            <Text className="my-1 text-sm">{body}</Text>
          </View>
          <View className="flex flex-row">
            <Text className="font-bold">{commentCount} Comments </Text>
            <Text className="font-bold">Share </Text>
            <Text className="font-bold">Save</Text>
          </View>
        </View>
      </View>
    </View>
  )
}
