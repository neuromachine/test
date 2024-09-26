import { type BaseListRequest } from '../../models';
import { type UserEntity } from '../../../entities/users';

export interface UsersRepository {
  getAll: (requestData?: BaseListRequest) => Promise<UserEntity[]>;
}
