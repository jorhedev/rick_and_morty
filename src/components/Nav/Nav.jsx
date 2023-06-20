import { useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

import styles from './Nav.module.css'

const  Nav = ({onSearch, addRandomCharacter, onLogout}) => {

    const [id, setId] = useState('');
    
    const handleRandomCharacter = () => {
      const randomCharacterId = Math.floor(Math.random() * 826) + 1;
      const apiUrl = `https://rickandmortyapi.com/api/character/${randomCharacterId}`;

        axios
          .get(apiUrl)
          .then(({ data }) => {
            const randomCharacter = data;
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
              <button onClick={onLogout}>LOGOUT</button>
                <button>
                    <NavLink to='/home'>HOME</NavLink>
                </button>
                <button>
                    <NavLink to='/about'>ABOUT</NavLink>
                </button>
                <input type='search' value={id} onChange={handleChange} />
                <button onClick={handleAdd}>Agregar</button> 
                <button onClick={handleRandomCharacter}>RANDOM</button>
            </div>
       </div>
    );
 }

 export default Nav