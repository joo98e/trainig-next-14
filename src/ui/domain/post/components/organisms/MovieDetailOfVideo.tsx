import React from 'react'
import MovieRepository from '@/repository/movies/MovieRepository'

interface Props {
  movieId: number
}

const MovieDetailOfVideo = async ({ movieId }: Props) => {
  const videos = await MovieRepository.findMovieVideoById(movieId)
  return (
    <div>
      <span>{videos.length}개의 비디오</span>
    </div>
  )
}

export default MovieDetailOfVideo
