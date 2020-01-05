import React from 'react';
import Card from './Card';

const CardList = ({ cats }) => {
	return (
		<div>
			{cats.map((cat, i) => {
				//when you do loop, you have to give it a unique key.
                return (
                    <Card
                        key={i} 
                        id={cat.id} 
                        name={cat.name} 
                        email={cat.email} 
                    />
                );
			})}
		</div>
	);
};

export default CardList;
