import { usersService } from '../services/users';
import { type PageProps } from '../domain/interfaces';
import { type BaseListRequest } from '../domain/interfaces/models';
import { toInteger } from '../domain/utils/common/to-integer.util';
import { UsersPagePresenter } from '../presentation/presenters/pages/users-page.presenter';

export default async function MainPageController({
  searchParams,
}: PageProps): Promise<JSX.Element> {
  const limit = toInteger(searchParams._limit);

  const requestData: BaseListRequest = {
    ...(limit > 0 && {
      _limit: limit,
    }),
  };

  // TODO реализуй сервис
  const { data } = await usersService.getAll(requestData);

  // TODO Попробуй сделать такую страницу https://skrinshoter.ru/sRu2xYQcXPd, используя компоненты MUI (https://mui.com/material-ui/all-components/, https://mui.com/x/react-data-grid/);
  // Будет плюсом если ты реализуешь пагинацию https://skrinshoter.ru/sRu73XsptMx
  return <UsersPagePresenter data={data} />;
}
