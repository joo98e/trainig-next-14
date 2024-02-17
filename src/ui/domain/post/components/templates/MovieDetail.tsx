import React from 'react'
import BdsTypography from '@/ui/bds/components/typography/index'
import { MovieResponse } from '@/repository/movies/types/MovieResponse'

interface Props {
  movie: MovieResponse
}

const MovieDetail = ({ movie }: Props) => {
  return (
    <div>
      <BdsTypography variant={'body1'}>{movie.title}</BdsTypography>
      <br />
    </div>
  )
}

export default MovieDetail
