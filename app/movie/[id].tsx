import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { getMovieByIdAction } from '@/core/actions/movie/get-movie-by-id.action';
import useMovie from '@/presentation/Movies/hooks/useMovie';
import { ScrollView } from 'react-native';

const MovieScreen = () => {

    const {id} = useLocalSearchParams();

    //? Oldest version to fetch the movie witout tanstack
      //getMovieByIdAction(+id)

    //? Newest version to fetch the movie with tanstack
    const {movieQuery} = useMovie(+id);

    if(movieQuery.isLoading){
      <View className="flex flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    }


  return (
    <ScrollView className="flex-1 bg-white">
        <Text className="text-2xl font-bold text-center">{movieQuery.data?.title}</Text>
        <Text className="text-lg text-center">{movieQuery.data?.description}</Text>
        <Text className="text-lg text-center">{movieQuery.data?.releaseDate.toString()}</Text>
        <Text className="text-lg text-center">{movieQuery.data?.rating}</Text>
        <Text className="text-lg text-center">{movieQuery.data?.poster}</Text>
        <Text className="text-lg text-center">{movieQuery.data?.backdrop}</Text>
        <Text className="text-lg text-center">{movieQuery.data?.budget}</Text>
      </ScrollView>
  )
}

export default MovieScreen