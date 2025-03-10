import { View, Text, useWindowDimensions } from 'react-native'
import React, { useRef } from 'react'
import { Movie } from '@/core/actions/movies/movie.interface';

import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import MoviePoster from './movies/MoviePoster';

interface Props {
  movies: Movie[];
}
const MainCarouselShow = ({ movies }: Props) => {
  const ref = useRef<ICarouselInstance>(null);
  const widthDevice = useWindowDimensions().width; // It's used to get dynamically changes of the dimensions when the device change to portrait or landscape etc... 

  return (
    <View className="h-[250px] w-full">
      <Carousel
        ref={ref}
        data={movies}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} posterUrl={item.poster} />
          // <Text>{item.title}</Text>
        )}
        width={200}
        height={350}
        style={{
          width: widthDevice,
          height: 350,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        defaultIndex={1}
        // autoPlay={true}
        // loop={true}
      />
    </View>
  )
}

export default MainCarouselShow