import { movieApi } from "@/core/api/movie-api";
import { MoviesDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mappers";

export const nowPlaying = async (page: number = 1) => {
    try {

        const {data} = await movieApi.get<MoviesDBMoviesResponse>('/now_playing');


        const movies = data.results.map(
            movie => MovieMapper.fromTheMovieDBToMovie(movie)
        );

        //console.log(JSON.stringify(movies, null, 2));
        return [...movies];
        
    } catch (error) {
        console.log(error)
        throw "Cannot fetch now playing movies";
    }
}