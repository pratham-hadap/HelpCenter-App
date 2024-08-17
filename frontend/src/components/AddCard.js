import React, { useState } from 'react';
import { createCard } from '../components/api';

const AddCard = ({ setCards, cards, setShowModal }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCard = { title, description };
    try {
      const createdCard = await createCard(newCard);
      setCards([...cards, createdCard]); 
      setShowModal(false); 
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error("Failed to create card:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.heading}>Add a New Card</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter card title"
        required
        style={styles.input}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter card description"
        required
        style={styles.textarea}
      />
      <button type="submit" style={styles.submitButton}>Submit</button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: 'auto',
  },
  heading: {
    marginBottom: '20px',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    height: '100px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    resize: 'none',
  },
  submitButton: {
    padding: '10px 20px',
    backgroundColor: '#61dafb',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default AddCard;
