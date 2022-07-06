export type HttpPostOptions = {
  url: string;
}

export interface HttpPostClient {
  post (options: HttpPostOptions): Promise<void>
}
