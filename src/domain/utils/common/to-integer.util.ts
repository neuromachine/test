import { isString } from './is-string.util';
import { isNumber } from './is-number.util';

export function toInteger(value: unknown): number {
  if (!isString(value) && !isNumber(value)) {
    return 0;
  }
  const number = isString(value) ? Number(value) : value;

  if (number === Infinity || number === -Infinity) {
    return 0;
  }

  if (Number.isNaN(number)) {
    return 0;
  }

  if (number % 1 !== 0) {
    return toInteger(number.toString().split('.')[0]);
  }

  return number;
}
