import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
// import axios from 'axios'; // refactored with async redux
import { connect } from 'react-redux';
import { getOMDBDetails } from './actionCreators';
const { shape, string, func } = PropTypes;

class Details extends React.Component {
	// refactored with async redux
	// constructor(props){
	// 	super(props);
	// 	this.state = { omdbData: {} };
	// }

	componentDidMount() {
		// refactored with async redux
		// axios.get(`http://www.omdbapi.com/?i=${this.props.show.imdbID}`)
		// 	.then(response => {
		// 		this.setState({ omdbData: response.data });
		// 	})
		// 	.catch(error => console.log('Details error', error));

		if(!this.props.imdbRating.length){
			this.props.dispatch(getOMDBDetails(this.props.params.id));
		}
	}

	render() {
		const { poster, title, year, description, trailer } = this.props.show;

		return (
			<div className='details'>
				<Header />	
				<section>
					<h1>{title}</h1>
					<h2>({year})</h2>
					{this.props.imdbRating ? <h3>{this.props.imdbRating}</h3> : <img src={require('../public/img/loading.png')} alt='loading'/>}
					<img src={require(`../public/img/posters/${poster}`)} />
					<p>{description}</p>
				</section>
				<div>
					<iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;contorols=0&amp;showinfo=0`} frameBorder='0' allowFullScreen />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		imdbRating: state.imdbRating
	};
};

Details.propTypes = {
	show: shape({
		poster: string,
		trailer: string,
		title: string,
		year: string,
		description: string
	}),
	imdbRating: string,
	dispatch: func // added with async Redux
};

// export default Details; // refactored with Redux

export default connect(mapStateToProps)(Details);