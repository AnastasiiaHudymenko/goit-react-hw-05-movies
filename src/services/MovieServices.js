import axios from 'axios';

class MovieServices {
  API_KEY = 'a33cf34ada77e4072f97e92ac2da3dfc';
  BASE_URL = 'https://developers.themoviedb.org/3/';

  getTrendingMovies = async () => {
    try {
      const res = await axios.get(
        `${this.BASE_URL}trending/movie/day?api_key=${this.API_KEY}`
      );
      return res;
    } catch (error) {
      console.log(error);
    }
  };
}

export default MovieServices;
