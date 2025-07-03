import movies from "../movies.js";
import { v4 as uuid } from "uuid";

export default {
  getAll(filter={}) {
    let result=movies
        if(filter.search){
            result=result.filter(movie=>movie.title.toLowerCase().includes(filter.search.toLowerCase()))
        }

        if(filter.genre){
            result=result.filter(movie=>movie.genre.toLowerCase().includes(filter.genre.toLowerCase()))
        }
        if(filter.year){
            result=result.filter(movie=>movie.year==filter.year)
        }


    return result;
  },

  findMovie(movieId) {
    const result = movies.find((movie) => movieId == movie.id);

    return result;
  },

  create(movieData) {
    const newId = uuid();
    movies.push({
      id: newId,
      ...movieData,
      rating:Number(movieData.rating)
    });

    return newId;
  },
};
