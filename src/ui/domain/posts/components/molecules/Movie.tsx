import React from 'react'
import { MovieResponse } from '@/repository/movies/types/MovieResponse'

interface Props {
  movie: MovieResponse
}

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="w-24 shadow-md transition-transform duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-1 rounded-md ">
      <img className="max-w-12 h-12 rounded-full object-cover object-top" src={movie.poster_path} alt={movie.title} />
      <div className="p-4">
        <h4 className="font-bold">{movie.title}</h4>
        <p>{movie.overview}</p>
      </div>
    </div>
  )
}

export default MovieCard
