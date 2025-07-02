import { Router } from "express";
import movies from "../movies.js";
import movieService from "../services/movieService.js";

const routes = Router();

routes.get("/", (req, res) => {
  const movies = movieService.getAll();
  res.render("home", { movies });
});

routes.get("/about", (req, res) => {
  res.render("about");
});

export default routes;
