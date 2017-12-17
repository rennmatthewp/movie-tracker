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

describe('postNewAccount', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
           username: 'Julie'
          })
      })
    );
  });
  it('should return a the userObj', async () => {
    const fetch = await apiFetch();
    const mockUserObj= { username: 'Julie' };

    // expect(typeof fetch).toEqual('object');
    expect(fetch).toEqual(mockUserObj);
  });
})


