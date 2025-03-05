import { movieApi } from "@/core/api/movie-api";

export const nowPlaying = async (page: number = 1) => {
    try {

        const {data} = await movieApi.get('/now_playing');

        console.log(JSON.stringify(data.results, null, 2));

        return [...data.results];
        
    } catch (error) {
        console.log(error)
        throw "Cannot fetch now playing movies";
    }
}