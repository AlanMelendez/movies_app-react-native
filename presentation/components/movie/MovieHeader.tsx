import { View, Text, useWindowDimensions, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router';

import IonIcon from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

interface PropsMovieDetail {
    poster:string;
    title:string;
    originalTitle:string;
}

const MovieHeader = ({poster,title,originalTitle}: PropsMovieDetail) => {

    const {height:screenHeight} = useWindowDimensions();

    const navigation = useNavigation();

    
  return (
    <>
        {/* Gradient background */}
        <LinearGradient
        // Background Linear Gradient
        colors={[ 'rgba(0,0,0,0.3)', 'transparent',]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{height: screenHeight * 0.7, position: 'absolute', width: '100%', zIndex: 1}}
      />


                    {/* Pressable button to return */}
        <View className="absolute top-10 left-5" style={{zIndex: 99}}>   
            <Pressable onPress={() => navigation.goBack()}>
                <IonIcon name="arrow-back" size={30} color="white" className='shadow' />
            </Pressable>
        </View>


                    {/* Information */}

      <View style={{height: screenHeight * 0.7}} className="shadow-xl shadow-black/20">
        <View className="flex flex-1 rounded-b-[25px] overflow-hidden">
            <Image 
                source={{uri: poster}}
                className="flex-1"
                resizeMode="cover"
            />
        </View>
      </View>
      <View className="px-5 mt-5">
        <Text className="font-normal  ">{originalTitle}</Text>
        <Text className="text-gray-600 mt-2 font-semibold text-2xl">{title}</Text>
      </View>   
    </>
  )
}

export default MovieHeader