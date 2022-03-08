import types from "./types";

const add = (movies) => ({
    type: types.ADD_MOVIES,
    movies
})

export default { add }