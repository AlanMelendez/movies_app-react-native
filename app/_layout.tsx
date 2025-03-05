import { View, Text } from 'react-native'
import React from 'react'
import '../global.css'
const RootLayout = () => {
  return (
    <View className='flex flex-1 justify-center items-center'>
      <Text className='text-3xl text-cyan-600'>RootLayout</Text>
    </View>
  )
}

export default RootLayout