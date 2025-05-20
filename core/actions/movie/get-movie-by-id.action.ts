import { movieApi } from "@/core/api/movie-api";
import { CompleteMovie } from "@/infrastructure/interfaces/movie.interface";
import { MovieDBMovieResponse } from "@/infrastructure/interfaces/moviedb-movie.response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mappers";

export const getMovieByIdAction = async (
  id: number | string
): Promise<CompleteMovie> => {
  try {
    const { data } = await movieApi.get<MovieDBMovieResponse>(`${id}`);
    
    console.warn('The movie has been loaded, log since get-movie-by-id-action', data.original_title);

    return MovieMapper.fromTheMovieDBToCompleteMovie(data);

  } catch (error) {
    console.log(error);
    throw "Cannot fetch now playing movies";
  }
};
