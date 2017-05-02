import { SET_SEARCH_TERM } from './actions';
import { ADD_OMDB_DATA } from './actions';
import axios from 'axios';

export function setSearchTerm(searchTerm) {	
	return {
		type: SET_SEARCH_TERM,
		searchTerm
	}
};

export function addOMDBData(/*imdbID, */imdbRating) {	
	return {
		type: ADD_OMDB_DATA,
		// imdbID,
		imdbRating
	}
};

export function getOMDBDetails(imdbID) {
	return (dispatch, getState) => {
		axios.get(`http://www.omdbapi.com/?i=${imdbID}`)
			.then(response => {
				dispatch(addOMDBData(/*imdbID, */response.data.imdbRating))
			})
			.catch(error => console.log('Details error', error));
	}
};