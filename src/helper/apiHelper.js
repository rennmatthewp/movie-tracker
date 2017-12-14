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
  try {
    const newUserPost = await fetch('api/user/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userObj)
  });
  return newUserPost

  } catch (error){
    console.log(error);
  }
}
  