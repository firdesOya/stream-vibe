export const API_KEY = process.env.NEXT_PUBLIC_API_TOKEN;

const defaultOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const fetchData = async (url, options = {}) => {
  try {
    const finalOptions = { ...defaultOptions, ...options };
    const response = await fetch(url, finalOptions);
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error(data.status_message || "Bir hata oluştu");
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchGenresShowsData = async () => {
  const url = `https://api.themoviedb.org/3/genre/tv/list?language=en`;
  const data = await fetchData(url);
  return data.genres;
};
export const fetchGenresMoviesData = async () => {
  const url = `https://api.themoviedb.org/3/genre/movie/list?language=en`;
  const data = await fetchData(url);
  return data.genres;
};

export const fetchMoviesData = async () => {
  const url = `https://api.themoviedb.org/3/discover/movie?language=en`;
  const data = await fetchData(url);
  return data.results;
};

export const fetchNowPlayingData = async () => {
  const url = `https://api.themoviedb.org/3/movie/now_playing?language=en`;
  const data = await fetchData(url);
  return data.results;
};

export const fetchUpComingData = async () => {
  const url = `https://api.themoviedb.org/3/movie/upcoming?language=en`;
  const data = await fetchData(url);
  return data.results;
};

export const fetchPopularShowData = async () => {
  const url = `https://api.themoviedb.org/3/tv/popular?language-en`;
  const data = await fetchData(url);
  return data.results;
};

export const fetchOnShowData = async () => {
  const url = `https://api.themoviedb.org/3/tv/on_the_air?language-en`;
  const data = await fetchData(url);
  return data.results;
};
