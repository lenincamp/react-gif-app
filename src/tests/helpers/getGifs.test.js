import { getGifs } from '../../helpers/getGif';

describe('tests with getGifs Fetch', () => {
  test('should get 10 elements', async () => {
    const gifs = await getGifs('One Punch');
    expect(gifs.length).toBe(10);
  });

  test('should have void array', async () => {
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0);
  });
});
