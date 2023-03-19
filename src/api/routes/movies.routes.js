const express = require("express");

const router = express.Router();

const {
  getMovie,
  getMovieById,
  getMovieByTitle,
  getMovieByGenre,
  getMovieByYear
} = require("../controllers/movies.controller");

router.get("/year/", getMovieByYear);
router.get("/", getMovie);
router.get("/:id", getMovieById);
router.get("/title/:title", getMovieByTitle);
router.get("/genre/:genre", getMovieByGenre);

module.exports = router;
