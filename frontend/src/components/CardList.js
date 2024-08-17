import React from 'react';
import Card from './Card'; 

const CardList = ({ cards }) => {
  console.log("Cards passed to CardList:", cards);

  if (!Array.isArray(cards) || cards.length === 0) {
    return <p>No cards available</p>;
  }

  return (

    <div className='flex flex-wrap justify-around w-[900px] justify-center gap-10 mx-auto p-[100px]' >
    {cards.map((card, index) => (
      <Card key={index} title={card.title} description={card.description} />
    ))}
    </div>
   
  );
};
export default CardList;

