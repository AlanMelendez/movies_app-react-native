import { View, Text,SafeAreaView } from 'react-native'
import React from 'react'
import { useMovies } from '@/presentation/Movies/hooks/useMovies'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import MainCarouselShow from '@/presentation/components/MainCarouselShow'
import MovieHorizontalList from '@/presentation/components/movies/MovieHorizontalList'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'

const HomeScreen = () => {
 
    const safeArea = useSafeAreaInsets();
    const {nowPlayingQuery, popularMoviesQuery, topRatedMoviesQuery, upcomingMoviesQuery} = useMovies();

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
    <GestureHandlerRootView style={{flex: 1}}>
      <ScrollView className='mt-4 ' style={{paddingTop: safeArea.top}} nestedScrollEnabled>
      <Text className='text-3xl font-bold px-4 mb-2'>Movies App</Text>

      {/* Images Carousel */}  
      <MainCarouselShow movies={nowPlayingQuery.data ?? []}/>

      {/* Horizontal Movies List */}
      <MovieHorizontalList movies={popularMoviesQuery.data ?? []} />

      {/* Horizontal Movies List */}
      <MovieHorizontalList title='Top Rated Movies' movies={topRatedMoviesQuery.data ?? []} />

      {/* Horizontal Movies List */}
      <MovieHorizontalList title='Upcoming just on Movies' movies={upcomingMoviesQuery.data ?? []} />
    </ScrollView>
    </GestureHandlerRootView>
    
  )
}

export default HomeScreen