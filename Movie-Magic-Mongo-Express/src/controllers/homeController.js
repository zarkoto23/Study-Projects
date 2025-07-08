import { Router } from "express";
import movies from "../movies.js";
import movieService from "../services/movieService.js";

const routes = Router();

routes.get("/", async(req, res) => {
  const movies = await movieService.getAll().lean()
  
  // res.render("home", { movies:movies.map(movie=>movie.toObject()) });
  res.render("home", { movies});

});

routes.get("/about", (req, res) => {
  res.render("about");
});

export default routes;
