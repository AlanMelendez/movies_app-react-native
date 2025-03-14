import { movieApi } from "@/core/api/movie-api";
import { MoviesDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mappers";

export const upcomingMovies = async (page: number = 1) => {
    try {

        const {data} = await movieApi.get<MoviesDBMoviesResponse>('/upcoming');


        const movies = data.results.map(
            movie => MovieMapper.fromTheMovieDBToMovie(movie)
        );

        return [...movies];
        
    } catch (error) {
        console.log(error)
        throw "Cannot fetch now upcoming movies";
    }
}