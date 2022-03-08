import types from "./types";


const addName = (name) => ({
    type: types.ADD_NAME,
    name
})
const addEmail = (email) => ({
    type: types.ADD_EMAIL,
    email
})

const addPhoto = (photo) => ({
    type: types.ADD_PHOTO,
    photo
})


const deleteData = () => ({
    type: types.DELETE_DATA
})

export default { deleteData, addName, addEmail, addPhoto };