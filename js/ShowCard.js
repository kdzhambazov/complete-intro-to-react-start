import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router'
const { string } = PropTypes;

class ShowCard extends React.Component {
	
	render() {
		const { poster, title, year, description, imdbID } = this.props;
		return (
			<Link to={`/details/${imdbID}`}>
				<div className='show-card'>
					<img src={require(`../public/img/posters/${poster}`)} alt='' />
					<div>
						<h3>{title}</h3>
						<h4>{year}</h4>
						<p>{description}</p>
					</div>
				</div>
			</Link>
		);
	}
}

ShowCard.propTypes = {	
	poster: string.isRequired,
	title: string.isRequired,
	year: string.isRequired,
	description: string.isRequired,
	imdbID: string.isRequired
}

export default ShowCard;
