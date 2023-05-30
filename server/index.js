const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const { getFortune, getCompliment, fetchFortune } = require('./controller');

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
// app.post("/api/removeItem", removeItem);
app.post("/api/fortune", fetchFortune);

app.listen(4000, () => console.log("Server running on port 4000"));
