import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import AsyncRoute from './AsyncRoute';
import '../public/normalize.css';
import '../public/style.css';
import preload from '../public/data.json';

class App extends React.Component {
	
	render() {
		return (
			<BrowserRouter>
				<Provider store={store}>
					<div className='app'>
						<Match
							exactly
							pattern='/'
							component={
								props => <AsyncRoute props={props} loadingPromise={System.import('./Landing')}/>
							}
						/>
						<Match
							pattern='/search'
							component={
								props => <AsyncRoute props={Object.assign({shows: preload.shows}, props)} loadingPromise={System.import('./Search')}/>
							}
						/>
						<Match
							pattern='/details/:id'
							component={
								props => {
									const shows = preload.shows.filter(show => props.params.id === show.imdbID);
									return <AsyncRoute props={Object.assign({show: shows[0]}, props)} loadingPromise={System.import('./Details')}/>
								}
							}
						/>
					</div>
				</Provider>
			</BrowserRouter>
		);
	}
}

render(<App />, document.getElementById('app'));
