import { useState } from 'react';
import axios from 'axios';
import { NavLink, useLocation } from 'react-router-dom';

import styles from './Nav.module.css'

const  Nav = ({onSearch, addRandomCharacter, onLogout}) => {

    const location = useLocation();
    const [id, setId] = useState('');
    
    const handleRandomCharacter = () => {
      const randomCharacterId = Math.floor(Math.random() * 5) + 1;
      const apiUrl = `http://localhost:3001/rickandmorty/character/${randomCharacterId}`;

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

    const isHomeRoute = location.pathname === '/home';

    return (

       <div className={styles.container}>
            <NavLink to='/home'>
            <img src={require("../../images/logo.png")} alt="Logo" />
            </NavLink>

              <ul className={styles.navLinks}>
                <li><button onClick={onLogout} className={styles.navlinkButton}>LOGOUT</button></li>
                <li><NavLink to='/about' className={`${styles.navlinkButton} ${styles.about}`}>ABOUT</NavLink></li>
                <li><NavLink to='/favorites' className={`${styles.navlinkButton} ${styles.about}`}>FAVORITES</NavLink></li>
                {isHomeRoute && (<>
                <li><input type='search' value={id} onChange={handleChange} placeholder="Buscar..."/></li>
                <li><button onClick={handleAdd} className={styles.navlinkButton}>AGREGAR</button> </li>
                <li><button className={styles.navlinkButton} onClick={handleRandomCharacter}>RANDOM</button></li>
                </>)}
              </ul>
       </div>
    );
 }

 export default Nav