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

  if(newUserPost.status >= 400) {
    console.log('new account bad status')
    return null;
  }

  return await newUserPost.json();
};

export const postUserLogin = async (userObj) => {
  const userLogIn = await fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userObj)
  });


  if(userLogIn.status >= 400) {
    console.log('logn error', userLogIn)
    return null;
  }
  console.log(userLogIn)
  return await userLogIn.json();
};


export const postFav = async (userId, movieObj) => {
  const userIdObj= {user_id: userId}
  const favData = await fetch(`/users/:${userId}/favorites/new`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({...userIdObj, ...movieObj})
  });
  const jsonData = await favData.json()
  console.log('got into post')
  console.log(jsonData)
  return jsonData;
}







