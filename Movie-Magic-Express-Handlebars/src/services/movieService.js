import movies from "../movies.js";


export default { 
    findMovie(movieId){

    const result=movies.find(movie=>movieId==movie.id)

    return result
}


}