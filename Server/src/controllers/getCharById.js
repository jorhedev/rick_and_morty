const axios = require('axios')


const URL = ("https://rickandmortyapi.com/api/character/");

const getCharById = (req, res)  => {
    const {id }= req.params;
    const apiUrl = `${URL}${id}`;

    axios
    .get(apiUrl)
    .then(
        response => {
            const {id, name, gender, species, origin, image, status } = response.data;

            const character = {
                id,
                name,
                gender,
                species,
                origin,
                image,
                status
              };


              if(character){
                return res
                .status(200).json(character)
              }else{
                return res
                .status(404).json({message: "Not Found"})
              }
        })
        .catch(
            error => {
                return res
                .status(500).json({message: error.message})
              })
}

module.exports = getCharById ;