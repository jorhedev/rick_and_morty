
let myFavorites = [];

function postFav(req, res) {

    myFavorites.push(req.body);
    res.status(200).json(myFavorites);
}

function deleteFav(req, res) {
    const { id } = req.params;

 // Filtrar los personajes favoritos y eliminar el que tiene el mismo id
 myFavorites = myFavorites.filter(character => character.id !== Number(id));

 // Devolver el arreglo de favoritos actualizado en formato JSON
 res.status(200).json(myFavorites);
};

  
  module.exports = { postFav, deleteFav };