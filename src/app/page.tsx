import { usersService } from '../services/users';
import { type PageProps } from '../domain/interfaces';
import { type BaseListRequest } from '../domain/interfaces/models';
import { toInteger } from '../domain/utils/common/to-integer.util';
import { UsersPagePresenter } from '../presentation/presenters/pages/users-page.presenter';
import type { CompanyEntity } from '../domain/entities/company';
import type { AddressEntity } from '../domain/entities/address/address-entity.interface.ts';

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
  const data = await usersService.getAll(requestData);

  // TODO Попробуй сделать такую страницу https://skrinshoter.ru/sRu2xYQcXPd, используя компоненты MUI (https://mui.com/material-ui/all-components/, https://mui.com/x/react-data-grid/);
  // Будет плюсом если ты реализуешь пагинацию https://skrinshoter.ru/sRu73XsptMx

  // FIXME Реализованы требования в минимальной вариации, и с учетом того, что это первый опыт работы с реакт, в целом 90% времени заняло понимание вложенности сущностей и прниципа их применения.
  // Вникнуть в данный  применяемый "стек" - интересно и вполне готов побыть на некоторый периот в роли junior (практикуя все заявленые требования), лично - интересно вникунуть в подобную практику применения
  // бегло посмотрел документацию по применяемым инструментам, понял что они доминируеющие и по популятрности (это интересно вдвойне) - попытался применить,
  // emotion фактически не применен, т.к. для валидного использования (с попыткой сохранить затребуемое оформление), полагаю нужно детальнее разбираться с рендером Material UI (grid)
  // однако для затребуемой реализации нужны часы и возможно дни (именно в моем случае т.к. впервые буду знакомится) для повторния указанного макета как функционально так и визуально

  // более к сожалению себе позволить сейчас не могу из за временных ограничений
  // желаю успехов в работе


  return <UsersPagePresenter data={data} />;
}
