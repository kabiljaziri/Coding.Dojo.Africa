import './App.css';
import React, { useState } from 'react';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [nextPage, setNextPage] = useState("https://pokeapi.co/api/v2/pokemon/");

  const fetchPokemon = () => {
    fetch(nextPage)
      .then((response) => response.json())
      .then((data) => {
        setNextPage(data.next);
        setPokemonList((prevList) => [...prevList, ...data.results]);
      })
      .catch((error) => console.error("Error fetching Pokemon:", error));
  };

  return (
    <div className="container">
      <button className="btn btn-primary" onClick={fetchPokemon}>
        Fetch Pokemon
      </button>
      <br />
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {pokemonList.map((onePokemon) => (
            <ul key={onePokemon.name}>
              <li>{onePokemon.name}</li>
            </ul>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

