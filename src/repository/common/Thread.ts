export default class Thread {
  static async sleep(delay: number) {
    await new Promise((resolve, reject) => setTimeout(() => resolve('done'), delay))
  }
}
