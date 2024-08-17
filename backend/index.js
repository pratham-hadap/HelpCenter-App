const express = require("express");
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'http://localhost:3000' // URL where your frontend runs
}));



require("dotenv").config();
const PORT = process.env.PORT || 8000;

app.use(express.json());

const routes = require("./routes/cardRoutes");
app.use("/api/v1",routes)

const db = require("./config/database");
db.dbConnect();

app.listen(PORT, ()=>{
    console.log(`App runnig on PORT number ${PORT}`)
})

app.get("/", (req,res)=>{
    res.send("get route")
})
