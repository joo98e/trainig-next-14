type InternalLinkType = keyof GetPathnameArguments

type GetPathnameArguments = {
  home: null
  exampleV1: null
  exampleV2: null
  movies: null
  movie: { id: string }
}

export default class InternalLinker {
  private buildUrl!: (...args: any) => string

  private static readonly HOME = new InternalLinker(() => '/')
  private static readonly EXAMPLE_V1 = new InternalLinker(() => '/example/v1')
  private static readonly EXAMPLE_V2 = new InternalLinker(() => '/example/v2')
  private static readonly MOVIES = new InternalLinker(() => '/example/movies')
  private static readonly MOVIE = new InternalLinker((movieInfo: GetPathnameArguments['movie']) => `/example/movies/${movieInfo.id}`)

  static getPathname<K extends InternalLinkType>(type: K, data: GetPathnameArguments[K]) {
    switch (type) {
      case 'home':
        return InternalLinker.HOME.buildUrl()
      case 'exampleV1':
        return InternalLinker.EXAMPLE_V1.buildUrl()
      case 'exampleV2':
        return InternalLinker.EXAMPLE_V2.buildUrl()
      case 'movies':
        return InternalLinker.MOVIES.buildUrl()
      case 'movie':
        return InternalLinker.MOVIE.buildUrl(data?.id)
      default:
        throw new Error(`Unknown link type: ${type}`)
    }
  }

  private constructor(buildUrl: (...args: any) => string) {
    this.buildUrl = buildUrl
  }
}
