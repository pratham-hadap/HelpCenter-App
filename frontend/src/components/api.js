import axios from 'axios';

const API_URL = "http://localhost:7000/api/v1"; // Backend URL
export const fetchCards = async () => {
    try {
        const response = await axios.get(`${API_URL}/cards`);
        console.log("Fetched data:", response.data); 
        return response.data;
    } catch (error) {
        console.error("Error fetching cards:", error);
        throw error;
    }
};


// Fetch card by title
export const fetchCardByTitle = async (title) => {
    try {
        const response = await axios.get(`${API_URL}/cards/${title}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching card by title:", error);
        throw error;
    }
};

// Create a new card
export const createCard = async (card) => {
    try {
        const response = await axios.post(`${API_URL}/cards`, card);
        return response.data;
    } catch (error) {
        console.error("Error creating card:", error);
        throw error;
    }
};
