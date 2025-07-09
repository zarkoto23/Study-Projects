import Movie from "../models/Movie.js";

export default {
  getAll(filter = {}) {
    let result = Movie.find();

    // if(filter.search){
    //    result=result.filter(movie=>movie.title.toLowerCase().includes(filter.search.toLowerCase()))
    // }

    // if(filter.genre){
    //     result=result.filter(movie=>movie.genre.toLowerCase().includes(filter.genre.toLowerCase()))
    // }
    // if(filter.year){
    //     result=result.filter(movie=>movie.year==filter.year)
    // }

    return result;
  },

 findMovie(movieId) {
    const result = Movie.findById(movieId);
    

    return result;
  },

  create(movieData) {
    const newMovie = Movie.create({
      ...movieData,
      year: Number(movieData.year),
      rating: Number(movieData.rating),
    });
   
    return newMovie
  },
};
