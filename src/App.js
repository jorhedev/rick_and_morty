import React from 'react'
import { useState, useEffect } from "react"
import { useLocation, useNavigate} from 'react-router-dom';

import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form';
import Error404 from './components/Error404/Error404';



function App() {

   const [characters, setCharacters] = useState([]);  
   const location = useLocation();
   const showNav = location.pathname !== '/';

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = "jorhe@dev.com";
   const PASSWORD = "jorhedev01";

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   function logout() {
      setAccess(false);
      navigate('/');
    }

    useEffect(() => {
      if (!access) {
        navigate('/');
      }
    }, [access, navigate]);

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
    {showNav && <Nav onSearch={onSearch} addRandomCharacter={addRandomCharacter} onLogout={logout}/>}


      <Routes>

         <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/detail/:id" element={<Detail />} />
         <Route path="/" element={<Form onLogin={login}/>}/>
         <Route path="*" element={<Error404/>}/>
         
      </Routes>

      </>
   );
}

export default App;
