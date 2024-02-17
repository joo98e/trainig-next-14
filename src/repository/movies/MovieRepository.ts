import ApiRequest from '@/repository/common/ApiRequest'
import { MovieSummaryResponse } from '@/repository/movies/types/MovieSummaryResponse'
import { MovieDetailResponse } from '@/repository/movies/types/MovieDetailResponse'
import { MovieDetailVideoResponse } from '@/repository/movies/types/MovieDetailVideoResponse'
import { MovieDetailCreditResponse } from '@/repository/movies/types/MovieDetailCreditResponse'
import { MovieDetailSimilarResponse } from '@/repository/movies/types/MovieDetailSimilarResponse'

export default class MovieRepository {
  static async findAllMovies() {
    const apiRequest = ApiRequest.init('/movies')
    return await apiRequest.call<MovieSummaryResponse[]>()
  }

  static async findMovieById(movieId: number) {
    const apiRequest = ApiRequest.init(`/movies/${movieId}`)
    return await apiRequest.call<MovieDetailResponse>()
  }

  static async findMovieVideoById(movieId: number) {
    const apiRequest = ApiRequest.init(`/movies/${movieId}/videos`)
    return await apiRequest.call<MovieDetailVideoResponse[]>()
  }

  static async findMovieCreditsById(movieId: number) {
    const apiRequest = ApiRequest.init(`/movies/${movieId}/credits`)
    return await apiRequest.call<MovieDetailCreditResponse[]>()
  }

  static async findMovieSimilarById(movieId: number) {
    const apiRequest = ApiRequest.init(`/movies/${movieId}/similar`)
    return await apiRequest.call<MovieDetailSimilarResponse[]>()
  }
}
