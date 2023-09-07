const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req ,res) => {
    res.download('./Professional Modern CV Resume (3)-1-1.pdf');
});

app.listen(8000,() => {
    console.log('Server is live');
});