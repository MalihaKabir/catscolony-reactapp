import React from 'react';

const SearchBox = ({ searchChange }) => {
	return (
		<div className='pa2 mb3'>
			<input
				className='pa3 ba b--yellow bg-washed-yellow'
				type='search'
				placeholder='search for cats'
				onChange={searchChange}
			/>
		</div>
	);
};

export default SearchBox;
