import { useState, useEffect } from 'react';
import MovieServices from '../services/MovieServices';
import TrendingListMovie from '../components/TrendingListMovie/TrendingListMovie';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const movieServices = new MovieServices();

  useEffect(() => {
    onRequest();
    // eslint-disable-next-line
  }, []);

  const onRequest = async () => {
    try {
      const res = await movieServices.getTrendingMovies();
      setTrendingMovies(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <h1 style={{ marginBottom: '20px' }}>Trending today</h1>
      <TrendingListMovie movies={trendingMovies} />
    </main>
  );
};

export default Home;
