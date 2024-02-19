import React from 'react'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import MovieDetailTemplate from '@/ui/domain/movie/components/templates/MovieDetailTemplate'
import MovieRepository from '@/repository/movies/MovieRepository'

export async function generateMetadata({ params }: NextGenerateMetaDataProps<PageParams>): Promise<Metadata> {
  if (!params?.movieId) return { title: 'Movie Detail' }

  const movie = await MovieRepository.findMovieById(Number(params.movieId))

  return {
    title: movie.title,
    description: movie.overview,
  }
}

type PageParams = {
  movieId: string
}

type PageSearchParams = {}

interface Props extends NextPageProps<PageParams, PageSearchParams> {}

const Page = ({ params }: Props) => {
  if (!params?.movieId || isNaN(Number(params.movieId))) {
    return redirect('/400')
  }

  const movieId = Number(params?.movieId)
  return <MovieDetailTemplate movieId={movieId} />
}

export default Page
