import React from 'react'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import MovieDetailTemplate from '@/ui/domain/movie/components/templates/MovieDetailTemplate'

export const metadata: Metadata = {
  title: 'Post',
  description: 'Generated by Next.js',
}

type PageParams = {
  movieId: string
}

type PageSearchParams = {}

interface Props extends NextPageProps<PageParams, PageSearchParams> {}

const Page = ({ params, searchParams }: Props) => {
  if (!params?.movieId || isNaN(Number(params.movieId))) {
    return redirect('/400')
  }

  const movieId = Number(params?.movieId)
  return <MovieDetailTemplate movieId={movieId} />
}

export default Page