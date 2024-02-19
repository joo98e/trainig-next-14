import React from 'react'

declare global {
  export type Color = `#${string}`
  export type ReactNode = React.ReactNode

  export type NextGenerateMetaDataProps<T> = {
    params?: T
  }

  export type NextPageProps<T extends object, U extends object> = {
    params?: T
    searchParams?: U
  }
}

export {}
