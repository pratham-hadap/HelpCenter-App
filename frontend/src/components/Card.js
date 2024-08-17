import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className="border-2 border-gray-400 flex flex-col  pl-3 pt-2 bg-gray-100 rounded-md shadow-lg w-[300px] h-[150px] " >
      <h3 className='font-bold' >{title}</h3>
      <div style={styles.separator}></div> {/* Line separator */}
      <p className='overflow-hidden'>{description}</p>
    </div>
  );
};

const styles = {
  separator: {
    borderTop: '2px solid #ddd',
    margin: '10px 0',
  },
};

export default Card;
