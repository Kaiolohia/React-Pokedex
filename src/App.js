import React from 'react';
import Pokedex from './Pokedex'
const style = {
    textAlign: "center",
    fontFamily: "Outfit, sans-serif",
    color: "gray"
}
const App = () => (
    <>
        <h1 style={style}>Pokedex</h1>
        <Pokedex/>
    </>
);

export default App