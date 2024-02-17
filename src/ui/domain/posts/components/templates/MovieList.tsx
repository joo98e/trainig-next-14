import React from 'react'
import { MovieSummaryResponse } from '@/repository/movies/types/MovieSummaryResponse'
import MovieCard from '@/ui/domain/posts/components/molecules/MovieCard'

interface Props {
  movies: MovieSummaryResponse[]
}

const MovieList = ({ movies }: Props) => {
  return (
    <div className={'grid grid-cols-2 gap-16'}>
      {movies.map((movie) => {
        return <MovieCard key={movie.id} movie={movie} />
      })}
    </div>
  )
}

export default MovieList
