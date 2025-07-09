import { Router } from "express";
import movieService from "../services/movieService.js";
import Movie from "../models/Movie.js";

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
  const movie = await Movie.findById(movieId).lean();

  res.render("movie/details", { movie });
});

movieController.get('/search',(req, res)=>{
    const filter=req.query

    const movies=movieService.getAll(filter)
    res.render('search',{movies,filter})
})

movieController.get('/:movieId/attach',(req,res)=>{
  res.render('movie/attach')
})
export default movieController;
