import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
// import { cats } from './cats';

// // the description of what our state should be.
// const state = {
// 	cats        : cats,
// 	searchField : '',
// };

// it extends the Component(short hand)/React.Component class
class App extends Component {
	// adding state
	constructor () {
		// calling super() since we're extending a component class.
		super();
		// the description of what our state should be. state is changeable, props are not.
		this.state = {
			cats        : [],
			searchField : '',
		};
	}

	componentDidMount () {
		// it means go to this link and fetch users from json placeholder by using this link.
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => {
				// change this response to object by using ".json()",
				return response.json();
			}) // then we'll get the users
			.then((users) => {
				this.setState({ cats: users });
			});
	}

	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value });
		// use this.state.cats to access state
	};

	render () {
		// destructuring
		const { cats, searchField } = this.state;

		const filteredCats = cats.filter((cat) => {
			return cat.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase());
		});

		if (!cats.length) {
			return <h1 className='tc f1'>Loading . . .</h1>;
		} else {
			return (
				<div className='tc'>
					<h1 className='f1'>CatsColony</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
						<CardList cats={filteredCats} />
					</Scroll>
					<footer className='pt5 pb4'>
						<div>&copy; 2019 | Made with love!</div>
					</footer>
				</div>
			);
		}
	}
}

export default App;
