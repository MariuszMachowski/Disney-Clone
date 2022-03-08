import types from "./types";
import produce from "immer";
const initialState = {
    name: "",
    email: "",
    photo: '',
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_DATA:
            return produce(state, draftState => {
                const newData = {
                    name: action.name,
                    email: action.email,
                    photo: action.photo,
                }
                console.log(action);
            })
        case types.ADD_NAME:
            return produce(state, draftState => {
                draftState.name = action.name;
            })
        case types.ADD_EMAIL:
            return produce(state, draftState => {
                draftState.email = action.email;
            })
        case types.ADD_PHOTO:
            return produce(state, draftState => {
                draftState.photo = action.photo;
            })
        case types.DELETE_DATA:
            return produce(state, draftState => {
                draftState.name = null;
                draftState.email = null;
                draftState.photo = null;
            })
        default:
            return state
    }
}

export default user;