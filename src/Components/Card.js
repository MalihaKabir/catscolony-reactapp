import React from 'react';

const Card = (props) => {
	const { id, name, email } = props;
	return (
		<div className='tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='cat photos' src={`https://robohash.org/${id}${id}?set=set4`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
};

export default Card;
