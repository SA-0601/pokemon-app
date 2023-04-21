const React = require('react');
function Show(props){
    const {pokemon} = props;
    return(
        <div>
            <h1>Gotta Catch 'Em All</h1>
            <h2>{pokemon.name.charAt(0).toUpperCase()+ pokemon.name.slice(1)}</h2>
            <img src={pokemon.img + '.jpg'}></img>
            <a href='/pokemon'>Go back</a>
        </div>
        )
}
module.exports = Show;