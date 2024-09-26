import { type UsersServiceInterface } from '../../domain/interfaces/services/users';
import { type UsersRepository } from '../../domain/interfaces/repositories/users';

// TODO реализуй сервис используя UsersRepository
export class UsersService implements UsersServiceInterface {
  constructor(private readonly usersRepository: UsersRepository) {}
}

export const usersService = new UsersService();
