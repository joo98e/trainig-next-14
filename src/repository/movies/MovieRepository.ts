import ApiRequest from '@/repository/common/ApiRequest'
import { MovieResponse } from '@/repository/movies/types/MovieResponse'

export default class MovieRepository {
  static async findAllMovies() {
    const apiRequest = ApiRequest.init('/movies')
    await new Promise((resolve) => setTimeout(resolve, 5000))
    return await apiRequest.call<MovieResponse[]>()
  }

  static async findMovieById(movieId: number) {
    const apiRequest = ApiRequest.init(`/movies/${movieId}`)
    return await apiRequest.call<MovieResponse>()
  }
}
