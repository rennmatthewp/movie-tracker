import { apiFetch } from './apiHelper';

describe('apiHelper', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            results: [{ title: 'The Thing' }]
          })
      })
    );
  });

  it('should return a fetched moviesArray', async () => {
    const fetch = await apiFetch();
    const mockMoviesArray = [{ title: 'The Thing' }];

    expect(typeof fetch).toEqual('object');
    expect(fetch).toEqual(mockMoviesArray);
  });

  xit('should return and error if the fetch fails', () => {});
});
