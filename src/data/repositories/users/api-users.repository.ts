import { type UsersRepository } from '../../../domain/interfaces/repositories/users';
import { type Api } from '../../interfaces';

// TODO Реализуй интерфейс для получения пользователей (методы интерфейса можно менять)

// Как вариант можно использовать сервис https://jsonplaceholder.typicode.com/ (url для получения пользователей https://jsonplaceholder.typicode.com/users)
export class ApiUsersRepository implements UsersRepository {
  constructor(private readonly api: Api) {}
}

export const apiUsersRepository = new ApiUsersRepository();
