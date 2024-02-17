import React from 'react'
import { MovieDetailResponse } from '@/repository/movies/types/MovieDetailResponse'
import BdsLinker from '@/ui/bds/components/linker'

interface Props {
  movie: MovieDetailResponse
}

const MovieDetail = ({ movie }: Props) => {
  return (
    <div className="max-w-md  bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl m-4">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:w-48" src={movie.poster_path} alt={movie.title} />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{movie.original_title}</div>
          <BdsLinker className="block mt-1 text-lg leading-tight font-medium text-black hover:underline" href={movie.homepage}>
            {movie.title}
          </BdsLinker>
          <p className="mt-2 text-gray-500">{movie.overview}</p>
        </div>
      </div>
      <div className="p-8">
        <h4 className="font-bold">Genres</h4>
        <p>{movie.genres.map((genre) => genre.name).join(', ')}</p>
        <h4 className="font-bold mt-4">Production Companies</h4>
        <p>{movie.production_companies.map((company) => company.name).join(', ')}</p>
        <h4 className="font-bold mt-4">Languages</h4>
        <p>{movie.spoken_languages.map((language) => language.name).join(', ')}</p>
      </div>
    </div>
  )
}

export default MovieDetail
