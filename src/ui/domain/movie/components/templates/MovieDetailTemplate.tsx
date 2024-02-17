import React, { Suspense } from 'react'
import MovieDetailOfPlain from '@/ui/domain/movie/components/organisms/MovieDetailOfPlain'
import MovieDetailOfVideo from '@/ui/domain/movie/components/organisms/MovieDetailOfVideo'
import MovieLoading from '@/ui/domain/movies/components/molecules/MovieLoading'

interface Props {
  movieId: number
}

const MovieDetailTemplate = ({ movieId }: Props) => {
  return (
    <div className={'flex flex-col gap-24'}>
      <Suspense fallback={<MovieLoading />}>
        <MovieDetailOfPlain movieId={movieId} />
      </Suspense>
      <Suspense fallback={<MovieLoading />}>
        <MovieDetailOfVideo movieId={movieId} />
      </Suspense>
    </div>
  )
}

export default MovieDetailTemplate
