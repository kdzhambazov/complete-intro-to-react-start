import React from 'react';
import ShowCard from './ShowCard';
import Header from './Header';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; // added with Redux
const { arrayOf, shape, string } = PropTypes;

class Search extends React.Component {	
	// constructor(props){ // refactored with Redux
	// 	super(props);
	// 	this.state = { searchTerm: '' };
	// 	this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
	// }

	// handleSearchTermChange(event){ // refactored with Redux
	// 	this.setState({searchTerm: event.target.value});
	// }

	render() {
		return (
			<div className='search'>
				{/*
				refactored with Redux
				<Header showSearch handleSearchTermChange={this.handleSearchTermChange} searchTerm={this.state.searchTerm}/>
			*/}
				<Header showSearch /> {/*refactored with Redux*/}
				<div>
					{
						this.props.shows
							.filter(show => `${show.title} ${show.description}`.toUpperCase()
								.indexOf(this.props.searchTerm.toUpperCase()) !== -1)
						.map(show => <ShowCard key={show.imdbID} {...show} />)
					}
				</div>				
			</div>
		);
	}
};

const mapStateToProps = (state) => ({
	searchTerm: state.searchTerm
});

Search.propTypes = {
	shows: arrayOf(shape({
		title: string,
		description: string
	})),
	searchTerm: string
};

export const Unwrapped = Search; // for unit testing

// export default Search; // refactored with Redux
export default connect(mapStateToProps)(Search);
