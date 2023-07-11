import React, { useEffect } from "react";
import { useState } from "react";
import {
  useLocation,
  useNavigate,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";

import axios from "axios";
import "./App.css";

import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Error404 from "./components/Error404/Error404";
import Favorites from "./components/Favorites/Favorites";

const URL = "http://localhost:3001/rickandmorty/login/";

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const showNav = location.pathname !== "/";

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  // function login(userData) {
  //    if (userData.password === PASSWORD && userData.email === EMAIL) {
  //       setAccess(true);
  //       navigate('/home');
  //    }
  // }

  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const { data } = await axios(URL + `?email=${email}&password=${password}`);
      const { access } = data;

      setAccess(access);
      access && navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  function logout() {
    setAccess(false);
    navigate("/");
  }

  const addCharacter = (newCharacter) => {
    // Verificar si el personaje ya existe en el arreglo characters
    const isDuplicate = characters.some(
      (character) => character.id === newCharacter.id
    );
    if (!isDuplicate) {
      setCharacters([...characters, newCharacter]);
    }
  };

  const onSearch = async (id) => {
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      if (data.name) {
        addCharacter(data);
      }
    } catch (error) {
      alert("No hay personajes de este ID", error);
    }

    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          addCharacter(data);
        }
      })
      .catch((error) => {
        alert("No hay personajes de este ID", error);
      });
  };

  const onClose = (id) => {
    const updatedCharacters = characters.filter(
      (character) => character.id !== id
    );
    setCharacters(updatedCharacters);
  };

  const addRandomCharacter = (randomCharacter) => {
    addCharacter(randomCharacter);
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  return (
    <>
      {showNav && (
        <Nav
          onSearch={onSearch}
          addRandomCharacter={addRandomCharacter}
          onLogout={logout}
        />
      )}

      <Routes>
        <Route
          path="/"
          element={access ? <Navigate to="/home" /> : <Form onLogin={login} />}
        />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} onClose={onClose} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
