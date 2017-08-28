import { delay } from '../utils';

export async function fetchAll() {
  await delay(1000);
  return {
    success: true,
    data: {
      title: 'This is the title from async operation',
      description: 'This is description from async operation',
    },
  };
}
