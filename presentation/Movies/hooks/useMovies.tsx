import { nowPlaying } from "@/core/actions/movies/now-playin.action";
import { popularMoviesAction } from "@/core/actions/movies/popular.action";
import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {
    const nowPlayingQuery = useQuery({
        queryKey: ['movies','nowPlaying'],
        queryFn: () => nowPlaying(),
        staleTime: 1000 * 60 *60 * 24 // This is time of save data on cache, you can change it if you need more or less time.
    });

    const popularMoviesQuery = useQuery({
        queryKey: ['movies','popular'],
        queryFn: () => popularMoviesAction(),
        staleTime: 1000 * 60 *60 * 24 // This is time of save data on cache, you can change it if you need more or less time.
    });

    return {
        nowPlayingQuery,
        popularMoviesQuery,
    }
};