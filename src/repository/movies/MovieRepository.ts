import ApiRequest from '@/repository/common/ApiRequest'
import { MovieResponses } from '@/repository/movies/types/MovieResponses'

export default class MovieRepository {
  static async findAllMovies() {
    const apiRequest = ApiRequest.init('/movies')
    return await apiRequest.call<MovieResponses>()
  }
}
