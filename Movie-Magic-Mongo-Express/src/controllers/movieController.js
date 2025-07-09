import { Router } from "express";
import movieService from "../services/movieService.js";
import Movie from "../models/Movie.js";
import castService from "../services/castService.js";

const movieController = Router();

movieController.get("/create", (req, res) => {
  res.render("create");
});

movieController.post("/create", (req, res) => {
  const newMovie = req.body;

  movieService.create(newMovie);

  res.redirect("/");
});

movieController.get("/:movieId/details",async (req, res) => {
  const movieId = req.params.movieId;
  const movie = await movieService.findMovieCasts(movieId).lean()
  

  res.render("movie/details", { movie });
});

movieController.get('/search',(req, res)=>{
    const filter=req.query

    const movies=movieService.getAll(filter)
    res.render('search',{movies,filter})
})

movieController.get('/:movieId/attach',async(req,res)=>{
  const movieId=req.params.movieId
  const movie=await movieService.findMovie(movieId).lean()
  const casts=await castService.getAll({exclude: movie.casts}).lean()
  
  res.render('movie/attach',{movie,casts}) 
})

movieController.post('/:movieId/attach',(req,res)=>{
  const castId=req.body.cast
  const movieId=req.params.movieId

  castService.attachCast(castId, movieId)
 res.redirect(`/movies/${movieId}/details`)

})
export default movieController;
