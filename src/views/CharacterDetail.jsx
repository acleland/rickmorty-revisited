import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

export default function CharacterDetail() {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((res) => setCharacter(res))
      .then(() => setLoading(false))
      .catch((err) => console.error('Oh golly gee, we have an error', err));
  });

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2>{character.name}</h2>
          <img src={character.image} alt={`Image of ${character.name}`} />
          <ul>
            <li>{character.species}</li>
            <li>Status: {character.status}</li>
            <li>Origin: {character.origin.name}</li>
            <li>Location: {character.location.name}</li>
          </ul>
          <button onClick={(e) => history.push('/')}>
            Back to Character List
          </button>
        </>
      )}
    </>
  );
}
