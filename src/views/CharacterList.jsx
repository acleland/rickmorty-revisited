import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
      {loading ? (
        <p>Loading characters...</p>
      ) : (
        <ul>
          {characters.map((character) => (
            <li key={character.id}>
              <span>
                <Link to={`/${character.id}`}>
                  <img
                    width="100px"
                    src={character.image}
                    alt={`Image of ${character.name}`}
                  />
                  {character.name}
                </Link>
              </span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
