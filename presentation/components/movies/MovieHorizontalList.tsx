import { View, Text,FlatList } from 'react-native'
import React from 'react'
import { Movie } from '@/infrastructure/interfaces/movie.interface'
import MoviePoster from './MoviePoster';

interface PropPopularityMovies{
  movies: Movie[];
  title?:string;
}
//! It's a reusable component, so please ensure that you send only the necessary properties.
const MovieHorizontalList = ({movies, title}:PropPopularityMovies) => {
  return (
    <View>
      <Text className='text-3xl font-bold px-4 mb-3'>{title ?? 'Popularity'}</Text>
      <FlatList
        horizontal
        data={movies}
        showsHorizontalScrollIndicator={false} //Delete scrollbar
        keyExtractor={(item)=> item.id.toString()} //Manage id data
        renderItem={({item})=> (
            <MoviePoster id={item.id} posterUrl={item.poster} smallPoster/> //? Send small poster for show small cards
        )}

      />
    </View>
  )
}

export default MovieHorizontalList