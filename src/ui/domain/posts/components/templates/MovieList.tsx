import React from 'react'
import { MovieResponse } from '@/repository/movies/types/MovieResponse'

interface Props {
  movies: MovieResponse[]
}

const MovieList = ({ movies }: Props) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '4rem' }}>
      {movies.map((movie, index) => {
        return (
          <div key={index} style={{ width: '100%', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', transition: '0.3s', borderRadius: '5px', position: 'relative' }}>
            <img
              src={movie.poster_path}
              alt={movie.title}
              style={{ width: '100%', height: '200px', borderRadius: '5px 5px 0 0', objectFit: 'cover', objectPosition: 'top' }}
            />
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '200px',
                background: 'linear-gradient(to bottom, rgba(255,255,255,0) 60%, rgba(255,255,255,1) 100%)',
                borderRadius: '5px 5px 0 0',
              }}
            ></div>
            <div style={{ padding: '2px 16px' }}>
              <h4>
                <b>{movie.title}</b>
              </h4>
              <p>{movie.overview}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MovieList
