import { type BaseListRequest } from '../../models';
import { type UserEntity } from '../../../entities/users';
import { type SafeResponse } from '../../safe-response.interface';

export interface UsersServiceInterface {
  getAll: (requestData: BaseListRequest) => Promise<SafeResponse<UserEntity[]>>;
}
