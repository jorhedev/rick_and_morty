import { useState } from 'react';
import axios from 'axios';

import styles from './Nav.module.css'

const  Nav = ({onSearch, addRandomCharacter}) => {

    const [id, setId] = useState('');
    
    const handleRandomCharacter = () => {
        axios
          .get('https://rickandmortyapi.com/api/character/')
          .then(({ data }) => {
            const randomCharacter = data.results[Math.floor(Math.random() * data.results.length)];
            addRandomCharacter(randomCharacter);
          })
          .catch((error) => {
            console.error('Error al obtener un personaje aleatorio:', error);
          });
      };
      
    const handleChange = (event) => {
    setId(event.target.value);
    };
      
    const handleAdd = () => {
    onSearch(id);
    setId('');
    };

    return (

       <div className={styles.Nav}>
            <div className={styles.SearchBar}>
                <input type='search' value={id} onChange={handleChange} />
                <button onClick={handleAdd}>Agregar</button> 
                <button onClick={handleRandomCharacter}>RANDOM</button>
            </div>
       </div>
    );
 }

 export default Nav