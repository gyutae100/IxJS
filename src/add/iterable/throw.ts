import { IterableX } from '../../iterable';
import { _throw as throwStatic } from '../../iterable/throw';

export function _throw<T>(error: any): IterableX<T> {
  return new IterableX<T>(throwStatic<T>(error));
}

IterableX.throw = _throw;

declare module '../../iterable' {
  namespace IterableX {
    function _throw<T>(error: any): IterableX<T>;
    export { _throw as throw }
  }
}