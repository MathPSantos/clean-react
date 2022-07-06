import { HttpPostClient, HttpPostOptions } from './../protocols/httt/http-post-client';
export class HttpPostClientSpy implements HttpPostClient {
  url?: string;
  body?: object;

  async post (options: HttpPostOptions): Promise<void> {
    this.url = options.url
    this.body = options.body
    return Promise.resolve()
  }
}