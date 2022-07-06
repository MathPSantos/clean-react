import { faker } from '@faker-js/faker';
import { AuthParams } from './../usecases/authentication';

export const mockAuthentication = (): AuthParams => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
})