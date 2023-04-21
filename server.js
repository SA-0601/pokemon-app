require('dotenv').config();

const express = require('express');

const mongoose = require('mongoose');

const PORT = 3000;
const app = express();

// Data or Models
const pokemons = require('./models/pokemon');
const Pokemons = require('./models/Pokemons');

// ======Configuration=====
//which is required when we are rendering templates from views
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

//setting a middleware to run in the app which is a function which will
//run in between the request and response cycle
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
})

//parses the data from the request
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) =>{
    res.send('<h1>Welcome to Pokemon App !</h1>');
})

app.get('/pokemon', (req, res) => {
    // res.send(pokemon);
    // res.render('Index',{pokemons:pokemons});
    Pokemons.find({}, (error, allPokemons) => {
        res.render('Index', {pokemons: allPokemons})
    })
})

app.post('/pokemon', (req, res) => {
    console.log(req.body);
    Pokemons.create(req.body, (error, createdPokemon) => {
        res.redirect('/pokemon');
    })
})

app.get('/pokemon/new', (req, res) => {
    res.render('New');
})


app.get('/pokemon/:id', (req, res) => {
    console.log(req.params);
    // res.send(pokemons[req.params.indexOfPokemonArray]);
    // res.render('Show', {pokemon: pokemons[req.params.indexOfPokemonArray]});
    Pokemons.findById(req.params.id, (error, foundPokemon) => {
        res.render('Show', {pokemon:foundPokemon});
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    mongoose.set('strictQuery', false);
    // connect to mongoDB
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      mongoose.connection.once('open', () => {
        console.log('Connected to MongoDB!')
    })
})
