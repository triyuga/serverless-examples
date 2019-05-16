import { wrap, timePromise } from '../../lib/handlers';
// import { db, exit } from '../../lib/db';
import { logInfo, logError } from '../../lib/logging';

const handler = () =>
  Promise.all([
    timePromise('Find a room', () =>
      exampleAsync()
        .then((data) => {
          console.log('data', data);
        })
    ),
  ])
    .then(results =>
      results.forEach(result => {
        if (result.error)
          logError(
            result,
            `[SERVELESS-EXAMPLE] Failed Action "{message}" (duration {duration}ms)`
          );
        else
          logInfo(
            result,
            `[SERVELESS-EXAMPLE] Completed Action "{message}" (duration {duration}ms)`
          );
      })
    )
    // .then(exit);
export default wrap(handler);

const exampleAsync = () => {
  return new Promise((resolve, reject) => {
    // Mock
    setTimeout(() => {
      resolve({
        foo: 'bar',
      })
    }, 3000)
  }) 
};