import axios from 'axios';

class MovieServices {
  API_KEY = '8dbbaf50b58201a2d3381e6f92e0ca1f';
  BASE_URL = 'https://api.themoviedb.org/3/';

  getTrendingMovies = async () => {
    try {
      const res = await axios.get(
        `${this.BASE_URL}trending/movie/day?api_key=${this.API_KEY}`
      );
      return res.data.results;
    } catch (error) {
      console.log(error);
    }
  };
}

export default MovieServices;
