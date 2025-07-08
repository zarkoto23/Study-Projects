import express from "express";
import handlebars from "express-handlebars";
import routes from "./routes.js";
import showRating from "./helpers/ratingHelper.js";
import mongoose from "mongoose";


const app = express();

//db config
try {
  const uri='mongodb://localhost:27017/magic-movies'
  await mongoose.connect(uri)
  console.log("database connected!");
  
  
} catch (error) {
  console.log('database connection faild! - error.message');

}




//handlebars config
app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
    helpers:{
        showRating
    },
  })
);

//express config
app.set("view engine", "hbs");
app.set("views", "./src/views");
app.use("/static", express.static("src/public"));

app.use(express.urlencoded({ extended: false }));

//routes
app.use(routes);

app.listen(3000, () => console.log("Server listen on http://localhost:3000"));
