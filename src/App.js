import React from 'react'
import { useState } from "react"
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail'



function App() {

   const [characters, setCharacters] = useState([]);

   const addCharacter = (newCharacter) => {
      // Verificar si el personaje ya existe en el arreglo characters
      const isDuplicate = characters.some((character) => character.id === newCharacter.id);
      if (!isDuplicate) {
         setCharacters([...characters, newCharacter]);
      }
   }

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
         .then(({ data }) => {
         if (data.name) {
            addCharacter(data);
         } else {
         window.alert('¡No hay personajes con este ID!');
         }
      })
      .catch((error) => {
      console.error('Error al buscar el personaje:', error);
      });
   };

   const onClose = (id) => {
      const updatedCharacters = characters.filter((character) => character.id !== id);
      setCharacters(updatedCharacters);
   }

   const addRandomCharacter = (randomCharacter) => {
      addCharacter(randomCharacter);
    };


   return (
      <>
      <Nav onSearch={onSearch} addRandomCharacter={addRandomCharacter} />

      <Routes>
         <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      </>
   );
}

export default App;
