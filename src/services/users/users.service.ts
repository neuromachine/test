import { type UsersServiceInterface } from '../../domain/interfaces/services/users';
import { type UsersRepository } from '../../domain/interfaces/repositories/users';

// TODO реализуй сервис используя UsersRepository
export class UsersService implements UsersServiceInterface {
  constructor(private readonly usersRepository: UsersRepository) {}

  async getAll(){

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }



      const data = await response.json();

      return data;
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  };
}

export const usersService = new UsersService();
