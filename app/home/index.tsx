import { View, Text } from 'react-native'
import React from 'react'
import { useMovies } from '@/presentation/Movies/hooks/useMovies'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import MainCarouselShow from '@/presentation/components/MainCarouselShow'

const HomeScreen = () => {
 
    const safeArea = useSafeAreaInsets();
    const {nowPlayingQuery} = useMovies();

    if(nowPlayingQuery.isLoading){
      return (
        <View className='flex-1 justify-center items-center'>
        <View className='flex flex-row items-center space-x-4'>
          <View className='w-6 h-6 mr-1 bg-blue-500 rounded-full animate-pulse'></View>
          <View className='w-6 h-6 mr-1 bg-blue-500 rounded-full animate-pulse delay-150'></View>
          <View className='w-6 h-6 mr-1 bg-blue-500 rounded-full animate-pulse delay-300'></View>
        </View>
      </View>
      );
    }


  return (
    <View className='mt-4' style={{paddingTop: safeArea.top}}>
      <Text className='text-3xl font-bold px-4 mb-2'>Home Screen</Text>

      {/* Images Carousel */}

      <MainCarouselShow/>
    </View>
  )
}

export default HomeScreen