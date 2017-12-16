import { apiKey } from './.apiKey';

export const apiFetch = async () => {
  try {
    const initialFetch = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
    );
    const parsedData = await initialFetch.json();
    const movieArray = parsedData.results;
    return movieArray;
  } catch (error) {
    console.log('movies fetch', error);
  }
};

export const postNewAccount = async (userObj) => {
  const newUserPost = await fetch('/api/users/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userObj)
  });

  if(newUserPost.status > 400) {
    return null;
  }

  return await newUserPost.json();
}

export const postUserLogin = async (userObj) => {
  const userLogIn = await fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userObj)
  });

  if(userLogIn.status > 400) {
    console.log('logn error', userLogIn)
  }

  return await userLogIn.json();
}







