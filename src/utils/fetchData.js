/* This is a constant that is being exported. It is an object that contains a method and headers. The
method is a GET request and the headers are the host and the key. */
export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
  },
};

/* This is a constant that is being exported. It is an object that contains a method and headers. The
method is a GET request and the headers are the host and the key.
*/
export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": "f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85",
  },
};

/**
 * It takes a URL and an options object, and returns the data from the response
 * @param url - The URL to fetch data from.
 * @param options - This is an object that contains the request method, headers, and body.
 * @returns The data is being returned.
 */
export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
