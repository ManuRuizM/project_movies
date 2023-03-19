const express = require('express');
const {connect} = require('./src/utils/database'); //importamos nuestra función connnect de nuestro archivo database.js
const routerMovies = require('./src/api/routes/movies.routes');
const PORT = 5000;

const app = express();

connect();
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use('/movies', routerMovies);
app.listen(PORT, ()=> console.log(`listening on: http://localhost:${PORT}`));