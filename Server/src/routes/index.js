const express = require('express');
const router = express.Router();

const login = require('../controllers/login');
const getCharById = require('../controllers/getCharById');
const handleFavorites = require('../controllers/handleFavorites');

router.get('/character/:id', (req, res) => {
    getCharById(req, res);
})

router.get('/login', (req, res) => {
    login(req, res);
});

router.post('/fav', (req, res) => {
    handleFavorites.postFav(req, res);
});

router.delete('/fav/:id', (req, res) => {
    handleFavorites.deleteFav(req, res);
});


module.exports = router;
