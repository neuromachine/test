import { type GeoEntity } from '../geo';

export interface AddressEntity {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoEntity;
}
