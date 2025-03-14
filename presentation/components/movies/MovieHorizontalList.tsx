import { View, Text,FlatList, NativeScrollEvent, NativeSyntheticEvent } from 'react-native'
import React, { useRef } from 'react'
import { Movie } from '@/infrastructure/interfaces/movie.interface'
import MoviePoster from './MoviePoster';

interface PropPopularityMovies{
  movies: Movie[];
  title?:string;
  className?: string;
  loadNextPage: () => void;
}
//! It's a reusable component, so please ensure that you send only the necessary properties.
const MovieHorizontalList = ({movies, title, className, loadNextPage}:PropPopularityMovies) => {

  const isLoading = useRef(false);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent> ) =>{
    if (isLoading.current) return;

    const {contentOffset, layoutMeasurement, contentSize} = event.nativeEvent;

    //Make calculate to verify if we state close of the end scroll:
    const isEndClose = (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width;

    if(!isEndClose) return;

    isLoading.current = true;


    console.log('Loading next movies...')

    loadNextPage && loadNextPage();


  }

  return (
    <View className={`${className}`}>
      <Text className='text-3xl font-bold px-4 mb-3 mt-2'>{title ?? 'Popularity'}</Text>
      <FlatList
        horizontal
        data={movies}
        showsHorizontalScrollIndicator={false} //Delete scrollbar
        keyExtractor={(item)=> item.id.toString()} //Manage id data
        renderItem={({item})=> (
            <MoviePoster id={item.id} posterUrl={item.poster} smallPoster/> //? Send small poster for show small cards
        )}
        onScroll={onScroll}

      />
    </View>
  )
}

export default MovieHorizontalList