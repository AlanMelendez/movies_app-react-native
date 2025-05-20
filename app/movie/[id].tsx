import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { getMovieByIdAction } from '@/core/actions/movie/get-movie-by-id.action';
import useMovie from '@/presentation/Movies/hooks/useMovie';
import { ScrollView } from 'react-native';
import MovieHeader from '@/presentation/components/movie/MovieHeader';

const MovieScreen = () => {

    const {id} = useLocalSearchParams();

    //? Oldest version to fetch the movie witout tanstack
      //getMovieByIdAction(+id)

    //? Newest version to fetch the movie with tanstack
    const {movieQuery} = useMovie(+id);

    if(movieQuery.isLoading || !movieQuery.data){
     return (
        <View className="flex flex-1 justify-center items-center">
          <ActivityIndicator size="large" color="#0000ff" />
          <Text>Loading...</Text>
        </View>
     )
    }


  return (
    <ScrollView className="flex-1 bg-white">
        <MovieHeader originalTitle={movieQuery.data.originalTitle} poster={movieQuery.data.poster} title={movieQuery.data.title}   />
    </ScrollView>
  )
}

export default MovieScreen