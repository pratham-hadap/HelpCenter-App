import React from 'react';

const Navbar = ({ onAddCard }) => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.title}>Abstract | Help Center</div>
      <button onClick={onAddCard} style={styles.button} className=" border-white cursor-pointer  rounded-md bg-black p-[10px] ">Submit a Request</button>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#282c34',
    color: 'white',
  },
  title: {
    fontSize: '20px',
  },

};

export default Navbar;
