import { View, Text, Pressable, Image } from 'react-native';

import { Movie } from '@/infrastructure/interfaces/movie.interface';

//! Please use just props do you need to show poster. Don't use another prop.
interface Props {
  id: number;
  posterUrl: string;
  smallPoster?: boolean;
  className?: string;
}

const MoviePoster = ({ id, posterUrl, smallPoster = false, className }: Props) => {
  return (
    <Pressable className={`active:opacity-90 px-2 ${className}`}>
      <Image
        source={{ uri: posterUrl }}
        className="shadow-lg rounded-2xl w-full h-full"
        style={{
          width: smallPoster ? 85 : 150,
          height: smallPoster ? 130 : 250,
        }}
        resizeMode="cover"
      />
    </Pressable>
  );
};
export default MoviePoster;