import React from 'react'
import MovieList from '@/ui/domain/posts/components/templates/MovieList'
import MovieRepository from '@/repository/movies/MovieRepository'

interface Props {}

const Page = async ({}: Props) => {
  const movieResponses = await MovieRepository.findAllMovies()
  return <MovieList movies={movieResponses} />
}

export default Page
