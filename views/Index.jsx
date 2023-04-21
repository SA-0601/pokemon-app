const React = require('react');
const myStyle = {
    color: '#263A29',
    backgroundColor: '#F2E3DB',
    };

function Index(props){
    const {pokemons} = props;
    console.log(pokemons);
    return(
        <div style={myStyle}>
            <h1>See All of the Pokemons</h1>
            <nav>
             <a href="/pokemon/new">Create a New Pokemon</a>
            </nav>
            <ul>
                {pokemons.map((pokemon,i) => {
                    return (
                        <li key= {pokemon._id}>
                            <h3><a href={`/pokemon/${pokemon._id}`}>{pokemon.name.charAt(0).toUpperCase()+ pokemon.name.slice(1)}</a></h3>
                        </li>
                        )
                })
            }
            </ul>
        </div>
        )
}

module.exports = Index;