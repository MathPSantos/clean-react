import { HttpPostClient, HttpPostOptions } from './../protocols/httt/http-post-client';
export class HttpPostClientSpy implements HttpPostClient {
  url?: string;

  async post (options: HttpPostOptions): Promise<void> {
    this.url = options.url
    return Promise.resolve()
  }
}