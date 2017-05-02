import React from 'react';
import PropTypes from 'prop-types';
const { object } = PropTypes;


class AsyncRoute extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			loaded: false
		};
	}

	componentDidMount() {
		this.props.loadingPromise.then(
			module => {
				this.component = module.default;
				this.setState({loaded: true});
			}
		)
	}

	render() {
		if(this.state.loaded){
			return <this.component {...this.props.props} />;
		} else {
			return <h1><img src={require('../public/img/loading.png')} alt='loading'/></h1>
		}
	}
}

AsyncRoute.PropTypes = {
	props: object,
	loadingPromise: object
};

export default AsyncRoute;