export type HttpPostOptions = {
  url: string;
  body?: object;
}

export interface HttpPostClient {
  post (options: HttpPostOptions): Promise<void>
}
