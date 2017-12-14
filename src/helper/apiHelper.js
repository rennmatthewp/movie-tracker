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
    console.log(error);
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
  console.log(newUserPost)
  if(newUserPost.status > 400) {
    console.log('bad status')
  }
  const parsedResponse = await newUserPost.json();
  console.log(parsedResponse)
  return parsedResponse;
}
  