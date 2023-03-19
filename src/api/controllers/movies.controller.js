const Movies = require("../models/movies.model");


const getMovie = async (req, res) => {
    try {
        const allMovies = await Movies.find();        
        return res.status(200).json(allMovies);        
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getMovieById = async (req, res) => {
    try {
        const {id} = req.params;
        const allMovies = await Movies.findById(id);         
        return res.status(200).json(allMovies);      
    } catch (error) {
        return res.status(500).json(error);
    }
}

const  getMovieByTitle = async (req, res) => {
    try {
        const {title} = req.params;
        const allMovies = await Movies.find({title:title});         
        return res.status(200).json(allMovies);      
    } catch (error) {
        return res.status(500).json(error);
    }
}

const  getMovieByGenre = async (req, res) => {
    try {
        const {genre} = req.params;
        const allMovies = await Movies.find({genre:genre});         
        return res.status(200).json(allMovies);      
    } catch (error) {
        return res.status(500).json(error);
    }
}

const  getMovieByYear = async (req, res) => {
    try {
        // const {year} = req.params;
        const allMovies = await Movies.find({year: {$eq:2003}});         
        return res.status(200).json(allMovies);      
    } catch (error) {
        return res.status(500).json(error);
    }
}



module.exports = {getMovie, getMovieById, getMovieByTitle, getMovieByGenre, getMovieByYear };