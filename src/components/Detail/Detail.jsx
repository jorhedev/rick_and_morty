
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Detail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});
  
    useEffect(() => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({ data }) => {
          if (data.name) {
            setCharacter(data);
          } else {
            window.alert('No hay personajes con ese ID');
          }
        })
        .catch((error) => {
          console.error('Error retrieving character details:', error);
        });
  
      return () => {
        setCharacter({});
      };
    }, [id]);
  
    return (
      <div>
      <h2>{character.name}</h2>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      {character.origin && <p>Origin: {character.origin.name}</p>}
      {character.image && <img src={character.image} alt={character.name} />}
      </div>
    );
  };
  
  export default Detail;
  