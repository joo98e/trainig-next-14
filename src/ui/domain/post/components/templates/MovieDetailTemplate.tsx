import React from 'react'
import MovieDetailOfPlain from '@/ui/domain/post/components/organisms/MovieDetailOfPlain'
import MovieDetailOfVideo from '@/ui/domain/post/components/organisms/MovieDetailOfVideo'

interface Props {
  movieId: number
}

const MovieDetailTemplate = ({ movieId }: Props) => {
  return (
    <div className={'flex flex-col gap-24'}>
      <MovieDetailOfPlain movieId={movieId} />
      <MovieDetailOfVideo movieId={movieId} />
    </div>
  )
}

export default MovieDetailTemplate
