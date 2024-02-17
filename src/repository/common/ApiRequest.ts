export default class ApiRequest {
  private baseUrl: string = 'https://nomad-movies.nomadcoders.workers.dev'
  private readonly endpoint!: string

  static init(endpoint: string): ApiRequest {
    return new ApiRequest(endpoint)
  }

  buildUrl() {
    return this.baseUrl + this.endpoint
  }

  async call<T>(): Promise<T> {
    const destination = this.buildUrl()
    return await (await fetch(destination)).json()
  }

  private constructor(endpoint: string) {
    this.endpoint = endpoint
  }
}
