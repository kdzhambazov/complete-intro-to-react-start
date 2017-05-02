import { SET_SEARCH_TERM } from './actions';
import { ADD_OMDB_DATA } from './actions';

const DEFAULT_STATE = {
	searchTerm: '',
	imdbRating: ''
};

const setSearchTerm = (state, action) => {
	return Object.assign({}, state, {searchTerm: action.searchTerm});
};

const addOMDBData = (state, action) => {
	const newState = {};
	Object.assign(newState, state, {imdbRating: action.imdbRating});

	return newState;
};

const rootReducer = (state = DEFAULT_STATE, action) => {
	switch(action.type ){
		case SET_SEARCH_TERM:
			return setSearchTerm(state, action);
		case ADD_OMDB_DATA:
			return addOMDBData(state, action);			
		default:
			return state;
	}
};

export default rootReducer;
