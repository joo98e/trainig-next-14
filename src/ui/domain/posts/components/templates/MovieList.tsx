import React from 'react'
import { MovieResponse } from '@/repository/movies/types/MovieResponse'
import MovieCard from '@/ui/domain/posts/components/molecules/Movie'

interface Props {
  movies: MovieResponse[]
}

const MovieList = ({ movies }: Props) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '4rem' }}>
      {movies.map((movie) => {
        return <MovieCard key={movie.id} movie={movie} />
      })}
    </div>
  )
}

export default MovieList
