import { AuthParams } from './../../../domain/usecases/authentication';
import { HttpPostClient } from "data/protocols/httt/http-post-client"

export class RemoteAuthentication {
  constructor (private readonly url: string, private readonly httpPostClient: HttpPostClient){}

  async auth(params: AuthParams): Promise<void> {
    await this.httpPostClient.post({ url: this.url, body: params })
    return Promise.resolve()
  }
}