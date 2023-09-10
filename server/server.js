const express = require('express');
const cors = require('cors');
// const router = require('./Routes/Router')
require("dotenv").config();

const app = express();

app.use(express.json())
app.use(cors());
// app.use(router); 

app.get('/', (req ,res) => {
    res.download('./Professional Modern CV Resume (3)-1-1.pdf');
});

app.listen(8000,() => {
    console.log('Server is live');
});