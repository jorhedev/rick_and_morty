import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET } from "./action-types";

const initialState = {
  myFavorites: [],
  allCharactersFav: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return { ...state, myFavorites: payload, allCharactersFav: payload };

    case REMOVE_FAV:
      return { ...state, myFavorites: payload };

    case FILTER:
      return {
        ...state,
        myFavorites: state.allCharactersFav.filter(
          (character) => character.gender === payload
        ),
      };

    case ORDER:
      const newOrder = state.allCharactersFav.sort((a, b) => {
        if (a.id > b.id) {
          return "Ascendente" === payload ? 1 : -1;
        }
        if (a.id < b.id) {
          return "Descendente" === payload ? 1 : -1;
        }
        return 0;
      });
      return {
        ...state,
        myFavorites: newOrder,
      };

    case RESET:
      return {
        ...state,
        myFavorites: [...state.allCharactersFav],
      };

    default:
      return { ...state };
  }
};

export default reducer;
