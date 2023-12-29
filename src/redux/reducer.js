/* import { type } from "@testing-library/user-event/dist/type"; */
import { ADD_FAV, REMOVE_FAV } from "./action-types";
import Apps from "../App";
const initialState = {
    myFavorites: []
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FAV:

            return { ...state, myFavorites: [...state.myFavorites, payload] }

        case REMOVE_FAV:
            return { ...state, myFavorites: state.myFavorites.filter(fav => fav.id !== payload) }

        default: return { ...state } // el default hace una coipia del estado.

    }
}

export default reducer;