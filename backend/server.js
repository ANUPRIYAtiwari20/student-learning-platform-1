require("dotenv").config();
const express = require("express");
const PORT = process.env(PORT) || 3000;
const app = express();


app.get("/", (req, res) => {
    res.status(200).redirect("")
})


app.listen(PORT, console.log(`Listening on port ${PORT}`));