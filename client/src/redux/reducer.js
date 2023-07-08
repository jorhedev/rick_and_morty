import { ADD_FAV, REMOVE_FAV } from "./action-types";

const initialState = {
  myFavorites: [],
  allCharactersFav: []
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return { ...state, myFavorites: payload, allCharactersFav: payload };

    case REMOVE_FAV:
      return { ...state, myFavorites: payload };

    default:
      return { ...state };
  }
};

export default reducer;
