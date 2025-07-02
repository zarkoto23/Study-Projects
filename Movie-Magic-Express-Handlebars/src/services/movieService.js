import movies from "../movies.js";
import { v4 as uuid } from "uuid";

export default {
  getAll() {
    return movies;
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
    });

    return newId;
  },
};
