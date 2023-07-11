const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios(`${URL}${id}`);

    if (!data.name) throw Error("Not Found");

    const character = {
      id: data.id,
      name: data.name,
      gender: data.gender,
      species: data.species,
      origin: data.origin,
      image: data.image,
      status: data.status,
    };
    res.status(200).json(character)

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getCharById;
