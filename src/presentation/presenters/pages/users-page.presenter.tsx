'use client';

import { type ComplexPresenterProps } from '../../interfaces/common';
import { type UserEntity } from '../../../domain/entities/users';

export type UsersPagePresenterProps = ComplexPresenterProps<{
  data: {
    items: UserEntity[];
  };
}>;

export function UsersPagePresenter({
  data,
}: UsersPagePresenterProps): JSX.Element {
  return <div>UsersPagePresenter</div>;
}
