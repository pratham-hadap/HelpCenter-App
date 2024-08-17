import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CardList from './components/CardList';
import Footer from './components/Footer';
import AddCard from './components/AddCard';  
import { fetchCards } from './components/api';

const App = () => {
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchCards()
      .then(data => {
        console.log("Fetched data:", data); 
        setCards(data.getCard || []); 
      })
      .catch(error => console.error("Error fetching cards:", error));
  }, []);

  const handleAddCard = () => {
    setShowModal(true);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredCards = cards.filter(card =>
    card.title && card.title.toLowerCase().includes(search.toLowerCase())
  );

  console.log("Filtered cards based on search:", filteredCards);

  return (
    <div >
      <Navbar onAddCard={handleAddCard}  />
      <section style={styles.section}  className=" bg-purple-100 h-[300px] flex-col flex justify-center items-center gap-10  " >
        <h1 className='text-6xl'>How Can We Help?</h1>
        <input
          className=" px-4 py-2 border border-black rounded-md shadow-md pr-10"
          type="text"
          placeholder="Search by title"
          value={search}
          onChange={handleSearchChange}
          style={styles.searchInput}
        />
      </section>
      <section style={styles.cardSection}>
        {filteredCards.length > 0 ? (
          <CardList cards={filteredCards} />
        ) : (
          <p style={styles.noCardsMessage}>No cards available according to your search.</p>
        )}
      </section>
      <Footer />
      
      {showModal && (
        <div style={styles.modal}>
          <h2>Submit a Request</h2>
          <AddCard setCards={setCards} cards={cards} setShowModal={setShowModal} />
          <button onClick={() => setShowModal(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

const styles = {
  searchInput: {
    padding: '10px',
    width: '700px',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
 
  noCardsMessage: {
    padding: '20px',
    textAlign: 'center',
    color: 'red',
  },
  modal: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    backgroundColor: 'white',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
  },
};

export default App;
