const React = require('react');

function New(){
    return (
            <div>
                <h1>New Pokemon Page</h1>
                <form action='/pokemon' method='POST'>
                    Pokemon Name: <input type="text" name="name"/>
                    <br/>
                    Image link: <input type="text" name="img" />.jpg
                    <br/>
                    <input type="submit" value="Create new Pokemon" />
                </form>
            </div>
        )
}

module.exports = New;