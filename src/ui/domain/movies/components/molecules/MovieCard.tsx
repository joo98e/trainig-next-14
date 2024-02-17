import React from 'react'
import { MovieSummaryResponse } from '@/repository/movies/types/MovieSummaryResponse'
import Link from 'next/link'
import InternalLinker from '@/utils/InternalLinker'

interface Props {
  movie: MovieSummaryResponse
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Link href={InternalLinker.getPathname('movie', { id: String(movie.id) })}>
      <div className="flex border rounded-md overflow-hidden shadow-md hover:shadow-lg hover:translate-y-[-4px] transition-all duration-75r">
        <img className="w-64 h-auto object-cover" src={movie.poster_path} alt={movie.title} />
        <div className="flex flex-col p-4 w-2/3">
          <h4 className="font-bold mb-2">{movie.title}</h4>
          <p className="mb-2">{movie.overview}</p>

          <div className={'mt-auto self-end'}>
            <p className="mb-2">
              <strong>Release Date : </strong>
              <span>{movie.release_date}</span>
            </p>
            <p className="mb-2">
              <strong>Popularity : </strong>
              <span>{movie.popularity}</span>
            </p>
            <p className="mb-2">
              <strong>Vote Average : </strong>
              <span>{movie.vote_average}</span>
            </p>
            <p className="mb-2">
              <strong>Vote Count : </strong>
              <span>{movie.vote_count}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default MovieCard
