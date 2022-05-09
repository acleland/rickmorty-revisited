import React from 'react';
import { useState, useEffect } from 'react';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((res) => setCharacters(res.results))
      .then(() => setLoading(false))
      .catch((err) => console.log('oh no error', err));
  }, []);

  return (
    <>
      <h1>Rick and Morty Characters</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <span>
              <img
                width="100px"
                src={character.image}
                alt={`Image of ${character.name}`}
              />
              <h3>{character.name}</h3>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
