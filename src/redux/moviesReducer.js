import { produce } from 'immer'
import types from './types';

const movies = (state = [], action) => {
    switch (action.type) {
        case types.ADD_MOVIES:
            return produce(state, draftState => {
                const movies = action.movies;
                movies.map(movie => draftState.push(movie))
            })
        default:
            return state
    }
}

export default movies;