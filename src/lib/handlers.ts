import { Event, Context, Callback } from '../types';

export const wrap = <E extends Event, R>(
  handler: (event: E, context: Context) => Promise<R>
) => (event: E, context: Context, callback: Callback<R>) =>
  handler(event, context)
    .then(res => callback(null, res))
    .catch(callback);

export const timePromise = (
  message: string,
  fn: () => Promise<any>
): Promise<any> => {
  const onPromiseDone = () => Date.now() - start;
  const start = Date.now();
  return fn()
    .then(result => ({ message, result, duration: onPromiseDone() }))
    .catch(error => ({ message, error, duration: onPromiseDone() }));
};