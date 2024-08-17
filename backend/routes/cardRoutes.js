const express = require("express");
const router = express.Router();

const {createCard} = require("../controllers/createCard");
const {getAllCards} = require("../controllers/getAllCards");
const{getAllCardByTitle} = require("../controllers/getCardByTitle");

router.post("/cards",createCard);
router.get("/cards",getAllCards);
router.get("/cards/:title",getAllCardByTitle);

module.exports = router;