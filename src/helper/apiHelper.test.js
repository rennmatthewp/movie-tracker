import { apiFetch, postNewAccount, postUserLogin, postFav } from './apiHelper';

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

  it('should return and error if the fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        
      })
    );

    const fetch = await apiFetch();

    expect(fetch).toEqual();
  });
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

  it('should return the userObj', async () => {
    const mockUserObj= { username: 'Julie' };
    const fetch = await postNewAccount(mockUserObj);

    expect(typeof fetch).toEqual('object');
    expect(fetch).toEqual(mockUserObj);
  });

  it('should return and error if the fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 404
      })
    );

    const mockUserObj= { username: 'Julie' };
    const fetch = await postNewAccount(mockUserObj);

    expect(fetch).toEqual(null);
  });
});

describe('postUserLogin', () => {
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

  it('should return the userObj', async () => {
    const mockUserObj= { username: 'Julie' };
    const fetch = await postUserLogin(mockUserObj);
  
    expect(typeof fetch).toEqual('object');  
    expect(fetch).toEqual(mockUserObj);
  });

  it('should return and error if the fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 404
      })
    );

    const mockUserObj= { username: 'Julie' };
    const fetch = await postUserLogin(mockUserObj);
    
    expect(fetch).toEqual(null);
  });
});

describe('postFav', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            userId: 3,
            title: 'Jaws 3'
          })
      })
    );
  });

  it('should return', async () => {
    const mockData = {
      userId: 3,
      title: 'Jaws 3'
    };

    const fetch = await postFav(mockData);
    expect(fetch).toEqual(mockData);
  });

  it.skip('should return and error if the fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 404
      })
    );

    const mockData = {
      userId: 3,
      title: 'Jaws 3'
    };
    const fetch = await postFav(mockData);
    
    expect(fetch).toEqual();
  });
});


