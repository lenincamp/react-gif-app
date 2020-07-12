import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Test in the hook useFetchGifs', () => {
  test('should return the initial state', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('One Punch')
    );
    const { data, loading } = result.current;
    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test('should return an array of images and loading in false', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('One Punch')
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;
    expect(data).toEqual(10);
    expect(loading).toBe(false);
  });
});
