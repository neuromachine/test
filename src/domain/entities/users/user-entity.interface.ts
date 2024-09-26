import { type CompanyEntity } from '../company';
import { type AddressEntity } from '../address/address-entity.interface';

export interface UserEntity {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: CompanyEntity;
  address: AddressEntity;
}
