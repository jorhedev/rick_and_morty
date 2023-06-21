import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import styles from './Detail.module.css'

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
      <div className={styles.container}>
        <div className={styles.aboutContent}>
        {character.image && <img src={character.image} alt={character.name} />}
        <div className={styles.aboutMe}>
        <h2>{character.name}</h2>
        <p><span>ID:</span>{character.id}</p>
        <p><span> Status: </span>{character.status}</p>
        <p><span> Species: </span>{character.species}</p>
        <p><span> Gender:</span> {character.gender}</p>
        {character.origin && <p><span> Origin: </span>{character.origin.name}</p>}
        </div>
      </div>
      </div>


    );
  };
  
  export default Detail;
  