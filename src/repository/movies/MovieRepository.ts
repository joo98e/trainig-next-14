import ApiRequest from '@/repository/common/ApiRequest'
import { MovieResponse } from '@/repository/movies/types/MovieResponse'

export default class MovieRepository {
  static async findAllMovies() {
    const apiRequest = ApiRequest.init('/movies')
    return await apiRequest.call<MovieResponse[]>()
  }
}
