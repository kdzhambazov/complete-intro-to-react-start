import React from 'react';
import { Link } from 'react-router'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; // added with Redux
import { setSearchTerm } from './actionCreators'; // added with Redux
const { func, bool, string } = PropTypes;

class Header extends React.Component {	
	constructor(props){ // added with Redux
		super(props);
		this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
	}

	handleSearchTermChange(event){ // added with Redux
		this.props.dispatch(setSearchTerm(event.target.value));
	}
	
	render() {
		const { /*handleSearchTermChange, // refactored with Redux*/showSearch, searchTerm} = this.props;
		let utilSpace = null;

		if(showSearch) {
			// utilSpace = <input onChange={handleSearchTermChange} type='text' value={searchTerm} placeholder='Search' />; // refactored with Redux
			utilSpace = <input onChange={this.handleSearchTermChange} type='text' value={searchTerm} placeholder='movie name or description...' />;
		} else {
			utilSpace = <h1>
					<Link to='/search'>Back</Link>
				</h1>;
		}

		return (
			<header>
				<h1>
					<Link to='/'>svideo</Link>
				</h1>
				{utilSpace}
			</header>
		);
	}
}

const mapStateToProps = (state) => ({ // added with Redux
	searchTerm: state.searchTerm	
});

Header.propTypes = {
	// handleSearchTermChange: func, // refactored with Redux
	showSearch: bool,
	searchTerm: string,
	dispatch: func // added with Redux
};

// export default Header; // refactored with Redux
export default connect(mapStateToProps)(Header); // refactored with Redux