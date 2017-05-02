import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux'; // added with Redux
import PropTypes from 'prop-types';
import { setSearchTerm } from './actionCreators'; // added with Redux
const { string, func } = PropTypes;

class Landing extends React.Component {
	constructor(props){
		super(props);
		this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
	}

	handleSearchTermChange(event){
		this.props.dispatch(setSearchTerm(event.target.value)); // added with async Redux
	}
	
	render() {
		return (
			<div className='landing'>
				<h1>svideo</h1>
				<input value={this.props.searchTerm} onChange={this.handleSearchTermChange} type='text' placeholder='movie name or description...' />
				<Link to='/search'>Search</Link>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	searchTerm: state.searchTerm
});

Landing.PropTypes = {
	searchTerm: string,
	dispatch: func // added with async Redux
};
// export default Landing; // refactored with Redux

export default connect(mapStateToProps)(Landing);
