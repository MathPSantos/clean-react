import { faker } from '@faker-js/faker';

import { mockAuthentication } from './../../../domain/__test__/mock-authentication';
import { HttpPostClientSpy } from './../../__test__/mock-http-client';
import { RemoteAuthentication } from './remote-authentication';

type SutTypes = {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpPostClientSpy)

    return { sut, httpPostClientSpy }
}

describe('RemoteAuthentication', () => {
  it('should call HttpPostClient with correct URL', async () => {
    const url = faker.internet.url();
    const { sut, httpPostClientSpy } = makeSut(url);
    await sut.auth(mockAuthentication())
    expect(httpPostClientSpy.url).toBe(url)
  });

  it('should call HttpPostClient with correctbody', async () => {
    const { sut, httpPostClientSpy } = makeSut();
    const authParams = mockAuthentication();
    await sut.auth(authParams)
    expect(httpPostClientSpy.body).toEqual(authParams)
  });
});